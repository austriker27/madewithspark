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
           title={sparkProject.title}
           image={sparkProject.screenshot.file.url}
           url={sparkProject.url}
           tagline={sparkProject.tagline}
           tags={sparkProject.tags}
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
          screenshot {
            resolutions(width: 75) {
              ...GatsbyContentfulResolutions
            }
            file {
              url
            }
            id
          }
          id
          url
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