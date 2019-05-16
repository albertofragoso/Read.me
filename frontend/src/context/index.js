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
      name: '',
      password: '',
      photo: ''
    }
  }

  handleInput = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
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
        history.push('/profile')
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
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
        handleInput: this.handleInput,
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