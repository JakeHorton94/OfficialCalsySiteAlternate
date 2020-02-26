import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import './services.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'


const ServicesPage = () => (
  <Layout pageInfo={{ pageName: "services" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <div className="servicesGrid">
        <div>
            <Link to="/vehicleGraphics">
                <h2>
                    Vehicle Graphics
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/vehicleWraps">
                <h2>
                    Vehicle Wraps
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/fleetWork">
                <h2>
                    Fleet work
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/internalSignage">
                <h2>
                    Internal Signage
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/externalSignage">
                <h2>
                    External Signage
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/advertisingBanners">
                <h2>
                    Advertising Banners
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/clothingBranding">
                <h2>
                    Clothing Branding
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/bespokeStickers">
                <h2>
                    Bespoke Stickers
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/cardsAndLeaflets">
                <h2>
                    Cards and Leaflets
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/siteSafety">
                <h2>
                    Site Safety
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/wayfinding">
                <h2>
                    Wayfinding
                </h2>
            </Link>
        </div>
        <div>
            <Link to="/subcontractor">
                <h2>
                    Subcontractor
                </h2>
            </Link>
        </div>
    </div>
          
  </Layout>
)

export default ServicesPage
