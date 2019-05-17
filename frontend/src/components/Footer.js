import React from 'react'
import { MDBContainer } from 'mdbreact'
import { Link } from 'react-router-dom'

const Footer = () => (
  <div className="footer-copyright text-center py-3 elegant-color white-text">
    <MDBContainer fluid>
      &copy; {new Date().getFullYear()} Made with 💜 at <b>Ironhack</b> by <Link className="white-text" to="http://albertofragoso.com"><b>Alberto Fragoso</b></Link>.
    </MDBContainer>
  </div>
)

export default Footer
