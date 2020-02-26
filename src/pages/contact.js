import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import './contact.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"


console.log("@@@@@@@@@@@@@@@@@@@@@@@" + process.env.GATSBY_API_KEY)
const ContactPage = () => (
  <Layout pageInfo={{ pageName: "services" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

            
    <div className="background">
            <div className="section1">
        <h1>Contact Us</h1>
<p>Unit 3 Advance House, Central Road, Harlow, Essex, CM20 2ST</p>
<p>info@calsy-ssd.co.uk</p>
<p>01279 93 94 95</p>
</div>
<iframe src="https://www.google.com/maps/embed/v1/place?q=CM20%202ST&key=AIzaSyAdS8xLrNNxApCs4wziu_i_quFx1hHfu4g" allowfullscreen></iframe>
            
            <div className="section1">
                <h1> Opening Hours</h1>
                <p>Mon: 9:00am - 6:00pm</p>
                <p>Tue: 9:00am - 6:00pm</p>
                <p>Wed: 9:00am - 6:00pm</p>
                <p>Thu: 9:00am - 6:00pm</p>
                <p>Fri: 9:00am - 6:00pm</p>
                <p>Sat: 9:00am - 6:00pm</p>
                <p>Sun: 10:00am - 4:00pm</p>
            </div>
            </div>
  </Layout>
)

export default ContactPage
