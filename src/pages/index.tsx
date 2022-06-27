import * as React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"
import Seo from "../components/seo"

const StyledMain = styled.main``

const IndexPage: React.FC<{}> = ({}) => (
  <Layout>
    <Seo title="François Soulié" />
    <StyledMain>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </StyledMain>
  </Layout>
)

export default IndexPage
