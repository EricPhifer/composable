import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 80vw;
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
`

const H2 = styled.h2`
  margin: 1rem 0;
`

const Paragraph = styled.p`
  padding: 0.5rem 0;
`

const Image = styled.div`
  width: 100%;
  height: 30rem;
  margin: 1.5rem 0;
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
`

const SectionBottomImg = () => (
  <Section id="sections-bottom-img">
    <ShadowCard>
      <H2>Bottom Image Section</H2>
      <Paragraph>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.
      </Paragraph>
      <Paragraph>
        No one rejects, dislikes, or avoids pleasure itself, because it is
        pleasure, but because those who do not know how to pursue pleasure
        rationally encounter consequences that are extremely painful.
      </Paragraph>
      <Paragraph>
        Nor again is there anyone who loves or pursues or desires to obtain pain
        of itself, because it is pain, but because occasionally circumstances
        occur in which toil and pain can procure him some great pleasure. To
        take a trivial example, which of us ever undertakes laborious physical
        exercise, except to obtain some advantage from it?
      </Paragraph>
      <Paragraph>
        But who has any right to find fault with a man who chooses to enjoy a
        pleasure that has no annoying consequences, or one who avoids a pain
        that produces no resultant pleasure? On the other hand, we denounce with
        righteous indignation and dislike men who are so beguiled and
        demoralized by the charms of pleasure of the moment, so blinded by
        desire, that they cannot foresee
      </Paragraph>
      <Image>
        <figcaption>Source: Unsplash.com | Erik Mclean</figcaption>
      </Image>
    </ShadowCard>
  </Section>
)

export default SectionBottomImg
