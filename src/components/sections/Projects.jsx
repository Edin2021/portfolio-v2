import { projects } from "../../assets/data/projects";
import Project from "../utilities/Project";

function Projects() {

  return (
    <section className="projects">
      <h2>PROJECTS <span id="projects"></span></h2>
      <span className="separator"></span>
      {projects.map((project, i) => (
        <Project project={project} i={i} key={project.id}/>
      ))}
    </section>
  );
}

export default Projects;
