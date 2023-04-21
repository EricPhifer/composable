import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
/* eslint-disable-next-line */
import { Nav, Navbar } from 'react-bootstrap'

export default function Navigation() {
  const { navigation } = useStaticQuery(graphql`
    query {
      navigation: allSanityNavigation {
        nodes {
          id
        }
      }
    }
  `)
  const { nodes } = navigation
  return (
    <>
      {nodes.map(node => (
        <Navbar key={node.id}>
          <Navbar.Brand href="#home">Modular Design</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end" activeKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link href="/home">One</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-1">Two</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="link-2">Three</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Toggle>
        </Navbar>
      ))}
    </>
  )
}
