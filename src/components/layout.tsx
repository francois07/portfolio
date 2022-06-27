import * as React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styles"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </ThemeProvider>
)

export default Layout
