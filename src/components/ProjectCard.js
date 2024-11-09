import { Col } from "react-bootstrap";
import '../styles/Projects.css';

export const ProjectCard = ({ title, description, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-txtx">
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
          <h4>{title}</h4>
          <span>{description || "No description available."}</span>
        </a>
      </div>
    </Col>
  );
};
