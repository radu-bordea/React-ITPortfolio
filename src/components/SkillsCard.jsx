import React from "react";

// A functional component that renders a skills card with an icon, title, and description text.
const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      {/* Render the icon passed as a prop */}
      <span>{icon}</span>

      {/* Render the title, styled with a margin-top and bold font */}
      <h4 className="mt-6 text-neutral-600 font-bold">{title}</h4>

      {/* Render the descriptive text, styled with a margin-top and light text color */}
      <p className="mt-2 text-neutral-600">{text}</p>
    </article>
  );
};

export default SkillsCard;