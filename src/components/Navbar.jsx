import React from "react";
import { links } from "../data";

// Navbar component definition
const Navbar = () => {
  return (
    // Outer container with background color
    <div className="bg-neutral-900 text-neutral-300">
      {/* Inner container for layout and styling */}
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        {/* Logo or heading */}
        <h2 className="text-3xl font-bold">
          Web <span className="text-emerald-600">Dev</span>
        </h2>
        {/* Navigation links */}
        <div className="flex gap-x-3">
          {/* Mapping through links array to generate each link */}
          {links.map((link) => {
            const { id, href, text } = link; // Destructure properties from link object
            return (
              // Anchor tag for each link
              <a
                key={id}
                id={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
