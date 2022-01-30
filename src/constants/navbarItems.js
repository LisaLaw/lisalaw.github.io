const navbarItems = [
  {
    label: "About",
    url: "#about",
    type: "link",
  },
  {
    label: "Projects",
    url: "#projects",
    type: "link",
  },
  {
    label: "Skills",
    url: "#skills",
    type: "link",
  },
  {
    label: "Download CV",
    url: "",
    type: "button",
  },
];

const skills = [
  {
    title: "Technical Skills",
    ref: 1,
    items: ["JS", "React", "Gatsby", "Python", "Django", "CircleCI"],
  },
  {
    title: "Top Soft Skills",
    ref: 2,
    items: [
      "Communication",
      "Leadership",
      "Project Management",
    ] /*put presentations in projects*/,
  },
  {
    title: "Language Skills",
    ref: 3,
    items: [
      "English - native",
      "German - native",
      "Spanish - advanced",
      "French - intermediate",
    ],
  },
];

export { navbarItems, skills };
