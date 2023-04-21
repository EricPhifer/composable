import { Link } from 'gatsby'
import * as React from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  min-height: 20rem;
  margin: 5rem 0;
  text-align: center;
`

const Slider = styled.div`
  margin: 0 auto;
  perspective: 10rem;
`

const Logos = styled.ol`
  max-width: 80rem;
  display: flex;
  align-items: baseline;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  li {
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
  &::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--black);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::marker {
    position: absolute;
    top: 0;
  }
`

const Logo = styled.li`
  padding-top: 50vh;
  margin-top: -50vh;
  width: 100%;
  position: relative;
  border-radius: 1rem;
  background: var(--white);
  flex: 0 0 100%;
  counter-increment: item;
`

const Snapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  .prev svg {
    bottom: 9%;
    left: 0;
    @media only screen and (max-width: 900px) {
      bottom: 7%;
    }
    @media only screen and (max-width: 700px) {
      bottom: 15%;
    }
  }
  .next svg {
    bottom: 9%;
    right: 0;
    @media only screen and (max-width: 900px) {
      bottom: 7%;
    }
    @media only screen and (max-width: 700px) {
      bottom: 15%;
    }
  }
`

const Arrows = styled(Link)`
  width: 100%;
  height: 100%;
  svg {
    font-size: 5rem;
    color: var(--gray);
    position: absolute;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 50%;
    &:hover {
      color: var(--blue);
    }
  }
`
const Nav = styled(Link)`
  width: 0.75rem;
  height: 0.75rem;
  margin: 0.25rem 0.75rem 0.5rem 0;
  padding: 0.75rem;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--gray);
  color: var(--white);
  text-decoration: none;
  &:active {
    top: 0.1rem;
  }
  &:focus {
    background: var(--blue);
    color: var(--black);
  }
  &:hover {
    background: var(--blue);
    color: var(--black);
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  justify-items: center;
  overflow-x: auto;
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
  }
`

const RandomOne = styled.a`
  width: 15rem;
  height: 15rem;
  margin: 1rem;
  border-radius: 50%;
  background-image: url(https://source.unsplash.com/random/?logo);
  background-position: center center;
  background-size: cover;
  @media only screen and (max-width: 900px) {
    width: 12rem;
    height: 12rem;
  }
`

const RandomTwo = styled.a`
  width: 15rem;
  height: 15rem;
  margin: 1rem;
  border-radius: 50%;
  background-image: url(https://source.unsplash.com/random/?symbol);
  background-position: center center;
  background-size: cover;
  @media only screen and (max-width: 900px) {
    width: 12rem;
    height: 12rem;
  }
`

const RandomThree = styled.a`
  width: 15rem;
  height: 15rem;
  margin: 1rem;
  border-radius: 50%;
  background-image: url(https://source.unsplash.com/random/?business+logo);
  background-position: center center;
  background-size: cover;
  @media only screen and (max-width: 900px) {
    width: 12rem;
    height: 12rem;
  }
`

const RandomFour = styled.a`
  width: 15rem;
  height: 15rem;
  margin: 1rem;
  border-radius: 50%;
  background-image: url(https://source.unsplash.com/random/?emoji);
  background-position: center center;
  background-size: cover;
  @media only screen and (max-width: 900px) {
    width: 12rem;
    height: 12rem;
  }
`

const LogoCarousel = () => (
  <Section id="carousels-logo" aria-label="Logo Gallery">
    <Slider>
      <Logos className="logos">
        <Logo className="logo" id="logo1" tabIndex={0}>
          <Grid>
            <RandomOne href="#" rel="noopener" />
            <RandomTwo href="#" rel="noopener" />
            <RandomThree href="#" rel="noopener" />
            <RandomFour href="#" rel="noopener" />
          </Grid>
          <Snapper>
            <Arrows to="#logo4" className="prev">
              <FaCaretLeft />
            </Arrows>
            <Arrows to="#logo2" className="next">
              <FaCaretRight />
            </Arrows>
          </Snapper>
        </Logo>
        <Logo className="logo" id="logo2" tabIndex={0}>
          <Grid>
            <RandomTwo href="#" rel="noopener" />
            <RandomOne href="#" rel="noopener" />
            <RandomThree href="#" rel="noopener" />
            <RandomFour href="#" rel="noopener" />
          </Grid>
          <Snapper>
            <Arrows to="#logo1" className="prev">
              <FaCaretLeft />
            </Arrows>
            <Arrows to="#logo3" className="next">
              <FaCaretRight />
            </Arrows>
          </Snapper>
        </Logo>
        <Logo className="logo" id="logo3" tabIndex={0}>
          <Grid>
            <RandomThree href="#" rel="noopener" />
            <RandomOne href="#" rel="noopener" />
            <RandomFour href="#" rel="noopener" />
            <RandomTwo href="#" rel="noopener" />
          </Grid>
          <Snapper>
            <Arrows to="#logo2" className="prev">
              <FaCaretLeft />
            </Arrows>
            <Arrows to="#logo4" className="next">
              <FaCaretRight />
            </Arrows>
          </Snapper>
        </Logo>
        <Logo className="logo" id="logo4" tabIndex={0}>
          <Grid>
            <RandomFour href="#" rel="noopener" />
            <RandomThree href="#" rel="noopener" />
            <RandomTwo href="#" rel="noopener" />
            <RandomOne href="#" rel="noopener" />
          </Grid>
          <Snapper>
            <Arrows to="#logo3" className="prev">
              <FaCaretLeft />
            </Arrows>
            <Arrows to="#logo1" className="next">
              <FaCaretRight />
            </Arrows>
          </Snapper>
        </Logo>
      </Logos>
      <Nav to="#logo1" />
      <Nav to="#logo2" />
      <Nav to="#logo3" />
      <Nav to="#logo4" />
    </Slider>
  </Section>
)

export default LogoCarousel
