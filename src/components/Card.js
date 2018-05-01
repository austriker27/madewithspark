import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Post = styled.li`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background .2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem .5rem 1rem;
`;

const Tagline = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`;

// const Tags = styled.h3`
//   margin: 0 1rem 1.5rem 1rem;
//   color: gray;
// `;
// <Tags>{props.tags}</Tags>

const url = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`;

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`;

const Card = (props) => {
  return (
    <Post>
      <Link to={`/${props.url}/`}>
        <Image 
          title={props.title}
          sizes={props.screenshot.sizes}
        />
        
        <Title>{props.title}</Title>
        <Tagline>{props.url}</Tagline>
  
        
      </Link>
    </Post>
  )
}

export default Card
