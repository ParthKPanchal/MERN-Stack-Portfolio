type Education = {
  id: number;
  degree: string;
  institute: string;
  duration: string;
  score: string;
  specialization?: string;
};

const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science (B.Sc.) in Information Technology",
    institute: "Sheth L.U.J & Sir M.V. College, Mumbai",
    duration: "2019 – 2023",
    score: "CGPA: 7.7",
    specialization: "Information Technology",
  },
];

export default education;