import React, { Component } from 'react'
import { MDBCard, MDBView, MDBMask, MDBCardFooter,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from "mdbreact";
import BookshelfService from '../services/Bookshelf'

class CardBook extends Component {

  render() {
    const { book, i, handleRemove } = this.props
    return (
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
            <MDBBtn style={{borderRadius: "30px"}}gradient="purple" size="sm" className="white-text" onClick={this.props.handleRemove} value={i}>Readme</MDBBtn>
            <MDBBtn style={{borderRadius: "30px"}} outline color="secondary" size="sm" className="white-text" onClick={handleRemove} value={i}><MDBIcon icon="minus" /></MDBBtn>
          </span>
        </MDBCardFooter>
      </MDBCard>
    )
  }
}

export default CardBook
