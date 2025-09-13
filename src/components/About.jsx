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
          <SectionTitle text="Passionate Modern Web Developer" />{" "}
          {/* Section title for "About" */}
          {/* Descriptive text for the "About" section */}
          <p className="text-neutral-600 leading-loose">
            I’m a freelance Next.js full-stack developer with a passion for
            building modern, scalable, and user-friendly web applications. My
            toolkit includes <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, <strong>TailwindCSS</strong>,{" "}
            <strong>PrismaORM</strong>, <strong>Neon PostgreSQL</strong>, and{" "}
            <strong>Clerk</strong> — technologies I use daily to craft fast and
            reliable solutions. After graduating in IT from Åland University of
            Applied Sciences in Finland, I’ve created projects for both clients
            and myself, focusing on clean design and strong functionality. At
            the moment, I can deliver landing pages, company websites, and
            custom trackers, along with secure login systems and full-stack
            development. While booking and payment systems are not part of my
            stack yet, I ensure every project is responsive, professional, and
            built to grow with your needs.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About; // Export the component for use in other parts of the app
