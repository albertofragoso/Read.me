import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { Mycontext } from '../context'

const FormSignup = () => (
  <Mycontext.Consumer>
    {
      ({ handleInput, handleSignup, form }) => {
        return (
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form>
                  <p className="h4 text-center py-4 grey-text">Sign up</p>
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light"
                  >
                    Tu nombre aquí:
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleInput}
                  />
                  <br />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    Tu correo acá
                  </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleInput}
                  />
                  <br />
                  <label
                    htmlFor="defaultFormCardPasswordEx"
                    className="grey-text font-weight-light"
                  >
                    Y tu password aquí.
                  </label>
                  <input
                    type="password"
                    id="defaultFormCardPasswordEx"
                    className="form-control"
                    name="password"
                    value={form.password}
                    onChange={handleInput}
                  />
                  <div className="text-center py-4 mt-3">
                    <MDBBtn size="lg" style={{borderRadius: "30px"}} active gradient="purple" onClick={handleSignup}>
                      ¡Registrame!
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

export default FormSignup