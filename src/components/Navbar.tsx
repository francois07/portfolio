import * as React from "react"
import styled from "styled-components"
import { Squash as Hamburger } from "hamburger-react"
import useScrollDirection from "../hooks/useScrollDirection"
import { motion } from "framer-motion"

interface NavProps {
  toggled: boolean
  scrollDir: "up" | "down"
  scrolledToTop: boolean
}

const StyledNavbar = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: fixed;
  z-index: 99;

  padding: 2rem 2rem;
  width: 100vw;

  ${props => !props.scrolledToTop && "background-color: var(--bg-gradient);"}

  /* backdrop-filter: ${props => (props.toggled ? "none" : "blur(20px)")}; */

  transition: transform 0.2s ease-out, background-color 0.2s ease-out;
  transform: translateY(
    ${props =>
      !props.toggled && props.scrollDir === "down" && !props.scrolledToTop
        ? "-150px"
        : "0px"}
  );

  .links {
    width: auto;

    display: flex;
    list-style: none;
    align-items: center;
    justify-content: flex-end;

    padding: 0;
    margin: 0;

    font-weight: bold;

    & > li:not(:last-child) {
      margin-right: 2rem;
    }
  }

  .contact_button {
    ${({ theme }) => theme.mixins.buttonPrimary}
  }

  .nav_button {
    display: none;

    cursor: pointer;
    outline: none;

    background: transparent;
    border: none;

    color: white;
    font-size: 3rem;

    &:focus {
      background: transparent;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 1rem 1rem;

    .nav_menu {
      height: 100vh;

      position: absolute;
      right: 0;
      top: 0;
      background-color: var(--bg-gradient);

      box-shadow: -10px 0px 20px
        rgba(0, 0, 0, ${props => (props.toggled ? "0.5" : "0")});

      transition: transform 0.2s ease-out;

      transform: translateX(
        ${props => (props.toggled ? "0" : "300px")}
      ) !important;
    }

    .links {
      height: 100%;
      width: 300px;

      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > li {
        margin: 2rem 0 !important;
      }
    }

    .nav_button {
      display: block;
    }
  }
`

const navList = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: { y: -100, opacity: 0 },
}

const navItem = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -100, opacity: 0 },
}

const Navbar: React.FC<{}> = ({}) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const scrollDir = useScrollDirection({
    initialDirection: "up",
    thresholdPixels: 100,
    off: toggleMenu,
  })
  const [scrolledToTop, setscrolledToTop] = React.useState(true)

  const handleScroll = () => {
    setscrolledToTop(window.pageYOffset < 250)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollDir, scrolledToTop, toggleMenu])

  return (
    <StyledNavbar
      toggled={toggleMenu}
      scrollDir={scrollDir}
      scrolledToTop={scrolledToTop}
    >
      <div className="nav_menu">
        <motion.ul
          variants={navList}
          initial="hidden"
          animate="visible"
          className="links"
        >
          <motion.li variants={navItem}>
            <a href="#about">About</a>
          </motion.li>
          <motion.li variants={navItem}>
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li variants={navItem}>
            <a
              href="mailto:mtfrancois.soulie@gmail.com"
              className="contact_button"
            >
              Contact
            </a>
          </motion.li>
        </motion.ul>
      </div>

      <button className="nav_button">
        <Hamburger toggled={toggleMenu} toggle={setToggleMenu} />
      </button>
    </StyledNavbar>
  )
}

export default Navbar
