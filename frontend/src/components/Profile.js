import React, { Component } from 'react'
import history from './history'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdbreact'
import CardBook from './CardBook'
import { Mycontext } from '../context'
import BookshelfService from '../services/Bookshelf'
import toastr from 'toastr'

const bookshelfService = new BookshelfService()

class Profile extends Component {

  state = {
    books: []
  }

  componentWillMount() {
    const user = localStorage.getItem('logged')
    if(!user) return history.push('/')
  }
  
  componentDidMount() {
    bookshelfService
      .shelf()
      .then(response => this.setState({ books: response.books }))
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleRemove = e => {
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
    const user = localStorage.getItem('logged')
    if(!user) return(<></>)

    const { books } = this.state

    return (
    <Mycontext.Consumer>
      {
        ({ form }) => (
          <MDBContainer className="mt-5">
            <MDBRow>
              <MDBCol md="2" sm="12" className="mb-5">
                <MDBCard>
                  <img className="mt-5 img-thumbnail z-depth-1 rounded-circle mx-auto" src={JSON.parse(user).photo} alt={JSON.parse(user).name} width="100" />
                  <MDBCardBody>
                      <MDBCardTitle sub className="text-center deep-purple-text mb-2 font-bold">{JSON.parse(user).name}</MDBCardTitle>
                      <MDBCardText className="text-center">
                          {JSON.parse(user).email}
                      </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="10" sm="12" className="mb-3">
                <MDBRow>
                    {books.map((book, i) => <CardBook book={book} handleRemove={this.handleRemove} key={i} i={i} />)}
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )
      }  
    </Mycontext.Consumer>
    )
  }
}

export default Profile
