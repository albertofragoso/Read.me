import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBFormInline } from "mdbreact";

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
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
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
                <div className="d-flex justify-content-center align-items-center">
                  <img src="rocket.png" alt="readme" width="40"/> 
                  <h4 style={{paddingTop:'20px'}} class="ml-2 white-text font-weight-bold" > READ.ME </h4>
                </div>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.handleTogglerClick} />
              <MDBCollapse isOpen={this.state.collapsed} navbar>
                {/* <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input
                          className="form-control mr-sm-2"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav> */}
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {this.state.collapsed && overlay}
        </div>
      </>
    );
  }
}

export default Navbar;