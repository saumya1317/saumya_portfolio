const navLinks = [
  { name: "Projects", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Techstack", link: "#logos" },
  
];

const words = [
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "AI", imgPath: "/images/ai.png" },
  { text: "Ideas", imgPath: "/images/ai.png" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "AI", imgPath: "/images/ai.png" },
  { text: "Ideas", imgPath: "/images/ai.png" }
];

const counterItems = [
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 150, suffix: "+", label: "Coding Problems Solved" },
  { value: 3, suffix: "+", label: "Hackathons Participated" },
  { value: 3, suffix: "+", label: "AI Tools Deployed" },
];

const logoIconsList = [
  { name: "C++", imgPath: "/images/c++.png" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "SQL", imgPath: "/images copy/logos/sql.png" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
  { name: "HTML", imgPath: "/images/html.png "},
  { name: "CSS", imgPath: "/images/css.png" },
  { name: "js", imgPath: "/images/js.png" },
  { name: "Image Tools", imgPath: "/images copy/logos/dl.png"},
  
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solving",
    desc: "Skilled in tackling algorithmic challenges and building efficient solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Team Collaboration",
    desc: "Active contributor in team-based projects and national-level hackathons.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Consistent in meeting project deadlines with high-quality code and documentation.",
  },
  {
    imgPath: "/images/learning.png",
    title: "Quick Learner",
    desc: "Adaptable and always eager to learn new technologies and frameworks efficiently.",
  },
  {
    imgPath: "/images/debug.png",
    title: "Debugging Expertise",
    desc: "Strong debugging skills and proficiency in identifying and resolving code issues quickly.",
  }
];

const techStackImgs = [
  { name: "React Developer", imgPath: "/images/logos/react.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Database Management", imgPath: "/images/logos/mysql.png" },
  { name: "AI/ML Enthusiast", imgPath: "/images/logos/openai.png" },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "AI/ML Enthusiast",
    modelPath: "/models/python-transformed.glb",
    scale: 0.1,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Built real-time parking detection system using YOLO + OpenCV with live status dashboard integration.",
    imgPath: "/images/project2.png",
    logoPath: "/images/logos/git.svg",
    title: "Parking monitoring system",
    date: "May 2024 - Present",
    responsibilities: [
      "Used OpenCV and YOLO for object detection.",
      "Integrated MySQL backend with Node.js server.",
      "Created dashboard with alerts and live updates.",
      "Integrated Razorpay wallet for parking payments.",
    ],
  },
  {
    review:
      "Designed and deployed an AI mock interview tool using OpenAI, FastAPI, and React.",
    imgPath: "/images/project1.png",
    logoPath: "/images copy/ai.png",
    title: "AI mock interview",
    date: "April 2025 - Present",
    responsibilities: [
      "Implemented dynamic QnA generator using LangChain and OpenAI.",
      "Deployed tool with Vercel and integrated voice input/output.",
      "Used FastAPI to serve backend logic efficiently.",
    ],
  },
  {
    review:
      "Developed a secure full-stack travel booking platform with authentication and feedback features.",
    imgPath: "/images/project3.png",
    logoPath: "/images/logos/git.svg",
    title: "Full Stack website",
    date: "March 2025 - Present",
    responsibilities: [
      "Built frontend in React, backend in Express.",
      "Integrated MongoDB and JWT-based authentication.",
      "Designed REST APIs for scalable backend interaction.",
    ],
  },
];

const expLogos = [
  { name: "iiit-bhagalpur", imgPath: "/images/logos/iiit-bhagalpur.png" },
  { name: "openai", imgPath: "/images/logos/openai.png" },
  { name: "github", imgPath: "/images/logos/github.png" },
];

const testimonials = [
  {
    name: "SIH Jury",
    mentions: "@sih2025",
    review:
      "Saumya’s team delivered an AI-based prototype that exceeded our expectations in quality and innovation. Truly a rising talent in the tech space.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Club Mentor",
    mentions: "@iiitbh-codingclub",
    review:
      "A consistent performer in contests and projects. Saumya's ability to grasp complex concepts and apply them effectively makes her a standout contributor.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  { name: "linkedin",url:"https://www.linkedin.com/in/saumya-rai-5829b0285", imgPath: "/images/linkedin.png" },
  { name: "github",url:"https://github.com/saumya1317", imgPath: "/images/github.png " },
  { name: "leetcode",url:"https://leetcode.com/u/saumya131725/" ,imgPath: "/images/leetcode.png" },
  { name: "email",url:"mailto:saumya131725@gmail.com", imgPath: "/images/email.png" },
];

export {
  navLinks,
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
};
