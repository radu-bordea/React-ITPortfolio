import me from "../assets/me.png";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

// Hero component definition
const Hero = () => {
  return (
    // Outer container with background color and padding
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-200 transition-all duration-700 text-neutral-400 py-24">
      {/* Inner grid container for layout */}
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        {/* Text content section */}
        <article>
          {/* Heading */}
          <h1 className="text-7xl font-bold tracking-wider">I'm Radu</h1>
          {/* Subheading */}
          <p className="mt-4 text-3xl text-neutral-300 capitalize tracking-wide">
            React Developer
          </p>
          {/* Description */}
          <p className="mt-2 text-lg text-neutral-200 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          {/* Social media icons */}
          <div className="flex gap-x-4 mt-4">
            {/* GitHub icon */}
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-neutral-200 hover:text-black duration-300" />
            </a>
            {/* LinkedIn icon */}
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-neutral-200 hover:text-black duration-300" />
            </a>
            {/* Twitter icon */}
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-neutral-200 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        {/* Image section (hidden on small screens) */}
        <article className="hidden ml-auto  md:block">
          <img src={me} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};


export default Hero;
