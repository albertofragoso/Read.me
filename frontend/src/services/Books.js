import axios from 'axios'

const baseURL = 'https://www.googleapis.com/books/v1'

class BooksService {
  constructor(){
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  booksSearch = search => {
    return this.service
      .get(`/volumes?q=${search}`)
      .then(({ data }) => data)
      .catch(err => err)
  }

  booksId = id => {
    return this.service
      .get(`volumes/${id}`)
      .then(({ data }) => data)
      .catch(err => err)
  }
  
}

export default BooksService