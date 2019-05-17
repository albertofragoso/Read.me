import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { Mycontext } from '../context'

const Formlogin = () => (
  <Mycontext.Consumer>
  {
    ({ handleInput, handleLogin, form }) => {
      return (
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <form>
                <p className="h4 text-center py-4 grey-text">Log in</p>
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                  >
                  Tu email aquí
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  name="email"
                  onChange={handleInput}
                  />
                <br />
                <label
                  htmlFor="defaultFormCardPasswordEx"
                  className="grey-text font-weight-light"
                  >
                  Y tu password acá.
                </label>
                <input
                  type="password"
                  id="defaultFormCardPasswordEx"
                  className="form-control"
                  name="password"
                  onChange={handleInput}
                  />
                <div className="text-center py-4 mt-3">
                  <MDBBtn size="lg" style={{borderRadius: "30px"}} active gradient="purple" onClick={handleLogin}>
                    ¡Entrar!
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )
    }  
  }
  </Mycontext.Consumer>
)

export default Formlogin;