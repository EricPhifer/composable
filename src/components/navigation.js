import { Link } from 'gatsby'
import * as React from 'react'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import styled from 'styled-components'

const NavStyles = styled.nav`
  position: relative;
  width: 100vw;
  height: var(--nav-height);
  background: darkcyan;
`

const LinkList = styled.ul`
  display: inline-flex;
  position: absolute;
  right: 2rem;
  list-style-type: none;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
  }
`

const ListItem = styled.li`
  padding: 1.5rem 2rem;
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

const Navigation = () => (
  <NavStyles>
    <Pagination>
      <LeftCaret type="button">
        <BsCaretLeftFill />
      </LeftCaret>
      <RightCaret type="button">
        <BsCaretRightFill />
      </RightCaret>
    </Pagination>
    <LinkList>
      <Link to="#">
        <ListItem>One</ListItem>
      </Link>
      <Link to="#">
        <ListItem>Two</ListItem>
      </Link>
      <Link to="#">
        <ListItem>Three</ListItem>
      </Link>
    </LinkList>
  </NavStyles>
)

export default Navigation
