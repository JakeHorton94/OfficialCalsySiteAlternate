import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import './services.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout pageInfo={{ pageName: "services" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <div className="servicesGrid">
        <div>
            <h2>
                Vehicle Graphics
            </h2>
        </div>
        <div>
            <h2>
                Vehicle Wraps
            </h2>
        </div>
        <div>
            <h2>
                Fleet work
            </h2>
        </div>
        <div>
            <h2>
                Internal Signage
            </h2>
        </div>
        <div>
            <h2>
                External Signage
            </h2>
        </div>
        <div>
            <h2>
                Advertising Banners
            </h2>
        </div>
        <div>
            <h2>
                Clothing Branding
            </h2>
        </div>
        <div>
            <h2>
                Bespoke Stickers
            </h2>
        </div>
        <div>
            <h2>
                Cards and Leaflets
            </h2>
        </div>
        <div>
            <h2>
                Site Safety
            </h2>
        </div>
        <div>
            <h2>
                Wayfinding
            </h2>
        </div>
        <div>
            <h2>
                Subcontractor
            </h2>
        </div>
    </div>
          
  </Layout>
)

export default ServicesPage
