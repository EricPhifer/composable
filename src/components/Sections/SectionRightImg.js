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

const Right = styled.div`
  margin: 0;
`

const Left = styled.div`
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

const SectionRightImg = () => (
  <Section id="sections-right-img">
    <ShadowCard>
      <Grid>
        <Left>
          <H2>Right Image Section</H2>
          <Paragraph>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </Paragraph>
          <Paragraph>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </Paragraph>
          <Paragraph>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </Paragraph>
          <Paragraph>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way. When she
            reached the first hills of the Italic Mountains, she had a last view
            back on the skyline of her hometown Bookmarksgrove, the headline of
            Alphabet Village and the subline of her own road, the Line Lane.
          </Paragraph>
        </Left>
        <Right>
          <Image>
            <figcaption>Source: Unsplash.com | Erik Mclean</figcaption>
          </Image>
        </Right>
      </Grid>
    </ShadowCard>
  </Section>
)

export default SectionRightImg
