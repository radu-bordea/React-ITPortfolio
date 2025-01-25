import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import model from '../src/assets/model.png'
import game from '../src/assets/game.png'
import itportfolio from "../src/assets/itportfolio.png";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-blue-400" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-blue-400" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-400" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: model,
    url: "https://radu-3dportfolio.netlify.app/",
    github: "https://github.com/radu-bordea/REACT-3DPortfolio.git",
    title: "ModelFit Portfolio",
    text: "Fitness and modeling portfolio built with React and Styled Components, showcasing style, health, and elegance.",
  },
  {
    id: nanoid(),
    img: game,
    url: "https://react-game-hub-rho.vercel.app/",
    github: "https://github.com/radu-bordea/React-GameHub.git",
    title: "Game Hub",
    text: "Game project built with React, Chakra UI, and RWAG API, offering dynamic gameplay and interactive features.",
  },
  {
    id: nanoid(),
    img: itportfolio,
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/radu-bordea/React-ITPortfolio.git",
    title: "My It Portfolio",
    text: "A collection of diverse projects showcasing my skills, creativity, and problem-solving abilities across various fields.",
  },
];
