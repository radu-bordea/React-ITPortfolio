import React from "react";
import { FaGitSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"; // Importing social media icons
import { TbWorldWww } from "react-icons/tb"; 

// A functional component that renders a project card
const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="rounded-lg shadow-2xl hover:shadow-neutral-700 duration-300 text-neutral-200">
      {/* Display the project image */}
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />

      {/* Content section: title, description, and links */}
      <div className="capitalize p-8">
        {/* Project title */}
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>

        {/* Project description */}
        <p className="mt-4 text-neutral-600 leading-loose">{text}</p>

        {/* Links section */}
        <div className="mt-4 flex gap-x-4">
          {/* Link to the project website */}
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-neutral-600 hover:text-black duration-300" />
          </a>

          {/* Link to the project's GitHub repository */}
          <a href={github}>
            <FaGitSquare className="h-8 w-8 text-neutral-600 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard; 
