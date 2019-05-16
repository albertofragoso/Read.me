import React, { Component } from 'react'
import history from './history'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardText, MDBCardImage, MDBCardBody, MDBCardTitle, MDBBtn, MDBView, MDBMask, MDBCardFooter, MDBIcon, MDBFileInput } from 'mdbreact'

class Profile extends Component {

  componentWillMount() {
    // const user = localStorage.getItem('logged')
    // if(!user) return history('/')
  }

  render() {
    return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="2" sm="12" className="mb-5">
          <MDBCard>
            <MDBCardImage className="img-fluid" src="https://avatars0.githubusercontent.com/u/24305046?s=460&v=4" />
            <MDBCardBody>
                <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">Alberto Fragoso</MDBCardTitle>
                <MDBCardText>
                    <strong className="mb-2">About:</strong>
                    Lorem ipsum dolor sit amet consectetur...
                </MDBCardText>
                <div className="row justify-content-end pr-1">
                    <MDBBtn size="sm" outline color="primary">More...</MDBBtn>
                </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="5" sm="12" className="mb-3">
          <MDBCard className="d-flex mb-5">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
              <MDBMask overlay="white-slight"/>
            </MDBView>
            <MDBCardBody>
              <MDBCardTitle className="font-bold mb-3">
                <strong>Project name</strong>
              </MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="links-light profile-card-footer">
              <span className="right">
                <a className="p-2" href="#profile">
                  Live Preview
                  <MDBIcon icon="image" className="ml-1"/>
                </a>
              </span>
            </MDBCardFooter>
          </MDBCard>
          <MDBCard className="d-flex mb-5">
            <view-wrapper>
              <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
              <MDBMask overlay="white-slight"/>
            </view-wrapper>
            <MDBCardBody>
              <MDBCardTitle className="font-bold mb-3">
                <strong>Project name</strong>
              </MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="links-light profile-card-footer">
              <span className="right">
                <a className="p-2" href="#profile">
                  Live Preview
                  <MDBIcon icon="image" className="ml-1"/>
                </a>
              </span>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol md="5" sm="12" className="mb-3">
          <MDBCard className="d-flex mb-5">
            <view-wrapper>
              <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
              <MDBMask overlay="white-slight"/>
            </view-wrapper>
            <MDBCardBody>
              <MDBCardTitle className="font-bold mb-3">
                <strong>Project name</strong>
              </MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="links-light profile-card-footer">
              <span className="right">
                <a className="p-2" href="#profile">
                  Live Preview
                  <MDBIcon icon="image" className="ml-1"/>
                </a>
              </span>
            </MDBCardFooter>
          </MDBCard>
          <MDBCard className="d-flex mb-5">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
              <MDBMask overlay="white-slight"/>
            </MDBView>
            <MDBCardBody>
              <MDBCardTitle className="font-bold mb-3">
                <strong>Project name</strong>
              </MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="links-light profile-card-footer">
              <span className="right">
                <a className="p-2" href="#profile">
                  Live Preview
                  <MDBIcon icon="image" className="ml-1"/>
                </a>
              </span>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}

export default Profile
