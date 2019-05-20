import React, { Component } from 'react'
import { MDBCarouselItem, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from "mdbreact";
import { Mycontext } from '../context'

class CardCarouselBook extends Component {
  
  render() {
    const { book, i, booksSearch } = this.props
    return (
      <Mycontext.Consumer>
      {({ isChoosen, handleAdd, handleRemoveCarousel }) => (
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
                {(!isChoosen) ?
                  <MDBBtn style={{borderRadius: "30px"}} active gradient="purple" size="sm" className="white-text" onClick={e => handleAdd(e, booksSearch)} value={i}><MDBIcon icon="plus" /> </MDBBtn> :
                  <MDBBtn style={{borderRadius: "30px"}} outline color="secondary" size="sm" className="white-text" onClick={e => handleRemoveCarousel(e, booksSearch)} value={i}><MDBIcon icon="minus" /></MDBBtn>
                }
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBCarouselItem>
      )}  
      </Mycontext.Consumer>
    )
  }
}

export default CardCarouselBook
