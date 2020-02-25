
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

          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
      
              <footer className="footer">
                <span>
                <i class="fas fa-phone-square"></i>
                 01279 93 94 95
                </span>
                <span>
                <i class="fas fa-envelope"></i>
                 info@calsy-ssd.co.uk
                </span>
                <span>
                
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                 @calsy_ssd
                </span>
              </footer>
           
      </>
    )}
  />
)

export default Layout
