import * as React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: calc(100% - 10rem);
  background-image: url(https://source.unsplash.com/random/?success);
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  // Landscape view
  @media only screen and (max-height: 600px) {
    height: calc(100% - 6rem);
  }
`
const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  color: var(--white);
  text-align: center;
  h1,
  h2 {
    padding: 0 2rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    flex-flow: row wrap;
    height: auto;
    position: relative;
    top: 5rem;
  }
  @media only screen and (max-height: 600px) and (min-width: 884px) {
    flex-flow: column wrap;
  }
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 8rem;
  text-shadow: 0.1rem 0 0 var(--black), 0 0.1rem 0 var(--black),
    -0.1rem 0 0 var(--black), 0 -0.1rem 0 var(--black);
  // Mobile view
  @media only screen and (max-width: 615px) {
    font-size: 3.75rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    font-size: 3.75rem;
    margin: 0;
  }
`
const Motto = styled.h2`
  margin: 0;
  font-size: 3rem;
  text-shadow: 0.1rem 0 0 var(--black), 0 0.1rem 0 var(--black),
    -0.1rem 0 0 var(--black), 0 -0.1rem 0 var(--black);
  // Mobile view
  @media only screen and (max-width: 615px) {
    font-size: 2rem;
  }
  // Landscape view
  @media only screen and (max-height: 600px) {
    font-size: 2rem;
  }
`

const StoryHero = () => (
  <Header>
    <Container>
      <Title>Amazing Business Inc.</Title>
      <Motto>Stunning motto that encompasses us.</Motto>
    </Container>
  </Header>
)

export default StoryHero
