import { createGlobalStyle } from "styled-components"
import variables from "./variables"

const GlobalStyle = createGlobalStyle`
  ${variables}

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-gradient);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 25px;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
  
  h1 {
    font-size: 48px;
    
    &:before {
      content: counter(section, upper-roman) ".";
      counter-increment: section 1;
      margin-right: 0.75rem;
      color: var(--primary);
      font-family: "IBM Plex Mono";
      font-size: 0.75em;
    }
  }

  p {
    line-height: 1.5rem;
  }

  body { 
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    background: var(--bg-gradient);
    color: white;
    font-family: 'Roboto', sans-serif;

    counter-reset: section;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 0 150px;

    @media (max-width: 1080px) {
      padding: 0 100px;
    }
    @media (max-width: 768px) {
      padding: 0 25px;
    }
  }
  
  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
  }

  i {
    font-family: "Merriweather";
    font-style: italic;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--primary);
    }
  }
`
export default GlobalStyle
