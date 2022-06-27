import * as React from "react"
import styled from "styled-components"

import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"

interface ProjectItemProps {
  title: string
  description: string
  stack: string[]
  github?: string
  website?: string
}

const StyledProjectsItem = styled.div`
  position: relative;

  background: var(--bg-gradient);

  border-radius: 2px;

  border: 1px solid rgb(255, 255, 255, 15%);

  box-shadow: inset 0px -8px 0px var(--primary);

  height: 300px;
  width: auto;

  padding: 2rem;

  h3 {
    font-size: 48px;
    margin: 0.5rem 0;
  }

  p {
    font-size: 14px;
    margin: 0;
  }

  .stack,
  .links {
    display: flex;

    list-style: none;
    padding: 0;
  }

  .stack {
    font-family: "IBM Plex Mono";
    font-size: 0.75rem;

    li {
      text-transform: uppercase;
      margin-right: 1rem;
    }
  }

  .links {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    font-size: 1.25rem;

    svg {
      display: block;
    }

    li {
      margin-left: 1rem;

      a:hover {
        svg {
          transform: scale(1.2);
          transition: all 0.1s ease-out;
        }
        color: inherit;
        background: black;
      }
    }
  }

  transition: all 0.2s ease-out;
  &:hover {
    background: var(--primary);
  }
`

const ProjectItem: React.FC<ProjectItemProps> = props => {
  return (
    <StyledProjectsItem>
      <ul className="stack">
        {props.stack.map((tech, key) => (
          <li key={key}>{tech}</li>
        ))}
      </ul>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul className="links">
        {props.github && (
          <li>
            <a href={props.github} target="_blank">
              <FiGithub />
            </a>
          </li>
        )}
        {props.website && (
          <li>
            <a href={props.website} target="_blank">
              <FaExternalLinkAlt />
            </a>
          </li>
        )}
      </ul>
    </StyledProjectsItem>
  )
}

export default ProjectItem
