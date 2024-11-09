import { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import '../styles/Projects.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchPinnedProjects = async () => {
      const query = `
        {
          user(login: "chasem11") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        const pinnedProjects = result.data.user.pinnedItems.nodes;
        setProjects(pinnedProjects);
      } catch (error) {
        console.error('Error fetching pinned projects:', error);
      }
    };

    fetchPinnedProjects();
  }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are my pinned GitHub projects, showcasing some of my best work.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <a
                            href="https://github.com/Chasem11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link"
                        >
                            Pinned Projects
                        </a>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.name}
                              description={project.description}
                              url={project.url}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
