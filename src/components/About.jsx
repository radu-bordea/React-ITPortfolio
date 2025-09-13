import aboutSvg from "../assets/about.svg"; // Importing the about section image
import SectionTitle from "./SectionTitle"; // Importing the SectionTitle component

// A functional component that renders the "About" section of the app
const About = () => {
  return (
    <div className="py-20 text-neutral-600" id="about">
      {/* Grid layout for the "About" section with an image and text */}
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        {/* Display the about section image */}
        <img src={aboutSvg} className="w-full h-64" alt="About Section" />

        {/* Article containing the section title and description */}
        <article>
          <SectionTitle text="code and coffee" />{" "}
          {/* Section title for "About" */}
          {/* Descriptive text for the "About" section */}
          <p className="text-neutral-600 leading-loose">
            I am a 2024 graduate in Information Technology from Åland University
            of Applied Science, Finland. With a deep passion for coding, I
            specialize in full-stack development, primarily working with the
            MERN stack—MongoDB, Express.js, React, and Node.js. In addition to
            my expertise in the MERN stack, I am proficient in technologies such
            as HTML, CSS, Bootstrap, TailwindCSS, JavaScript, Next.js and GitHub. I
            thrive in creating seamless user experiences and efficient, scalable
            solutions. I am fluent in English, Swedish, and Romanian, which
            allows me to communicate effectively in multicultural and diverse
            teams. Driven by a love for problem-solving and continuous learning,
            I am eager to contribute to innovative projects that make an impact.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About; // Export the component for use in other parts of the app
