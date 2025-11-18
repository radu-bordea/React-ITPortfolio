import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiClerk,
} from "react-icons/si";
import { TbCloudDataConnection } from "react-icons/tb"; // for Neon DB cloud
import model from "../src/assets/model.png";
import property from "../src/assets/property.png";
import beehives from "../src/assets/beehives.png";
import itportfolio from "../src/assets/itportfolio.png";
import productsapp from "../src/assets/products-app.png";
import reactfinance from "../src/assets/reactfinance.png";
import panoramaX from "../src/assets/panoramax.png";
import cryptochainz from "../src/assets/cryptochainz.png";
import expensetracker from "../src/assets/expensetracker.png";
import seasafety from '../src/assets/seasafety.png'
import cleaning from '../src/assets/cleaning.png'


export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Next.js",
    icon: <SiNextdotjs className="h-16 w-16 text-black" />,
    text: "Building modern full-stack web applications with Next.js, leveraging server-side rendering and API routes for performance and scalability.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-blue-600" />,
    text: "Strong command of TypeScript, ensuring type safety, scalability, and maintainability in modern web applications.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-cyan-400" />,
    text: "Proficient in Tailwind CSS, rapidly building responsive, accessible, and modern UIs with utility-first design.",
  },
  {
    id: nanoid(),
    title: "Clerk",
    icon: <SiClerk className="h-16 w-16 text-purple-600" />,
    text: "Proficient in implementing authentication and user management with Clerk, enabling secure, scalable, and modern identity solutions for web applications.",
  },
  {
    id: nanoid(),
    title: "Prisma ORM",
    icon: <SiPrisma className="h-16 w-16 text-indigo-600" />,
    text: "Experienced with Prisma ORM, simplifying database queries, migrations, and schema management with a type-safe approach.",
  },
  {
    id: nanoid(),
    title: "Neon DB",
    icon: <TbCloudDataConnection className="h-16 w-16 text-green-500" />,
    text: "Skilled in integrating Neon’s serverless Postgres for scalable, high-performance database solutions in modern applications.",
  },

  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-400" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-green-600" />,
    text: "Proficient in MongoDB, designing and managing NoSQL databases optimized for performance and scalability in MERN applications.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-yellow-400" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: panoramaX,
    url: "https://www.panorama-x-lofoten.com/",
    github: "https://github.com/radu-bordea/NEXTjs-Project-X-Lofoten.git",
    title: "Panorama-X Rental App",
    text: "A modern rental property landing page built with Next.js, TypeScript, TailwindCSS and Sanity CMS, enabling seamless listings info, galerry, and responsive user experience.",
  },
  {
    id: nanoid(),
    img: beehives,
    url: "https://bidata.site/",
    github: "https://github.com/radu-bordea/NEXTjs-BeeHives-Project.git",
    title: "Beehives Project",
    text: "The Beehives Project is built with Next.js and MongoDB, fetching beehive data from Åland Islands to display detailed insights and charts. NextAuth for authentication and includes admin functionality for management.",
  },
  {
    id: nanoid(),
    img: cleaning,
    url: "https://cleaning-company-ro.netlify.app/",
    github: "https://github.com/radu-bordea/NEXTjs-CleaningCompany.git",
    title: "Servicii Curatenie",
    text: "A Landing Page for a new cleaning company built with Next.js, TailwindCSS, galerry, and responsive user experience."
  },
  {
    id: nanoid(),
    img: property,
    url: "https://nex-tjs-property-pulse.vercel.app/",
    github: "https://github.com/radu-bordea/NEXTjs-PropertyPulse",
    title: "Property Pulse App",
    text: "Property Rental App website designed to streamline listing, discovering, and renting properties. Built with Next.js server actions, Javascript and MongoDB as the database a smooth, responsive interface.",
  },
  {
    id: nanoid(),
    img: seasafety,
    url: "https://nex-tjs-sea-safety.vercel.app/tutorials",
    github: "https://github.com/radu-bordea/NEXTjs-SeaSafety.git",
    title: "SeaSafety",
    text: "SeaSafety website built with Next.js, Prisma, Neon; users access training materials and embedded YouTube videos.",
  },
  {
    id: nanoid(),
    img: cryptochainz,
    url: "https://nex-tjs-crypto-chain-z.vercel.app/",
    github: "https://github.com/radu-bordea/NEXTjs-CryptoChainZ.git",
    title: "CryptoChainZ",
    text: "Website fetching cripto data from coingecko api is built with Next.js, Tailwindcss, Javascript, implementing sorting to display detailed insights and charts.",
  },
  {
    id: nanoid(),
    img: expensetracker,
    url: "https://nextjs-expense-tracker-seven.vercel.app/",
    github: "https://github.com/radu-bordea/Nextjs-ExpenseTracker.git",
    title: "ExpenseTracker",
    text: "Website tracking expenses, build with NextJs, Prisma, Neon, Clerk where every user has its own data",
  },
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
    title: "My IT Portfolio",
    text: "A collection of diverse projects showcasing my skills, creativity, and problem-solving abilities across various fields.",
  },
  {
    id: nanoid(),
    img: productsapp,
    url: "https://mern-productsapp.onrender.com/",
    github: "https://github.com/radu-bordea/MERN-ProductsApp.git",
    title: "MERN-ProductsApp",
    text: "MERN-ProductsApp is a full-stack CRUD application using MongoDB, Express.js, React, and Node.js, with Zustand for global state management, enabling seamless product management with a Chakra UI design and RESTful API. 🚀",
  },
  {
    id: nanoid(),
    img: reactfinance,
    url: "https://react-finance-vmw8.onrender.com/",
    github: "https://github.com/radu-bordea/React-Finance.git",
    title: "MERN-React-Finance",
    text: "MERN React Finance app built with Node.js, Express, and Material UI, featuring interactive dashboard charts and regression-based predictions for revenue, expenses, and profit trends, analyzed daily or yearly for better financial insights. 🚀",
  },
];
