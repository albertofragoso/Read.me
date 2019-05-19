import React, { Component } from 'react'
import { MDBCarouselItem, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon, toast } from "mdbreact";
import BookshelfService from '../services/Bookshelf'
import toastr from 'toastr'

const bookshelfService = new BookshelfService()

class CardCarouselBook extends Component {

  state = {
    isChoosen: false
  }

  handleAdd = e => {
    const { isChoosen } = this.state
    bookshelfService
      .add(this.props.booksSearch[e.target.value])
      .then(response => {
        toastr.success('Nice! Agregaste un nuevo libro a tu biblioteca. 📕')
        this.setState({ isChoosen: !isChoosen })
      })
      .catch(err => toast.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  handleRemove = e => {
    const { isChoosen } = this.state
    bookshelfService
      .remove(this.props.booksSearch[e.target.value])
      .then(response => {
        toastr.warning('¡Listo! Quitaste un libro de tu biblioteca. 📕')
        this.setState({ isChoosen: !isChoosen })
      })
      .catch(err => toastr.error('Bu. Algo salió mal. Intentalo de nuevo. 😣'))
  }

  render() {
    const { book, i } = this.props
    return (
      <MDBCarouselItem itemId={i}>
        <MDBCol md="12">
          <MDBCard className="mb-2">
          <MDBCardImage className="z-depth-1 mx-auto" src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : 'https://books.google.com.mx/googlebooks/images/no_cover_thumb.gif'
          } width="128" height="192" />
            <MDBCardBody>
              <MDBCardTitle>{book.volumeInfo.title}</MDBCardTitle>
              <MDBCardText>
                {book.volumeInfo.subtitle}
              </MDBCardText>
              {(!this.state.isChoosen) ?
                <MDBBtn style={{borderRadius: "30px"}} active gradient="purple" size="sm" className="white-text" onClick={this.handleAdd} value={i}><MDBIcon icon="plus" /> </MDBBtn> :
                <MDBBtn style={{borderRadius: "30px"}} outline color="secondary" size="sm" className="white-text" onClick={this.handleRemove} value={i}><MDBIcon icon="minus" /></MDBBtn>
              }
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBCarouselItem>
    )
  }
}

export default CardCarouselBook
