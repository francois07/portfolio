import * as React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: normal;
    font-size: 0.75rem;
    font-family: "Roboto Mono";

    text-align: center;
  }
`

const Footer: React.FC<{}> = ({}) => {
  return (
    <StyledFooter>
      <h3>
        <a href="https://github.com/francois07" target="_blank">
          Website Designed & Built by François Soulié
        </a>
      </h3>
    </StyledFooter>
  )
}

export default Footer
