import axios from 'axios'

const baseURL = 'http://localhost:3000/'

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  signup = form => {
    return this.service
      .post('/auth/signup', form)
      .then(({ data }) => data)
      .catch(err => err)
  }

  login = form => {
    return this.service
      .post('/auth/login', form)
      .then(response => response)
      .catch(err => ({ err: 'Something went wrong.' }))
  }

  logout = form => {
    return this.service
      .get('/auth/logout')
      .then(response => response)
      .catch(err => ({ err: 'Something went wrong. '}))
  }

  loggedin = () => {
    return this.service
      .get('/auth/loggedin')
      .then(response => response)
      .catch(err => err)
  }
}

export default AuthService