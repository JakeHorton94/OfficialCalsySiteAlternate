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
          <div className="secondaryHeading">
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            </div>
            
            <div className="grid" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog