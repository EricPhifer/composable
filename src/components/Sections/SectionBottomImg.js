import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 80vw;
  height: 50rem;
  margin: 0 auto;
`

const H2 = styled.h2`
  margin: 1rem 2rem;
`

const SectionBottomImg = () => (
  <Section id="sections-bottom-img">
    <H2>Bottom Image Section</H2>
    <img
      src="https://source.unsplash/random/?service"
      alt="A randomly generated service depiction"
      width="30rem"
      height="30rem"
    />
  </Section>
)

export default SectionBottomImg
