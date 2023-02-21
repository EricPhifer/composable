/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Copyright from "./copyright"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import Navigation from "./navigation"

const SiteStyles = styled.div `
  margin: var(nav-height) auto 0,
  maxWidth: var(--size-content),
  padding: var(--size-gutter),
  min-height: 100vh;
`;

const FooterAtFoot = styled.div `
  width: 100vw;
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
        <Header siteTitle={data.site.siteMetadata?.title || `Composable Architecture`} />
        <Navigation />
        <SiteStyles>
          <main>{children}</main>
        </SiteStyles>
        <FooterAtFoot>
          <Footer />
          <Copyright />
        </FooterAtFoot>
    </>
  )
}

export default Layout
