import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'

const Index = ({data}) =>  {

  const projects = data.allContentfulSparkProject.edges;

  console.log(projects);

  return (
    <Container>
      <PageTitle small>
        Made With Spark
      </PageTitle>
      <CardList>
        {projects.map(({ node: sparkProject })=> (
          <Card
           key={sparkProject.title}
           slug={sparkProject.tags}
           image={sparkProject.screenshot}
           title={sparkProject.title}
           date={sparkProject.website}
           excerpt={sparkProject.tagline}
          />
        ))}
      </CardList>
    </Container>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulSparkProject(limit: 1000) {
      edges {
        node {
          title
          tagline 
        }
      }
    }
  }
`

export default Index


// query indexQuery {
//   allContentfulSparkProject(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
//     edges {
//       node {
//         title
//         id
//         slug
//         website       
//         heroImage {
//           screenshot
//           sizes(maxWidth: 800) {
//             ...GatsbyContentfulSizes_withWebp_noBase64
//           }
//         }
//         body {
//           tagline
//           }
//         }
//       }
//     }
//   }
// }
// `