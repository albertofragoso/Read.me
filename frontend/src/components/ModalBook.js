import React, { Component } from 'react'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact'
import CanvasBook from './CanvasBook'

class ModalLogin extends Component{
  state = {
    modal14: false
  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    })
    
  }

  /*componentDidMount = () => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/books/jsapi.js";
    script.async = true;
    script.onload = () => this.scriptLoaded()
    document.body.appendChild(script);
  }

  scriptLoaded = () => {
    window.google.books.load({"language": "es"})
    const initialize = () => {
      let viewer = new window.google.books.DefaultViewer(document.getElementById(this.props.id))
      viewer.load(this.props.id)
    }
    window.google.books.setOnLoadCallback(initialize)  
  }*/
  
  render() {
    const { title, id } = this.props
    return(
      <>
        <MDBBtn style={{borderRadius: "30px"}}gradient="purple" size="sm" className="white-text" onClick={this.toggle(14)} value={id}>ReadMe</MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>{title}</MDBModalHeader>
          <MDBModalBody style={{width: "100%", height: '140%'}}>
            <CanvasBook id={id} />
          </MDBModalBody> 
        </MDBModal>
        {/* <CanvasBook id={id} /> */}
      </>
    )
  }
}

export default ModalLogin
