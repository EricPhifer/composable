import * as React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'

const HeroStyles = styled.section`
  width: 100vw;
  height: calc(100vh - var(--nav-height));
  background: lightgray;
`

const SectionStyles = styled.section`
  width: 100vw;
  height: var(--section-height);
  background: lightgray;
  position: relative;
`

const AlternativeStyles = styled.section`
  width: 100vw;
  height: var(--section-height);
  background: gray;
  position: relative;
`

const IndexPage = () => (
  <Layout>
    <Carousel>
      <Carousel.Item>
        <HeroStyles>
          <h1>Hello, World</h1>
        </HeroStyles>
      </Carousel.Item>
      <Carousel.Item>
        <HeroStyles>
          <h1>Hello, Bolg</h1>
        </HeroStyles>
      </Carousel.Item>
      <Carousel.Item>
        <HeroStyles>
          <h1>Hello, Bilbo</h1>
        </HeroStyles>
      </Carousel.Item>
    </Carousel>
    <AlternativeStyles>
      <p>Howdy</p>
    </AlternativeStyles>
    <SectionStyles>
      <p>Hola</p>
    </SectionStyles>
    <AlternativeStyles>
      <p>Howdy</p>
    </AlternativeStyles>
    <SectionStyles>
      <p>Hola</p>
    </SectionStyles>
    <AlternativeStyles>
      <p>Howdy</p>
    </AlternativeStyles>
    <SectionStyles>
      <p>Hola</p>
    </SectionStyles>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
