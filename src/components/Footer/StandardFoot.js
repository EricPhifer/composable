import * as React from 'react'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  width: 100%;
  height: var(--footer-height);
  font-size: 1.5rem;
  display: inline-flex;
  background: lightcyan;
`

const Pagination = styled.div`
  width: 100%;
  height: var(--footer-height);
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

const Footer = () => (
  <FooterStyles>
    <Pagination>
      <LeftCaret type="button">
        <BsCaretLeftFill />
      </LeftCaret>
      <RightCaret type="button">
        <BsCaretRightFill />
      </RightCaret>
    </Pagination>
    <p />
  </FooterStyles>
)

export default Footer
