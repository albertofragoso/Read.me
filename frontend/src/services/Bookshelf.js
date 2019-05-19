import axios from 'axios'

const baseURL = 'http://localhost:3000/'

class BookshelfService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  show = user => {
    return this.service
      .get(`/api/bookshelf/${user}`)
      .then(({ data}) => data)
      .catch(err => err)
  }

  add = book => {
    return this.service
      .post('/api/book/add', book)
      .then(({ data }) => data)
      .catch(err => alert(err))
  }

  remove = book => {
    return this.service
      .post('/api/book/remove', book)
      .then(({ data }) => data)
      .catch(err => err)
    
  }
}

export default BookshelfService