// import React from 'react'
// import Helmet from 'react-helmet'
// import styled from 'styled-components'
// import config from '../utils/siteConfig'
// import Container from '../components/Container'
// import PageTitle from '../components/PageTitle'
// import PageBody from '../components/PageBody'

// const PageTemplate = ({data}) => {

//   const {
//     title,
//     tagline,
//     url,
//   } = data.allContentfulSparkProject;

//   return(
//     <div>

//       <Helmet>
//         <title>{`${title} - ${config.siteTitle}`}</title>
//         <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
//         <meta property="og:url" content={`${config.siteUrl}/${slug}/`} />
//       </Helmet>

//       <Container>
//         <PageTitle>{title}</PageTitle>
//         <PageBody body={body} />
//       </Container>

//     </div>
//   )
// }

// export const query = graphql`
//   query indexQuery {
//     allContentfulSparkProject(limit: 1000) {
//       edges {
//         node {
//           title
//           tagline
//         }
//       }
//     }
//   }
// `

// export default PageTemplate
