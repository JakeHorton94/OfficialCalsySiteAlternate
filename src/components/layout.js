
import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import './layout.scss'

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
        <script src="https://kit.fontawesome.com/e4e9ebb23e.js" crossorigin="anonymous"></script>

              {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
           
          <Navbar pageInfo={pageInfo} />

                <main>{children}</main>
        </Container>
      
              <footer className="footer">
                <span>
                <img className="contactLogo" src="https://i.imgur.com/2FkAADf.png" /> 
                 01279 93 94 95
                </span>
                <span>
                <img className="contactLogo" src="https://i.imgur.com/RYKK6Q3.png" /> 
                 info@calsy-ssd.co.uk
                </span>
                <span>
                
                <img className="contactLogo" src="https://i.imgur.com/YMS7Z4n.png" /> 
                <img className="contactLogo" src="https://i.imgur.com/Dua7uuq.png" /> 

                 @calsy_ssd
                </span>
              </footer>
           
      </>
    )}
  />
)

export default Layout
