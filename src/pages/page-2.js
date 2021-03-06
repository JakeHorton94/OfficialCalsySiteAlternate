import React from "react"
import './bespokeStickers.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import blogStyles from './blog.module.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'


const ExternalSignagePage = () => {
  const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {externalSignage: {eq: true}}, fields: {slug: {}}}) {
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
                <h1> External Signage </h1>
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
            </Layout>
        )
  }


export default ExternalSignagePage




