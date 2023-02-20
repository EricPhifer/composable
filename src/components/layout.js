/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation"
import Copyright from "./copyright"
import Footer from "./footer"
import styled from "styled-components"

const SiteStyles = styled.div `
  margin: var(nav-height) auto 0,
  maxWidth: var(--size-content),
  padding: var(--size-gutter),
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Navigation />
        <SiteStyles>
          <main>{children}</main>
        </SiteStyles>
        <Footer />
        <Copyright />
    </>
  )
}

export default Layout
