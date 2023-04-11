import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 7rem;
  background: #e2e2e2;
`

const Nav = styled.nav`
  width: 100%;
  display: inline-flex;
  img {
    width: 7rem;
    height: 7rem;
  }
`

const List = styled.ul`
  list-style-type: none;
  display: inline-flex;
`

const Item = styled.li`
  a {
    text-decoration: none;
  }
`

const StoryNav = () => (
  <Container>
    <Nav>
      <img
        src="https://source.unsplash.com/random/?businesslogo/70x70"
        alt="Business Logo"
      />
      <List>
        <Item>
          <Link to="/storbrand#sections">Sections</Link>
        </Item>
        <Item>
          <Link to="/storbrand#accordions">Accordions</Link>
        </Item>
        <Item>
          <Link to="/storbrand#carousels">Carousels</Link>
        </Item>
        <Item>
          <Link to="/storbrand#about">About</Link>
        </Item>
      </List>
      <Link to="/storbrand#contact" className="contact">
        Contact Us
      </Link>
    </Nav>
  </Container>
)

export default StoryNav
