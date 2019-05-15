import React, { Component } from 'react'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact'
import FormSignup from './FormSignup';

class ModalSignup extends Component{
  state = {
    modal14: false
  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return(
      <>
        <MDBBtn onClick={this.toggle(14)} style={{borderRadius: "30px"}} active gradient="purple" size="lg">Sign up</MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <FormSignup />
          </MDBModalBody>
        </MDBModal>
      </>
    )
  }
}

export default ModalSignup
