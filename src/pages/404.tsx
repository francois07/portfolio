import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledSection = styled.section`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NotFoundPage: React.FC<{}> = ({}) => (
  <Layout>
    <StyledSection>
      <div>
        <Seo title="404: Not found" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </StyledSection>
  </Layout>
)

export default NotFoundPage
