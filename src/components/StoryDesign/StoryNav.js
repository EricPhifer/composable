import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 7rem;
  display: fixed;
  top: 0;
  left: 0;
  background: #e2e2e2;
`

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`

const Img = styled.div`
  width: 7rem;
  height: 7rem;
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
      <Img>
        <img
          src="https://source.unsplash.com/random/?logo+business/70x70"
          alt="Business Logo"
        />
      </Img>
      <List>
        <Item>
          <Link to="/storybrand#sections">Sections</Link>
        </Item>
        <Item>
          <Link to="/storybrand#accordions">Accordions</Link>
        </Item>
        <Item>
          <Link to="/storybrand#carousels">Carousels</Link>
        </Item>
        <Item>
          <Link to="/storybrand#about">About</Link>
        </Item>
      </List>
      <Link to="/storybrand#contact" className="contact">
        Contact Us
      </Link>
    </Nav>
  </Container>
)

export default StoryNav
