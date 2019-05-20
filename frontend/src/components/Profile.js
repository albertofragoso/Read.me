import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle } from 'mdbreact'
import CardBook from './CardBook'
import { Mycontext } from '../context'

class Profile extends Component {

  render() {
    const user = localStorage.getItem('logged')
    if(!user) return(<></>)

    return (
    <Mycontext.Consumer>
      {
        ({ books }) => (
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
                    {books.map((book, i) => <CardBook book={book} key={i} i={i} />)}
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
