import { Experience, Project, SkillCategory, Publication, Achievement, Education } from './types';

export const SOCIALS = {
  email: "vikasmishra11e@gmail.com",
  phone: "8874815662",
  linkedin: "https://www.linkedin.com/in/vikas-mishra-b39b311b3",
  github: "https://github.com/vikasmishra16",
  location: "Mirzapur, Uttar Pradesh, India",
  resume: "/resume.pdf"
};

export const SUMMARY = "AI & ML–focused Computer Science student skilled in full-stack development, automation, and data-driven applications. Experienced in building production-grade scraping systems, deep learning models, and cloud deployments.";

export const EXPERIENCE: Experience[] = [
  {
    role: "Intern (Scraping Engine)",
    company: "Publiq",
    period: "May '24 — Jul '24",
    description: [
      "Built a Puppeteer-based scraping engine for Amazon, Flipkart, Meesho, and Nykaa.",
      "Automated large-scale data extraction for products, pricing, and images.",
      "Deployed containerized scraping pipelines using AWS EC2, App Runner, and ECR."
    ]
  },
  {
    role: "Freelance Developer",
    company: "Holiday Itinerary Web Platform",
    period: "Jun '23 — Aug '23",
    description: [
      "Built a complete itinerary request platform for a travel advisory agency.",
      "Developed secure backend APIs using Node.js and Express with full CRUD support.",
      "Implemented JWT authentication for login, signup, and session handling."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Resume Screening System",
    tech: "RoBERTa, NER, Python",
    description: [
      "Developed H3S model combining RoBERTa embeddings + NER for hybrid scoring.",
      "Achieved 88.6% F1-score for automated resume ranking."
    ],
    link: "https://ieeexplore.ieee.org/document/11211694"
  },
  {
    title: "Neural Image Style Transfer",
    tech: "VGG19, PyTorch/TensorFlow, CV",
    description: [
      "Built NST model using VGG19 architecture with custom loss functions.",
      "Published research findings at ICoEIT 2025."
    ],
    link: "https://ieeexplore.ieee.org/document/11325535"
  },
  {
    title: "Weather Prediction Web App",
    tech: "ML, React, Flask",
    description: [
      "Designed ML models for predicting temperature, humidity, and rainfall based on historical data.",
      "Integrated into a responsive web interface."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "C/C++", "SQL"]
  },
  {
    category: "Frameworks",
    items: ["Node.js", "Flask", "React", "Express"]
  },
  {
    category: "ML / DL",
    items: ["Scikit-learn", "RoBERTa", "NLP", "Neural Networks", "Computer Vision"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS EC2", "App Runner", "ECR", "Docker"]
  },
  {
    category: "Tools & DB",
    items: ["Git", "Puppeteer", "Postman", "Jupyter", "MongoDB", "MySQL"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Optimized Neural Style Transfer with VGG19 for Real-Time Artistic Rendering",
    conference: "ICoEIT 2025",
    year: "2025",
    link: "https://ieeexplore.ieee.org/document/11325535?source=document-share&dld=Z21haWwuY29t"
  },
  {
    title: "A Hybrid Semantic-Structural Approach for Fair and Accurate Automated Resume Screening",
    conference: "IEEE ICCCA 2025",
    year: "2025",
    link: "https://ieeexplore.ieee.org/document/11211694?source=document-share&dld=Z21haWwuY29t"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Smart India Hackathon Finalist" },
  { title: "Research Paper Published", subtitle: "ICoEIT 2025 & IEEE ICCCA 2025" },
  { title: "3 Star in CodeChef" }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech CSE (AI & ML)",
    institution: "Amity University",
    score: "GPA: 7.86",
    year: "2025",
    location: "Lucknow, India"
  },
  {
    degree: "CBSE (XII)",
    institution: "Shemford School",
    score: "87.40%",
    year: "2020",
    location: "Mirzapur, India"
  }
];