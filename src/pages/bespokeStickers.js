import React from "react"
import './bespokeStickers.scss'
import './vehicleGraphics.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'


const BespokeStickersPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {bespokeStickers: {eq: true}}, fields: {slug: {}}}) {
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
               <img className="serviceLogo" src="https://i.imgur.com/fT3Izbq.png"></img>
              <div className="section1">
                <p className="serviceIntro">Custom stickers are a great way of advertising when and where you want to.</p>
                <p><span className="blueDot">•</span><span className="redDot">•</span><span className="yellowDot">•</span></p>
                </div>

              <div className="section1">
                <h2> Take a look at some of our work </h2>
                </div>
                <div className="galleryContainer">
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


export default BespokeStickersPage
