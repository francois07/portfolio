import { motion, useAnimation } from "framer-motion"
import * as React from "react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const StyledContactSection = styled(motion.section)`
  padding-block: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 600px;

  p {
    margin: 1rem 0;
    text-align: center;
  }

  .contactButton {
    ${({ theme }) => theme.mixins.buttonPrimary}
  }
`

const Contact: React.FC<{}> = ({}) => {
  const [seen, setSeen] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.5 })
  const animation = useAnimation()

  useEffect(() => {
    if (inView && !seen) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      })
      setSeen(true)
    }
  }, [inView, seen])

  return (
    <StyledContactSection
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animation}
    >
      <h1>
        Get in <i>Touch</i>
      </h1>
      <p>
        I'm always looking for new opportunities! Feel free to contact me if you
        have any question or business inquiry.
      </p>
      <a href="mailto:mtfrancois.soulie@gmail.com" className="contactButton">
        Contact Me
      </a>
    </StyledContactSection>
  )
}

export default Contact
