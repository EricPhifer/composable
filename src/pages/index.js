import * as React from 'react'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'

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

const Pagination = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
`

const LeftCaret = styled.button`
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  font-size: 2rem;
  padding: 0.4rem;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.6);
  left: 0;
`

const RightCaret = styled.button`
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  font-size: 2rem;
  padding: 0.4rem;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.6);
  right: 0;
`

const IndexPage = () => (
  <Layout>
    <HeroStyles>
      <Pagination>
        <LeftCaret type="button">
          <BsCaretLeftFill />
        </LeftCaret>
        <RightCaret type="button">
          <BsCaretRightFill />
        </RightCaret>
      </Pagination>
      <div />
    </HeroStyles>
    <AlternativeStyles>
      <Pagination>
        <LeftCaret type="button">
          <BsCaretLeftFill />
        </LeftCaret>
        <RightCaret type="button">
          <BsCaretRightFill />
        </RightCaret>
      </Pagination>
      <div />
    </AlternativeStyles>
    <SectionStyles>
      <Pagination>
        <LeftCaret type="button">
          <BsCaretLeftFill />
        </LeftCaret>
        <RightCaret type="button">
          <BsCaretRightFill />
        </RightCaret>
      </Pagination>
      <div />
    </SectionStyles>
    <AlternativeStyles>
      <Pagination>
        <LeftCaret type="button">
          <BsCaretLeftFill />
        </LeftCaret>
        <RightCaret type="button">
          <BsCaretRightFill />
        </RightCaret>
      </Pagination>
      <div />
    </AlternativeStyles>
    <SectionStyles>
      <Pagination>
        <LeftCaret type="button">
          <BsCaretLeftFill />
        </LeftCaret>
        <RightCaret type="button">
          <BsCaretRightFill />
        </RightCaret>
      </Pagination>
      <div />
    </SectionStyles>
    <AlternativeStyles>
      <Pagination>
        <LeftCaret type="button">
          <BsCaretLeftFill />
        </LeftCaret>
        <RightCaret type="button">
          <BsCaretRightFill />
        </RightCaret>
      </Pagination>
      <div />
    </AlternativeStyles>
    <SectionStyles>
      <Pagination>
        <LeftCaret type="button">
          <BsCaretLeftFill />
        </LeftCaret>
        <RightCaret type="button">
          <BsCaretRightFill />
        </RightCaret>
      </Pagination>
      <div />
    </SectionStyles>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
