import { motion, useAnimation } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { useEffect, useState } from "react"
import { FaGit, FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa"
import { FiDownload, FiGithub } from "react-icons/fi"
import { SiGatsby, SiTypescript, SiFlutter } from "react-icons/si"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const StyledAboutSection = styled(motion.section)`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;

  p {
    margin: 1rem 0;
    font-size: 18px;
    line-height: 1.5rem;
  }

  .description {
    max-width: 650px;
  }

  .socials {
    display: flex;
    align-items: center;

    list-style: none;
    padding: 0;
    margin: 1rem 0;

    font-family: "IBM Plex Mono";
    font-size: clamp(1, 8vw, 1.25rem);

    li,
    a {
      display: inline-flex;
      align-items: center;
    }

    li:not(:last-child) {
      margin-right: 1rem;
    }

    svg {
      display: block;
    }

    .resume-button {
      ${({ theme }) => theme.mixins.buttonPrimary}

      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;

      display: inline-flex;
      align-items: center;

      padding: 0.4rem 25px;
      margin: 0 0 0 0.5rem;

      .ico {
        margin-left: 0.5rem;
      }
    }
  }

  .techs {
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;

    font-size: 52px;
    list-style: none;

    width: 100%;

    padding: 1rem 1.5rem;
    margin: 2rem 0;

    border-radius: 10px;

    background: hsl(0, 100%, 100%, 2.5%);

    li {
      display: flex;
      padding: 1rem;
    }
  }
`

const StyledImage = styled.div`
  max-width: 250px;
  margin: 3rem;

  .img-wrapper {
    transition: all 0.1s ease-out;

    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`

const About: React.FC<{}> = ({}) => {
  const [seen, setSeen] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.2 })
  const animation = useAnimation()

  useEffect(() => {
    if (inView && !seen) {
      animation.start({
        opacity: 1,
        x: 0,
      })
      setSeen(true)
    }
  }, [inView, seen])

  return (
    <StyledAboutSection
      initial={{ opacity: 0, x: -100 }}
      animate={animation}
      id="about"
    >
      <div className="description">
        <h1>
          About <i>Me</i>
        </h1>
        <ul className="socials">
          <li>
            <a href="https://linkedin.com/in/francois-soulie" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://github.com/francois07" target="_blank">
              <FiGithub />
            </a>
          </li>
          <li>
            Download my{" "}
            <a
              href="/CV_EN_Francois_Soulie.pdf"
              className="resume-button"
              target="_blank"
            >
              résumé <FiDownload className="ico" />
            </a>
          </li>
        </ul>
        <p>
          I build complex applications using tools such as <i>Javascript</i>,
          Java and C. Web development is my favorite and I am experienced both
          in <i>Front-end</i> and <i>Back-end</i> development. My interest in
          web development started back in <i>2019</i> when I decided to make my
          own bot for <i>Discord</i>, a popular voice and text communication
          service.
        </p>
        <p>
          Nowadays, I am actively trying to improve at <i>UI/UX</i>. In my
          opinion, the look-and-feel of an app is as important as its
          functionalities.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul className="techs highlight-secondary">
          <li>
            <SiFlutter />
          </li>
          <li>
            <FaNodeJs />
          </li>
          <li>
            <SiTypescript />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <SiGatsby />
          </li>
          <li>
            <FaGit />
          </li>
        </ul>
      </div>
      <StyledImage ref={ref}>
        <div className="img-wrapper">
          <StaticImage src="../../../static/images/selfie.jpg" alt="selfie" />
        </div>
      </StyledImage>
    </StyledAboutSection>
  )
}

export default About
