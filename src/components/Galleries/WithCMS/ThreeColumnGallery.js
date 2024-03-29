import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  width: 100%;
  height: 100%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  gap: 1rem;
  justify-items: center;
  @media only screen and (max-width: 1040px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
  @media only screen and (max-width: 688px) {
    grid-template-columns: 1fr;
  }
`

const GridItem = styled.div`
  width: 27rem;
  height: 27rem;
  background-image: url(https://source.unsplash.com/random/?eagle);
  background-size: cover;
  background-position: center center;
  position: relative;
  border-radius: 0.5rem;
  figcaption {
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--white);
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.1rem 0.5rem;
    border-radius: 0.5rem;
  }
`

// TODO: change allSanity to Gallery
export default function ThreeColumnGallery() {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allSanityFaqaccordion {
        nodes {
          id
        }
      }
    }
  `)
  const { nodes } = gallery
  return (
    <Grid id="threeColumnGallery">
      {nodes.map(node => (
        <GridItem key={node.id}>
          <figcaption>Source: Unsplash.com</figcaption>
        </GridItem>
      ))}
    </Grid>
  )
}
