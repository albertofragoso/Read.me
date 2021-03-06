import React from "react";
import {  MDBMask, MDBRow, MDBCol,  MDBView, MDBContainer } from "mdbreact";
import ModalSignup from "./ModalSignup";
import ModalLogin from "./ModalLogin";
import { Mycontext } from '../context'

const Home = () => {

  return (
  <div id="videobackground">
    <Mycontext.Consumer>
    {({ user }) => (
      <>
        <MDBView>
          <video
            className="video-intro"
            playsInline
            autoPlay
            muted=""
            loop
          >
            <source
              src="https://res.cloudinary.com/dqqtlpdt0/video/upload/v1558381831/ironprofile/readme_nfjx0w.mp4"
              type="video/mp4"
            />
          </video>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer className="px-md-3 px-sm-3">

              <MDBRow className="mb-5">
                <MDBCol md="12" className="white-text text-center mb-5">
                  <div className="d-flex justify-content-center align-items-center">
                    <h1 className="display-3 mb-0 mr-3 pt-md-5 pt-5 white-text font-weight-bold" >READ.<span className="secondary-color-dark-text font-weight-bold">ME </span> </h1>
                    <img className="img-fluid img-movile" style={{paddingTop: '20px'}} src="rocket.png" alt="readme" width="90"/> 
                  </div>
                  {!user && <><ModalSignup /> <ModalLogin /></> }
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <main>
          <MDBContainer>
            <MDBRow className="py-5">
              <MDBCol md="12" className="text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                  quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                  quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </>
    )}
    </Mycontext.Consumer>
  </div>
  )
} 


export default Home;
