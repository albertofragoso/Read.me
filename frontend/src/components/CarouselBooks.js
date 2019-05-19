import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BooksService from '../services/Books'
import { MDBContainer, MDBCarousel, MDBCarouselInner, MDBRow } from "mdbreact";
import toastr from 'toastr'
import CardCarouselBook from './CardCarouselBook';

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
      }) 
      .catch(err => toastr.error('Bu. Algo salió mal. 😣'))
  }

  render(){
    const { booksSearch } = this.state
    return(
      <MDBContainer>
        <MDBCarousel activeItem={1} length={9} slide={true} showControls={true} showIndicators={true} multiItem>
            <MDBCarouselInner>
              <MDBRow>
                {
                  booksSearch.map((book, i) => (
                    <CardCarouselBook key={i} book={book} i={i} booksSearch={this.state.booksSearch} />
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