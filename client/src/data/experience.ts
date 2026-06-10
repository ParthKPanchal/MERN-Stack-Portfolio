type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  technologies: string[];
  points: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Developer",
    company: "Crayon Infotech",
    location: "Mumbai, Maharashtra",
    duration: "Sep 2025 – Apr 2026",
    technologies: [
      "React.js",
      "PHP",
      "MySQL",
      "JavaScript",
      "WordPress",
      "Git",
    ],
    points: [
      "Developed responsive web applications and business websites using HTML, CSS, JavaScript, PHP and MySQL.",
      "Delivered multiple live client projects across healthcare, IT services and business domains.",
      "Built reusable UI components and optimized website performance for better user experience.",
      "Integrated frontend applications with backend systems and REST APIs.",
      "Collaborated with designers and stakeholders to deliver production-ready solutions.",
    ],
  },

  {
    id: 2,
    role: "Frontend Developer",
    company: "Ajay Infotech",
    location: "Mumbai, Maharashtra",
    duration: "May 2025 – Aug 2025",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
    ],
    points: [
      "Developed responsive websites and business solutions using HTML, CSS, JavaScript, PHP and MySQL.",
      "Created prototype and production-ready websites for client presentations.",
      "Implemented dynamic forms and interactive user interfaces.",
      "Improved responsiveness, usability and cross-browser compatibility.",
    ],
  },

  {
    id: 3,
    role: "Graphic Designer",
    company: "VSL Marine Technology Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    duration: "Aug 2023 – Apr 2025",
    technologies: [
      "Photoshop",
      "AutoCAD",
      "3DVista",
      "UI Design",
    ],
    points: [
      "Created interactive virtual tours using 3DVista for marine industry projects.",
      "Enhanced images and visual assets using Adobe Photoshop.",
      "Designed container ship blueprints and technical layouts using AutoCAD.",
      "Worked closely with development teams to improve visual presentation and user experience.",
    ],
  },

  {
    id: 4,
    role: "Executive Sales Manager",
    company: "Dream Properties",
    location: "Mumbai, Maharashtra",
    duration: "Sep 2017 – Jan 2021",
    technologies: [
      "Sales",
      "Communication",
      "Client Management",
    ],
    points: [
      "Managed client relationships and handled customer communications.",
      "Conducted negotiations and successfully managed sales processes.",
      "Developed strong problem-solving, presentation and interpersonal skills.",
    ],
  },
];

export default experiences;