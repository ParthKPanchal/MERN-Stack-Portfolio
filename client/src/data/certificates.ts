type Certificate = {
  id: number;
  title: string;
  provider: string;
  duration: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack (MERN) Web Development",
    provider: "Internshala Trainings",
    duration: "Jul 2022 – Jul 2023",
  },

  {
    id: 2,
    title: "Angular Development",
    provider: "Internshala Trainings",
    duration: "Nov 2024 – Dec 2024",
  },

  {
    id: 3,
    title: "WordPress Development",
    provider: "Internshala Trainings",
    duration: "Dec 2025 – Jan 2026",
  },
];

export default certificates;