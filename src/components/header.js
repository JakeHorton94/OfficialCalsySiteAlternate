import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="logo"
  >
    
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src="https://i.imgur.com/at9psbb.png" /> 
        </Link>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header