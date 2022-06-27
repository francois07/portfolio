import { motion, useAnimation } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import ProjectItem from "../ProjectItem";
import FeaturedProjectItem from "../FeaturedProjectItem";
import { getImage } from "gatsby-plugin-image";

const StyledProjectsSection = styled.section`
  .projects {
    margin-top: 3rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 3rem;

    width: 100%;
    padding: 0;

    list-style: none;
    & > li {
      transition: all 0.2s ease-out;
    }

    & > li:hover {
      transform: translateY(-5px) !important;
    }
  }

  .featured {
    margin-top: 2rem;
    list-style: none;
    padding: 0;
  }
`;

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {
    y: -50,
    opacity: 0,
  },
};

const item = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -50, opacity: 0 },
};

const Projects: React.FC<{}> = ({}) => {
  const [seen, setSeen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView && !seen) {
      animation.start("visible");
      setSeen(true);
    }
  }, [inView, seen]);

  const projects = useStaticQuery(graphql`
    query Projects {
      projects: allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            frontmatter {
              date
              title
              stack
              github
              website
              description
            }
          }
        }
      }

      featuredProjects: allMdx(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              stack
              github
              website
              description
              cover {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const projectsData = projects.projects.edges.map(
    ({ node }: any) => node.frontmatter
  );

  const featuredProjectsData = projects.featuredProjects.edges.map(
    ({ node }: any) => node.frontmatter
  );

  return (
    <StyledProjectsSection id="projects">
      <h1>
        Some <i>Projects</i> I've worked on
      </h1>

      <motion.ul
        variants={variants}
        initial="hidden"
        animate={animation}
        ref={ref}
        className="featured"
      >
        {featuredProjectsData.map((project: any, key: any) => {
          const cover = getImage(project.cover);

          return (
            <motion.li variants={item} key={key}>
              <FeaturedProjectItem {...{ ...project, cover }} />
            </motion.li>
          );
        })}
      </motion.ul>
      <motion.ul
        variants={variants}
        initial="hidden"
        animate={animation}
        className="projects"
        ref={ref}
      >
        {projectsData.map((project: any, key: any) => (
          <motion.li variants={item} key={key}>
            <ProjectItem {...project} />
          </motion.li>
        ))}
      </motion.ul>
    </StyledProjectsSection>
  );
};

export default Projects;
