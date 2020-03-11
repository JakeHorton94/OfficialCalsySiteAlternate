import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import './home.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <div className="slideBackground"> hi</div>
    <div id="landing-header">
    <img className="bannerCalsy" src="https://i.imgur.com/dlMh926.png" /> 
    {/* <img className="bannerCalsy2" src="https://i.imgur.com/3xylq8A.png" />  */}

    <span>
      <h2 className="latestWork">STICKERS. SIGNS. DESIGNS.</h2>
      {/* <h2 className="latestWork2">STICKERS. SIGNS. DESIGNS.</h2> */}

    </span>
    </div>
    
    <ul class="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
   
        <h1 className="secondaryHeading recentWork">Recent Work</h1>
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe className="instagramFeed" src="https://cdn.lightwidget.com/widgets/c18be15c3766520691d5f90aabc18e2a.html" scrolling="no" allowtransparency="true" ></iframe>
          
     
  </Layout>
)

export default IndexPage
