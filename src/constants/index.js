import { meta, shopify, starbucks, tesla, ra, cb } from "../assets/images";
import {
  yelp,
  face,
  budget,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  c,
  python,
  java,
  crud,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: c,
    name: "C++",
    type: "General-Purpose",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "General-Purpose",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "General-Purpose",
  },
];

export const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Rising Arjun -> currently inactive",
    icon: ra,
    iconBg: "#accbe1",
    date: "June 2023 - July 2023",
    points: [
      "Developing and Maintaing Mega Metals website",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Teaching Assisstant",
    company_name: "Coding Blocks",
    icon: cb,
    iconBg: "#fbc3bc",
    date: "August 2024 - Now",
    points: [
      "Resolving doubts of students",
      "Curating assignments and problem setting",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Raman-Lamba/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/raman-lamba-55b17615a",
  },
];

export const projects = [
  {
    iconUrl: crud,
    theme: "btn-back-red",
    name: "CRUD",
    description: "CRUD Functionality using node, express, mongo, mongoose",
    link: "https://github.com/Raman-Lamba/crud",
  },
  {
    iconUrl: budget,
    theme: "btn-back-green",
    name: "Budget Tracker",
    description:
      "Made using vanilla js, It keeps track of your spendings using browser storage",
    link: "http://budgetraker.netlify.app/",
  },
  {
    iconUrl: face,
    theme: "btn-back-blue",
    name: "Face Recognition Attendance System",
    description:
      "Efficiently automates attendance tracking using Python-based facial recognition technology.",
    link: "https://github.com/Raman-Lamba/Face_Recognition_Attendance_System",
  },
  {
    iconUrl: yelp,
    theme: "btn-back-pink",
    name: "YelpCamp",
    description:
      "Builing a full stack application that has listing of various camps across United States to visit for adventure and holidays- in building",
    link: "https://github.com/Raman-Lamba/YelpCamp",
  },
];
