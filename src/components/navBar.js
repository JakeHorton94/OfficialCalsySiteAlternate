import React from "react"
import { Link } from "gatsby"
import './navbar.scss'

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar expand="lg" className="Navbar sticky-top" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mainNav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mainNav">
          
            <Link class="about" to="/about">
            
                Who we are
            </Link>
            
            <Link class="services" to="/services">
              
                What we do
                
            </Link>
          
            <Link class="contact" to="/contact">
                Where we are
                
            </Link>
            
       
         
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
