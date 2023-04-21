import * as React from 'react'
import styled from 'styled-components'
import Seo from '../../components/seo'

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
  <>
    <HeroStyles />
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
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
