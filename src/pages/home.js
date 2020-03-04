import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import './index.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
   
        <h1 className="secondaryHeading">RECENT WORK</h1>
          {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe className="instagramFeed instaFeedSmall" src="//lightwidget.com/widgets/1d7d589b73cc5f20aa46fd8a695aba39.html" scrolling="no" allowtransparency="true"  ></iframe> */}
          {/* <iframe className="instagramFeed instaFeedLarge" src="//lightwidget.com/widgets/eadb622f90655f7d9483180b4d26c07d.html" scrolling="no" allowtransparency="true"></iframe> */}
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe className="instagramFeed" src="//lightwidget.com/widgets/c18be15c3766520691d5f90aabc18e2a.html" scrolling="no" allowtransparency="true"></iframe>

          
     
  </Layout>
)

export default IndexPage
