// To add a new project, copy one block below and change the values.
// The My Portfolio page shows every project in this list automatically.
//
// github: link to the code (leave "" if it is not on GitHub)
// live:   link to the running website (leave "" until you deploy it, the button stays hidden)

export type Project = {
  title: string;
  description: string;
  kind: string;
  tags: string[];
  github: string;
  live: string;
  year?: number;
};

export const projects: Project[] = [
  {
    title: "Shah's Store",
    description: "An e-commerce website built end to end with the MERN stack.",
    kind: "Full Stack",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/shahmir12345/Shahs-store-FullStack",
    live: "https://shahs-store-full-stack-frontend.vercel.app/",
    year: 2026
  },
  {
    title: "SkillBridge",
    description:
      "A platform idea for exchanging skills with other people. Frontend built in React.",
    kind: "Frontend only",
    tags: ["React"],
    github: "https://github.com/shahmir12345/SkillBridge",
    live: "https://skill-bridge-flax-five.vercel.app/",
    year: 2026
  },
  {
    title: "Book Management System",
    description: "A system to manage books, built with PHP.",
    kind: "Backend",
    tags: ["PHP"],
    github: "", // not pushed to GitHub yet
    live: "",
    year: 2024
  },
  {
    title: "Django Sticky Notes",
    description: "A sticky notes website built with Django.",
    kind: "Full Stack",
    tags: ["Django", "Python"],
    github: "https://github.com/shahmir12345/Django-sticky-notes-website",
    live: "",
    year: 2025
  },
  {
    title: "Flipkart Clone",
    description:
      "A static clone of an online shopping homepage to practice layout and styling.",
    kind: "Frontend only",
    tags: ["HTML", "CSS"],
    github: "https://github.com/shahmir12345/Flipkart-Clone-Project",
    live: "https://shahmir12345.github.io/Flipkart-Clone-Project/",
    year: 2023
  },
];
