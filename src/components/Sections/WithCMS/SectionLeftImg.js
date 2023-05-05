import { PortableText } from '@portabletext/react'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 108rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  p:last-child {
    padding-bottom: 1.5rem;
  }
`

const ShadowCard = styled.div`
  margin: 2rem 1rem;
  padding: 3rem;
  box-shadow: 0.2rem 0.2rem 1rem var(--gray);
  border-radius: 1rem;
  p {
    padding: 0.5rem 0;
    line-height: 1;
  }
  @media only screen and (max-width: 500px) {
    padding: 2rem;
  }
`

const H2 = styled.h2`
  margin: 1rem 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  @media only screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  margin: 0;
`

const Right = styled.div`
  margin: 0;
  padding: 0 2rem;
  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://source.unsplash.com/aielvGxZB0g);
  background-size: cover;
  background-position: center center;
  position: relative;
  figcaption {
    color: var(--white);
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media only screen and (max-width: 1080px) {
    height: 15rem;
  }
`

export default function SectionLeftImg() {
  const { section } = useStaticQuery(graphql`
    query {
      section: allSanitySection {
        nodes {
          id
        }
      }
    }
  `)
  const { nodes } = section
  return (
    <>
      {nodes.map(node => (
        <Section id="sections-left-img" key={node.id}>
          <ShadowCard>
            <Grid>
              <Left>
                <Image>
                  <figcaption>Source: Unsplash.com | Erik Mclean</figcaption>
                </Image>
              </Left>
              <Right>
                <H2>Left Image Section</H2>
                <PortableText />
              </Right>
            </Grid>
          </ShadowCard>
        </Section>
      ))}
    </>
  )
}
