import React, { Component } from 'react'
import { MDBCard, MDBCol, MDBView, MDBMask, MDBCardFooter,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from "mdbreact";
import ModalBook from './ModalBook'
import { Mycontext } from '../context'

class CardBook extends Component {

  render() {
    const { book, i } = this.props
    return (
      <Mycontext.Consumer>
        {({ handleRemoveProfile }) => (
          <MDBCol md="4" sm="6" className="mb-3">
            <MDBCard className="d-flex mb-5">
              <MDBView>
                <img src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : 'https://books.google.com.mx/googlebooks/images/no_cover_thumb.gif'
                } width="128" height="192" alt="Project" className="img-fluid mx-auto"/>
                <MDBMask overlay="white-slight"/>
              </MDBView>
              <MDBCardBody>
                <MDBCardTitle className="font-bold mb-3">
                  <strong>{book.volumeInfo.title}</strong>
                  <p>{book.volumeInfo.authors[0]}</p>
                </MDBCardTitle>
                <MDBCardText>{
                  (book.volumeInfo.description) ?
                  `${book.volumeInfo.description.split(" ").splice(0,20).join(" ")} ...` : '...'}</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter className="links-light profile-card-footer">
                <span className="right">
                  <ModalBook title={book.volumeInfo.title} id={book.id} />
                  <MDBBtn style={{borderRadius: "30px"}} outline color="secondary" size="sm" className="white-text" onClick={handleRemoveProfile} value={i}><MDBIcon icon="minus" /></MDBBtn>
                </span>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        )}
      </Mycontext.Consumer>
    )
  }
}

export default CardBook
