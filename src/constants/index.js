import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Data Structures & Algorithms",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Gen AI",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "Cogvision.ai",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2020 - Present",
    points: [
      "Strategic IT Professional with over 4 years of experience in Software Development and writing high quality code to program complete applications.",
      "Designing detailed technical components utilizing high- level architecture, design patterns and reusable code, considering real time constraints.",
      "Design and implementation of Deep Learning Models with the help of Machine learning Technologies.",
      "Utilize NVIDIA's CUDA toolkit, libraries, and GPU architectures to maximize computational efficiency and performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - October 2020",
    points: [
      "Strategic IT Professional with over 4 years of experience in Software Development and writing high quality code to program complete applications.",
      "Built multiple features like permission based login. Reports for managers.",
      "Involved in the development life-cycle, from the Design phase until the implementation phase, testing, and deployment.",
      "Helped me to grow as a Technical person and getting familiarized with different technologies.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make an algorithm as beautiful as our product, but Manoj proved me wrong.",
    name: "Kumaran Arumugam",
    designation: "CEO & Founder",
    company: "Cogvision.ai",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met such an enthusiast developer who truly cares about the work.",
    name: "Akhil Upadhyaya",
    designation: "Technical Manager",
    company: "Cogvision.ai",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Good Developer & Good Team player.",
    name: "Naveen Srinivas",
    designation: "CTO & Co-Founder",
    company: "Cogvision.ai",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },

];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
