import * as React from 'react'
// About Components
import StandardAbout from '../components/About/StandardAbout'
// Accordion Components
import StandardAccordion from '../components/Accordions/StandardAccordion'
// Carousel Components
import CardCarousel from '../components/Carousels/CardCarousel'
import ImgCarouselWithWords from '../components/Carousels/ImgCarouselWithWords'
import LogoCarousel from '../components/Carousels/LogoCarousel'
import ReviewCarousel from '../components/Carousels/ReviewCarousel'
// Form Components
import StandardContact from '../components/Forms/StandardContact'
import SectionBottomImg from '../components/Sections/SectionBottomImg'
import SectionLeftImg from '../components/Sections/SectionLeftImg'
import SectionRightImg from '../components/Sections/SectionRightImg'
// Section Components
import SectionTopImg from '../components/Sections/SectionTopImg'
import Seo from '../components/seo'
// Story Components
import HerosFoot from '../components/StoryDesign/HeroesFoot'
import StoryHero from '../components/StoryDesign/StoryHero'
import StoryNav from '../components/StoryDesign/StoryNav'

const StoryBrand = () => (
  <>
    <StoryNav />
    <StoryHero />
    <HerosFoot />
    <SectionTopImg />
    <SectionBottomImg />
    <SectionLeftImg />
    <SectionRightImg />
    <StandardAccordion />
    <ImgCarouselWithWords />
    <ReviewCarousel />
    <LogoCarousel />
    <CardCarousel />
    <StandardAbout />
    <StandardContact />
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
