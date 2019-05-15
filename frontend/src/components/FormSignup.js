import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormSignup = () => {
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
              Tu nombre aquí
            </label>
            <input
              type="text"
              id="defaultFormCardNameEx"
              className="form-control"
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
            />
            <br />
            <label
              htmlFor="defaultFormCardEmailEx"
              className="grey-text font-weight-light"
            >
              Y tu password aquí.
            </label>
            <input
              type="email"
              id="defaultFormCardEmailEx"
              className="form-control"
            />
            <div className="text-center py-4 mt-3">
              <MDBBtn size="lg" style={{borderRadius: "30px"}} active gradient="purple">
                ¡Registrame!
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormSignup;