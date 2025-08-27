import { Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = ({ projects }) => {
  return (
    <Row>
      {
        projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              {...project}
            />
          )
        })
      }
    </Row>
  );
}

export default ProjectGrid;
