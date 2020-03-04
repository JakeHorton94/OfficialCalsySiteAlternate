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
            
                WHO WE ARE
            </Link>
            <div className="bullet">
            •
            </div>
            <Link class="services" to="/services">
              
               WHAT WE DO
                
            </Link>
            <div className="bullet">
            •
            </div>
            <Link class="contact" to="/contact">
               WHERE WE ARE
                
            </Link>
            
       
         
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
