import React, { createContext, Component} from 'react'
import AuthService from '../services/Auth'
import BooksService from '../services/Books'
import toastr from 'toastr'
import history from '../components/history'

export const Mycontext = createContext()

const service = new AuthService()
const serviceBooks = new BooksService()

class MyProvider extends Component{
  state = {
    form: {
      email: '',
      name: '',
      password: '',
      photo: ''
    },
    user: null
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
    console.log(this.state.form)
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
        //window.localStorage.setItem('logged',JSON.stringify(response.data))
        this.setState({ user: response.data })
        toastr.success('¡Genial! Bienvenid@. 🙂')
        //history.push('/profile')
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleLogout = e => {
    service
      .logout()
      .then(response => {
        //window.localStorage.clear()
        this.setState({ user: null })
        toastr.info('Regresa pronto. 🙂')
        history.push('/')
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  render() {
    return(
      <Mycontext.Provider value={{
        user: this.state.user,
        form: this.state.form,
        handleInput: this.handleInput,
        handleImage: this.handleImage,
        handleSignup: this.handleSignup,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout
      }}>
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}

export default MyProvider