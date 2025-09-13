import React from "react";

// A functional component that renders a section title with a border and text
const SectionTitle = ({ text }) => {
  return (
    <div className="border-b text-neutral-600 pb-5">
      {/* Render the section title text, styled with font size, weight, spacing, and capitalization */}
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
};

export default SectionTitle; 
