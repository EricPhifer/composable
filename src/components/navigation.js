import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

const NavStyles = styled.nav `
  position: relative;
  width: 100vw;
  height: var(--nav-height);
  border: 1px solid red;
  font-size: 1.5rem;
  ul {
    display: inline-flex;
    position: absolute;
    right: 2rem;
    list-style-type: none;
    a {
      text-decoration: none;
      font-weight: bold;
    }
    li {
      padding: 1rem 2rem;
    }
  }
`;

const Navigation = () => (
  <NavStyles>
      <ul>
        <Link to='#'>
          <li>One</li>
        </Link>
        <Link to='#'>
          <li>Two</li>
        </Link>
        <Link to='#'>
          <li>Three</li>
        </Link>
      </ul>
  </NavStyles>
)

export default Navigation