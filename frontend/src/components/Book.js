import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle, MDBBtn, MDBIcon } from 'mdbreact'
import CanvasBook from './CanvasBook'
import  BookshelfService  from '../services/Bookshelf'
import toastr from 'toastr'
import { Link } from 'react-router-dom'

const bookshelfService = new BookshelfService()

class Profile extends Component {

  state = {
    book: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    bookshelfService
      .byId(id)
      .then(response => this.setState({ book: response.volumeInfo }))
      .catch(err => toastr.error('Bu. Algo salió mal. 😣'))
  }

  componentWillMount() {
    const { id } = this.props.match.params
    window.google.books.load({"language": "es"})
    const initialize = () => {
      var viewer = new window.google.books.DefaultViewer(document.getElementById('canvas-book'))
      viewer.load(id)
    }
    window.google.books.setOnLoadCallback(initialize)
  }

  render() {
    const { book } = this.state
    const { id } = this.props.match.params
    const user = localStorage.getItem('logged')
    if(!user) return(<></>)

    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="3" sm="12" className="mb-5">
            <MDBCard>
              <img src={(book.imageLinks) ? book.imageLinks.thumbnail : 'https://books.google.com.mx/googlebooks/images/no_cover_thumb.gif'
              } width="128" height="192" alt={book.title} className="img-fluid mx-auto"/>
              <MDBCardBody>
                  <MDBCardTitle sub className="text-center deep-purple-text mb-2 font-bold">{book.title}</MDBCardTitle>
                  <MDBCardText className="text-center">
                      {book.description}
                      <br />
                      <Link to={`/profile`}>
                        <MDBBtn style={{borderRadius: "30px"}} outline color="secondary" size="sm" className="white-text" ><MDBIcon icon="arrow-left" /></MDBBtn>
                      </Link>
                      <MDBBtn style={{borderRadius: "30px"}}gradient="purple" size="sm" className="white-text" >Comprar</MDBBtn>
                  </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="9" sm="12" className="mb-3">
            <CanvasBook id={id} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default Profile
