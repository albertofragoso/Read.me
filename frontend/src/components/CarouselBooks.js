import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BooksService from '../services/Books'
import { MDBContainer, MDBCarousel, MDBCarouselInner, MDBRow, MDBCarouselItem, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon } from "mdbreact";
import toastr from 'toastr'

const bookService = new BooksService()

class CarouselBooks extends Component{

  state = {
    book: '',
    booksSearch: []
  }

  componentWillMount() {
    const { steps } = this.props;
    const { book } = steps;

    this.setState({ book });
  }

  componentDidMount() {
    const { steps } = this.props;
    const { book } = steps;

    bookService
      .booksSearch(book.value)
      .then(response => {
        this.setState({ booksSearch: response.items })
        //console.log(response)
      }) 
      .catch(err => toastr.error('Bu, Algo salió mal. 😣'))
  }

  render(){
    const { booksSearch } = this.state
    //console.log(`Length: ${booksSearch.length}`)
    return(
      <MDBContainer>
        <MDBCarousel activeItem={1} length={9} slide={true} showControls={true} showIndicators={true} multiItem>
            <MDBCarouselInner>
              <MDBRow>
                {
                  booksSearch.map((book, i) => (
                    <MDBCarouselItem itemId={i} key={i}>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                      <MDBCardImage className="z-depth-1 mx-auto" src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : 'https://loremflickr.com/320/240/book'
                      } width="128" height="192" />
                        <MDBCardBody>
                          <MDBCardTitle>{book.volumeInfo.title}</MDBCardTitle>
                          <MDBCardText>
                            {book.volumeInfo.subtitle}
                          </MDBCardText>
                          <MDBBtn style={{borderRadius: "30px"}} active gradient="purple" size="sm" className="white-text">      <MDBIcon icon="plus" /> </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                  ))
                }
              </MDBRow>
            </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    )
  }
}

CarouselBooks.propTypes = {
  steps: PropTypes.object,
};

CarouselBooks.defaultProps = {
  steps: undefined,
};

export default CarouselBooks