import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import model from '../src/assets/model.png'
import itportfolio from "../src/assets/itportfolio.png";
import productsapp from '../src/assets/products-app.png'
import reactfinance from '../src/assets/reactfinance.png'

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
    img: itportfolio,
    url: "https://my-it-portfolio.netlify.app/",
    github: "https://github.com/radu-bordea/React-ITPortfolio.git",
    title: "My It Portfolio",
    text: "A collection of diverse projects showcasing my skills, creativity, and problem-solving abilities across various fields.",
  },
  {
    id: nanoid(),
    img: productsapp,
    url: "https://mern-productsapp.onrender.com/",
    github: "https://github.com/radu-bordea/MERN-ProductsApp.git",
    title: "MERN-ProductsApp",
    text: "MERN-ProductsApp is a full-stack CRUD application using MongoDB, Express.js, React, and Node.js, with Zustand for global state management, enabling seamless product management with a Chackra UI design and RESTful API. 🚀",
  },
  {
    id: nanoid(),
    img: reactfinance,
    url: "https://react-finance-vmw8.onrender.com/",
    github: "https://github.com/radu-bordea/React-Finance.git",
    title: "React-Finance",
    text: "MERN-ProductsApp is a full-stack CRUD application using MongoDB, Express.js, React, and Node.js, with Zustand for global state management, enabling seamless product management with a Chackra UI design and RESTful API. 🚀",
  },
];
