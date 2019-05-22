import React, { createContext, Component} from 'react'
import AuthService from '../services/Auth'
import toastr from 'toastr'
import history from '../components/history'
import BookshelfService from '../services/Bookshelf';
import toast from 'toastr'

export const Mycontext = createContext()

const service = new AuthService()
const bookshelfService = new BookshelfService()

class MyProvider extends Component{
  state = {
    form: {
      email: '',
      name: '',
      password: '',
      photo: ''
    },
    user: JSON.parse(window.localStorage.getItem('logged')),
    books: [],
    isChoosen: false
  }

  componentDidMount() {
    bookshelfService
      .shelf()
      .then(response => this.setState({ books: response.books }))
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleInput = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
  }

  handleImage = async e => {
    const uploadData = new FormData()
    uploadData.append('file', e.target.files[0])
    uploadData.append('upload_preset', 'ironprofile')

    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dqqtlpdt0/image/upload',
      { method: 'POST', body: uploadData}
    )

    const photo = await response.json()
    const { form } = this.state
    form.photo = photo.eager[0].url
    this.setState(form)
  }

  handleSignup = e => {
    service
      .signup(this.state.form)
      .then(response => {
        if(response.err) return toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣')
        toastr.success('¡Súper! Te has registrado con éxito. 👍🏻')
        this.setState({
          form: {
            email: '',
            name: '',
            password: '',
            photo: ''   
          }
        })
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleLogin = e => {
    service
      .login(this.state.form)
      .then(response => {
        if(response.err) return toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣')
        window.localStorage.setItem('logged',JSON.stringify(response.data))
        this.setState({ user: response.data })
        toastr.success('¡Genial! Bienvenid@. 🙂')
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleLogout = e => {
    service
      .logout()
      .then(response => {
        window.localStorage.clear()
        this.setState({ user: window.localStorage.getItem('logged'), books: [] })
        toastr.info('Regresa pronto. 🙂')
        history.push('/')
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleAdd = (e, booksSearch) => {
    const { isChoosen } = this.state
    bookshelfService
      .add(booksSearch[e.target.value])
      .then(response => {
        this.setState({ isChoosen: !isChoosen, books: response.books })
        toastr.success('Nice! Agregaste un nuevo libro a tu biblioteca. 📕')
      })
      .catch(err => toast.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleRemoveCarousel = (e, booksSearch) => {
    const { isChoosen } = this.state
    bookshelfService
      .remove(booksSearch[e.target.value])
      .then(response => {
        toastr.warning('¡Listo! Quitaste un libro de tu biblioteca. 📕')
        this.setState({ isChoosen: !isChoosen, books: response.books })
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleRemoveProfile = e => {
    const { books } = this.state
    bookshelfService
      .remove(books[e.target.value])
      .then(response => {
        toastr.warning('¡Listo! Quitaste un libro de tu biblioteca. 📕')
        this.setState({ books: response.books })
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  render() {
    return(
      <Mycontext.Provider value={{
        user: this.state.user,
        books: this.state.books,
        isChoosen: this.isChoosen,
        form: this.state.form,
        handleInput: this.handleInput,
        handleImage: this.handleImage,
        handleSignup: this.handleSignup,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        handleAdd: this.handleAdd,
        handleRemoveCarousel: this.handleRemoveCarousel,
        handleRemoveProfile: this.handleRemoveProfile
      }}>
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}

export default MyProvider