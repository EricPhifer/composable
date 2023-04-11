import * as React from 'react'
import styled from 'styled-components'

const CopyStyles = styled.footer`
  width: 100%;
  height: var(--copyright-height);
  font-size: var(--font-sm);
  display: inline-flex;
  justify-content: space-around;
  background-color: darkcyan;
  font-weight: 600;
  color: white;
`

const Copyright = () => (
  <CopyStyles>
    <p>
      &copy; {new Date().getFullYear()} All Rights Reserved Phifer Web Solutions
    </p>
  </CopyStyles>
)

export default Copyright
