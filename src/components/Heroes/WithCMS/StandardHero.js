import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

export default function StandardHero() {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: allSanityHero {
        nodes {
          id
        }
      }
    }
  `)
  const { nodes } = hero
  return (
    <>
      {nodes.map(node => (
        <header id="standard-hero" key={node.id}>
          <h1>Site Title</h1>
        </header>
      ))}
    </>
  )
}
