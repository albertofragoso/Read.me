import React, { Component } from 'react'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact'
import Formlogin from './FormLogin';

class ModalLogin extends Component{
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
        <MDBBtn style={{borderRadius: "30px"}} outline color="secondary" onClick={this.toggle(14)} size="lg">Log in</MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            <Formlogin />
          </MDBModalBody>
        </MDBModal>
      </>
    )
  }
}

export default ModalLogin
