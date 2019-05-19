import React, { Component } from 'react'
import { MDBCarouselItem, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon, toast } from "mdbreact";
import BookshelfService from '../services/Bookshelf'
import toastr from 'toastr'

const bookshelfService = new BookshelfService()

class CardBook extends Component {

  state = {
    bookChoosen: false

  }

  handleAdd = e => {
    const { bookChoosen } = this.state
    bookshelfService
      .add(this.props.booksSearch[e.target.value])
      .then(response => {
        toastr.success('Nice! Agregaste un nuevo libro a tu biblioteca. 📕')
        this.setState({ bookChoosen: !bookChoosen })
      })
      .catch(err => toast.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleRemove = e => {
    const { bookChoosen } = this.state
    bookshelfService
      .remove(this.props.booksSearch[e.target.value])
      .then(response => {
        toastr.warning('¡Listo! Quitaste un libro de tu biblioteca. 📕')
        this.setState({ bookChoosen: !bookChoosen })
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  render() {
    const { book, i } = this.props
    return (
      <MDBCarouselItem itemId={i}>
        <MDBCol md="12">
          <MDBCard className="mb-2">
          <MDBCardImage className="z-depth-1 mx-auto" src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : 'https://loremflickr.com/320/240/book'
          } width="128" height="192" />
            <MDBCardBody>
              <MDBCardTitle>{book.volumeInfo.title}</MDBCardTitle>
              <MDBCardText>
                {book.volumeInfo.subtitle}
              </MDBCardText>
              {(!this.state.bookChoosen) ?
                <MDBBtn style={{borderRadius: "30px"}} active gradient="purple" size="sm" className="white-text" onClick={this.handleAdd} value={i}><MDBIcon icon="plus" /> </MDBBtn> :
                <MDBBtn style={{borderRadius: "30px"}} active gradient="purple" size="sm" className="white-text" onClick={this.handleRemove} value={i}><MDBIcon icon="minus" /></MDBBtn>
              }
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBCarouselItem>
    )
  }
}

export default CardBook
