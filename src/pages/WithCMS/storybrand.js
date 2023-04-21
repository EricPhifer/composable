import * as React from 'react'
import styled from 'styled-components'
// About Components
import StandardAbout from '../../components/About/WithCMS/StandardAbout'
// Accordion Components
import StandardAccordion from '../../components/Accordions/WithCMS/StandardAccordion'
// Carousel Components
import CardCarousel from '../../components/Carousels/WithCMS/CardCarousel'
import ImgCarouselWithWords from '../../components/Carousels/WithCMS/ImgCarouselWithWords'
import LogoCarousel from '../../components/Carousels/WithCMS/LogoCarousel'
import ReviewCarousel from '../../components/Carousels/WithCMS/ReviewCarousel'
// Form Components
import StandardContact from '../../components/Forms/WithCMS/StandardContact'
// Section Components
import SectionBottomImg from '../../components/Sections/WithCMS/SectionBottomImg'
import SectionLeftImg from '../../components/Sections/WithCMS/SectionLeftImg'
import SectionRightImg from '../../components/Sections/WithCMS/SectionRightImg'
import SectionTopImg from '../../components/Sections/WithCMS/SectionTopImg'
// Story Components
import HerosFoot from '../../components/StoryDesign/WithCMS/HeroesFoot'
import StoryHero from '../../components/StoryDesign/WithCMS/StoryHero'
import StoryNav from '../../components/StoryDesign/WithCMS/StoryNav'
// SEO
import Seo from '../../components/seo'

const Hero = styled.div`
  display: block;
  padding-top: 10rem;
  margin-top: -10rem;
  height: calc(100vh - 7rem);
  position: relative;
  top: 7rem;
  z-index: 10;
`
const Main = styled.main`
  width: 80vw;
  margin: 0 auto;
  position: relative;
  top: 7rem;
  bottom: 3rem;
  @media only screen and (max-width: 500px) {
    width: 98vw;
  }
  @media only screen and (max-height: 600px) {
    width: 96vw;
  }
`

const H2 = styled.h2`
  display: block;
  padding-top: 10rem;
  margin-top: -10rem;
  margin: 5rem 0 1rem;
  font-size: 5rem;
  font-variant: small-caps;
  @media only screen and (max-width: 330px) {
    font-size: 4rem;
  }
`
const HR = styled.hr`
  border: 0.5rem solid var(--orange);
`

const StoryBrand = () => (
  <>
    <StoryNav />
    <Hero id="top">
      <StoryHero />
      <HerosFoot />
    </Hero>
    <Main>
      <H2 id="sections">Sections</H2>
      <HR />
      <SectionBottomImg />
      <SectionLeftImg />
      <SectionRightImg />
      <SectionTopImg />
      <H2 id="accordions">Accordions</H2>
      <HR />
      <StandardAccordion />
      <H2 id="carousels">Carousels</H2>
      <HR />
      <ImgCarouselWithWords />
      <ReviewCarousel />
      <LogoCarousel />
      <CardCarousel />
      <H2 id="about">About</H2>
      <HR />
      <StandardAbout />
      <H2 id="contact">Forms</H2>
      <HR />
      <StandardContact />
    </Main>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Composable Architecture, StoryBrand Design" />
)

export default StoryBrand
