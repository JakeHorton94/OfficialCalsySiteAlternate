import React from 'react'
import Layout from '../components/layout'
import '../components/generalStyling.scss';


export const query = graphql`
query (
    $slug: String!
  ) {
      markdownRemark (
      fields: {
      slug: {
        eq: $slug
        
      }
    }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
          <div className="section1">
            <h1 className="heading">{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div className="grid" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
            </div>
        </Layout>
    )
}

export default Blog