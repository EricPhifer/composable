import * as React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  width: 100%;
  height: 100%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 1rem;
  justify-items: center;
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const GridItem = styled.div`
  width: 40rem;
  height: 40rem;
  background-image: url(https://source.unsplash.com/random/?board+games);
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
  @media only screen and (max-width: 500px) {
    width: 27rem;
    height: 27rem;
  }
`

const TwoColumnGallery = () => (
  <Grid id="fourColumnGallery">
    <GridItem>
      <figcaption>Source: Unsplash.com</figcaption>
    </GridItem>
    <GridItem>
      <figcaption>Source: Unsplash.com</figcaption>
    </GridItem>
    <GridItem>
      <figcaption>Source: Unsplash.com</figcaption>
    </GridItem>
    <GridItem>
      <figcaption>Source: Unsplash.com</figcaption>
    </GridItem>
    <GridItem>
      <figcaption>Source: Unsplash.com</figcaption>
    </GridItem>
    <GridItem>
      <figcaption>Source: Unsplash.com</figcaption>
    </GridItem>
    <GridItem>
      <figcaption>Source: Unsplash.com</figcaption>
    </GridItem>
    <GridItem>
      <figcaption>Source: Unsplash.com</figcaption>
    </GridItem>
    <GridItem>
      <figcaption>Source: Unsplash.com</figcaption>
    </GridItem>
  </Grid>
)

export default TwoColumnGallery
