import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100vw;
  height: 5rem;
`
const H2 = styled.h2`
  margin: 1rem 2rem;
`

const SectionRightImg = () => (
  <Section id="sections-right-img">
    <H2>Right Image Section</H2>
    <img alt="example 1" />
  </Section>
)

export default SectionRightImg
