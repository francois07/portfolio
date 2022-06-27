import { motion } from "framer-motion"
import * as React from "react"
import styled from "styled-components"

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  padding-top: 0;
  padding-bottom: 0;

  p {
    margin: 1rem 0 2rem;
    max-width: 478px;
  }

  h1 {
    font-size: clamp(56px, 12vw, 96px);
    &:before {
      content: none;
      counter-increment: none;
    }
  }

  h2 {
    font-size: clamp(32px, 8vw, 48px);
    font-weight: 400;
  }

  h3 {
    font-family: "Roboto Mono";
    font-weight: 400;
  }

  .button {
    ${({ theme }) => theme.mixins.buttonPrimary}

    font-size: 1.25rem;
  }

  .highlighted {
    ${({ theme }) => theme.mixins.highlightPrimary}
  }
`

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {
    y: -100,
    opacity: 0,
  },
}

const item = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -100, opacity: 0 },
}

const Hero: React.FC<{}> = ({}) => {
  return (
    <StyledHeroSection>
      <div>
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <motion.h3 variants={item} className="highlighted">
            Hello, I'm
          </motion.h3>
          <motion.h1 variants={item}>François Soulié</motion.h1>
          <motion.h2 variants={item}>
            I build <i>applications</i> for the web.
          </motion.h2>
          <motion.p variants={item}>
            I’m a Software Engineering student{" "}
            <span className="highlighted">
              <b>@ ESIEE Paris</b>
            </span>{" "}
            proficient at building digital experiences. Based in Paris, France.
          </motion.p>
        </motion.div>
      </div>
      <a href="#about" className="button">
        Get to know me
      </a>
    </StyledHeroSection>
  )
}

export default Hero
