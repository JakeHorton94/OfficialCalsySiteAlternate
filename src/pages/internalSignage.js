import React from "react"
import './vehicleGraphics.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'


const InternalSignagePage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {internalSignage: {eq: true}}, fields: {slug: {}}}) {
          edges {
            node {
              fields {
                slug 
              }
              frontmatter {
                title
                date
                thumbnail
              }
            }
          }
        }
      }`)

        return (
            <Layout>
                <img className="serviceLogo" src="https://i.imgur.com/yhfdnjl.png"></img>
              <div className="section1">
                <p className="serviceIntro">Interior signs have a wealth of different uses, created in many forms to suit a diverse blend of environments, budgets and purposes. Internal signage is key in showing people who you are, where to go, what you do and more...</p>
                <p><span className="blueDot">•</span><span className="redDot">•</span><span className="yellowDot">•</span></p>
                <h2 className="threeSteps"> INTERIOR SIGNAGE TYPES</h2>
                <div className="point">
                  <p>GLOWING</p>
                </div>
                <div className="point">
                  <p>NEON</p>
                </div>
                <div className="point">
                  <p>TRAY</p>
                </div>
                <div className="point">
                  <p>SIMPLE BOARD</p>
                </div>
                <div className="point">
                  <p>CUT OUT LETTERS</p>
                </div>
                </div>
                
                <div className="section1">
                <h2> Take a look at some of our work </h2>
                <ol className={blogStyles.posts}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                            <Link to= {"blog/" + edge.node.fields.slug}>
                                <h2 className="postHeading">{edge.node.frontmatter.title}</h2>
                                <p className="postDate">{edge.node.frontmatter.date}</p>
                                <img src={edge.node.frontmatter.thumbnail}/>
                            </Link>
                            </li>
                        )
                    })}
                </ol>
                </div>
            </Layout>
        )
  }


export default InternalSignagePage




