import {
  mobile,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  lms,
  cato,
  court,
  aws,
  chakra,
  native,
  edtech,
  portfolio

} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work", 
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "Chakra-UI",
    icon: chakra,
  },
  {
    name: "React-Native",
    icon: native,
  },

];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "District Court Durg",
    icon: court,
    iconBg: "white",
    date: "Sept 2022 - Feb 2023",
    points: [
      "Developed a standalone, offline application with pagination, backup, and export-to-CSV features.",
      "Implemented form validation and filtering by date, stock, name, and department.",
      "Created user-friendly pop-ups and designed an easy-to-use interface.",
      "Collaborated with a team to deliver the project on time and within budget.",
    ],
  },
];

const projects = [
  {
    name: "Inventory/Library Control System",
    description:
      "The web based application provided a user-friendly interface for managing library inventory, including features such as form validation, filtering, backup, and export-to-CSV.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express-js",
        color: "text-orange-600",
      },
      {
        name: "bootstrap",
        color: "text-cyan-600",
      },
    ],
    image: lms,
    live_link: "#",
    source_code_link: "https://github.com/Hariharanreddy/Item-manager-COURT-PROJECT",
  },
  {
    name: "Knowledge Nexus - Edtech Platform",
    description:
      "MERN stack edtech platform with payment integration, admin dashboard, debouncing for improving search performance, responsiveness and authentication features for seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "text-purple-400",
      },
      {
        name: "chakra-ui",
        color: "text-pink-400",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "razorpay",
        color: "text-teal-600",
      },
    ],
    image: edtech,
    live_link: "https://knowledgenexus.vercel.app/",
    source_code_link: "https://github.com/Hariharanreddy/KnowledgeNexusClient",
  },
  {
    name: "Cato App - Feline and Needs",
    description:
      "CATO has the perfect feline companion for you. With user-friendly navigation and convenient payment options, finding and adopting your new furry friend has never been easier.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "text-purple-400",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express-js",
        color: "text-white-600",
      },
      {
        name: "stripe",
        color: "text-teal-600",
      },
    ],
    image: cato,
    live_link: "https://expo.dev/@hariharan_reddy/cato-ecommerce",
    source_code_link: "https://github.com/Hariharanreddy/Cato-frontend",
  },
  {
    name: "3D-Portfolio Website",
    description:
      "A Responsive 3D portfolio website, built in Three.js, React.js, and Framer Motion. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "text-purple-400",
      },
      {
        name: "three-js",
        color: "text-pink-400",
      },

    ],
    image: portfolio,
    live_link: "https://hariharan-reddy-portfolio.vercel.app/",
    source_code_link: "https://github.com/Hariharanreddy/My-3D-Portfolio",
  }
];

const testimonials = [
  {
    testimonial:
      "Coming Soon",
    name: "xxx",
    designation: "xxx",
    company: "xxx",
    image: "",
  },

];

export { services, technologies, experiences, testimonials, projects };