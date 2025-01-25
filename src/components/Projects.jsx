import React from "react";
import ProjectsCard from "./ProjectsCard"; // Importing the ProjectsCard component
import { projects } from "../data"; // Importing the projects data
import SectionTitle from "./SectionTitle"; // Importing the SectionTitle component

// A functional component that renders the "Projects" section of the app
const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      {/* Section title for the "Projects" section */}
      <SectionTitle text="web creations" />

      {/* Grid layout for displaying project cards */}
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Map over the projects data to render a ProjectsCard for each project */}
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />; // Spread props for each project
        })}
      </div>
    </section>
  );
};

export default Projects; // Export the component for use in other parts of the app
