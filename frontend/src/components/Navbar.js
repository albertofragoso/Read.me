import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { Mycontext } from '../context'

class Navbar extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    //const user = localStorage.getItem('logged')

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    )
    
    return (
      <Mycontext.Consumer>
        {({ user, handleLogout })=>(
          <>
          <div>
            <MDBNavbar
              color=" purple darken-3"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <MDBNavLink to="/">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src="rocket.png" alt="readme" width="40"/> 
                      <h4 style={{paddingTop:'20px'}} className="ml-2 white-text font-weight-bold" > READ.ME </h4>
                    </div>
                  </MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                { user &&
                  <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav right>
                    <MDBNavItem active>
                      <MDBNavLink to="/profile">{JSON.parse(user).name}</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" onClick={handleLogout}>Logout</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  </MDBCollapse>
                } 
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </>
        )}
      </Mycontext.Consumer>
    );
  }
}

export default Navbar;