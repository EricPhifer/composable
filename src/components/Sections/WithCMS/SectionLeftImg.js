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

const Paragraph = styled.p`
  padding: 0.5rem 0;
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
                <Paragraph>
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science, music, sport, etc,
                  Europe uses the same vocabulary. The languages only differ in
                  their grammar, their pronunciation and their most common
                  words.
                </Paragraph>
                <Paragraph>
                  Everyone realizes why a new common language would be
                  desirable: one could refuse to pay expensive translators. To
                  achieve this, it would be necessary to have uniform grammar,
                  pronunciation and more common words.
                </Paragraph>
                <Paragraph>
                  If several languages coalesce, the grammar of the resulting
                  language is more simple and regular than that of the
                  individual languages. The new common language will be more
                  simple and regular than the existing European languages. It
                  will be as simple as Occidental; in fact, it will be
                  Occidental.
                </Paragraph>
                <Paragraph>
                  To an English person, it will seem like simplified English, as
                  a skeptical Cambridge friend of mine told me what Occidental
                  is. The European languages are members of the same family.
                  Their separate existence is a myth. For science, music, sport,
                  etc, Europe uses the same vocabulary. The languages only
                  differ in their grammar, their pronunciation and their most
                  common words. Everyone realizes why a new common language
                  would be desirable: one could refuse to pay expensive
                  translators.
                </Paragraph>
              </Right>
            </Grid>
          </ShadowCard>
        </Section>
      ))}
    </>
  )
}
