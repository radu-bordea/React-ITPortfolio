import React from "react";
import SectionTitle from "./SectionTitle"; 
import { skills } from "../data"; 
import SkillsCard from "./SkillsCard"; 

// A functional component that renders the "Skills" section of the app
const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      {/* Section title for the "Skills" section */}
      <SectionTitle text="tech stack" />

      {/* Grid layout for displaying skill cards */}
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Map over the skills data to render a SkillsCard for each skill */}
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />; // Spread props for each skill
        })}
      </div>
    </section>
  );
};

export default Skills; 
