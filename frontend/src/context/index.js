import React, { createContext, Component} from 'react'
import AuthService from '../services/Auth'
import toastr from 'toastr'
import history from '../components/history'

export const Mycontext = createContext()

const service = new AuthService()

class MyProvider extends Component{
  state = {
    form: {
      email: '',
      password: '',
      photo: ''
    }
  }

  handelInput = e => {
    const { form } = this.state
    form[e.target.name] = e.taget.value
    this.setState(form)
  }

  handleSignup = e => {
    service
      .signup(this.state.form)
      .then(response => {
        toastr.success('¡Super! te has registrado con éxito. 👍🏻')
        window.localStorage.setItem('loggedUser', JSON.stringify(response.data))
      })
      .catch(err => toastr.error('Bu. Algo salió mal. 😣'))
  }

  handleLogin = e => {
    service
      .login(this.state.form)
      .then(response => {
        if(response.err) return toastr.error(`${response.err}. 😣`)
        window.localStorage.setItem('loggeduser', JSON.stringify(response.data))
        toastr.success('¡Nice! te has logeado con éxito. 👍🏻')
        //history.push('/')
      })
      .catch(err => toastr.error('Bu. Algo salió mal. 😣'))
  }

  handleLogout = e => {
    service
      .logout()
      .then(response => {
        window.localStorage.clear()
        toastr.success('Regresa pronto. 🙂')
        //history.push('/')
      })
      .catch(err => toastr.error(`${err}. 😣`))
  }

  // handleImageUpload = async e => {
  //   const uploadData = new FormData()
  //   uploadData.append('file', e.target.files[0])
  //   uploadData.append('upload_preset', 'readme')

  //   const response = await fetch(
  //     '',
  //     {
  //       method: 'POST',
  //       body: uploadData
  //     })

  //   const photo = await response.json()
  //   this.setState({ photo: photo.eager[0].url })
  // }

  render() {
    return(
      <Mycontext.Provider value={{
        form: this.state.form,
        handelInput: this.handelInput,
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