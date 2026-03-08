import { Experience, Project, SkillCategory, Publication, Achievement, Education } from './types';

export const SOCIALS = {
  email: "vikasmishra11e@gmail.com",
  phone: "8874815662",
  linkedin: "https://www.linkedin.com/in/vikas-mishra-b39b311b3",
  github: "https://github.com/vikasmishra16",
  portfolio: "https://vikas-mishra-portfolio-website.vercel.app",
  location: "Mirzapur, Uttar Pradesh, India",
  resume: "/resume.pdf"
};

export const SUMMARY = "Final-year B.Tech (AI & ML) student with 2 peer-reviewed IEEE publications, a Smart India Hackathon Finalist title, and production AWS deployment experience. Built AI-powered desktop apps in Rust + Tauri, deployed ML pipelines on cloud, and published research in NLP and Computer Vision.";

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Publiq (B2B e-commerce intelligence startup)",
    period: "May 2024 — Jul 2024",
    description: [
      "Built a Puppeteer-based scraping engine for Amazon, Flipkart, Meesho, and Nykaa — extracting 50,000+ product records (pricing, images, metadata) per daily run.",
      "Automated the full data extraction pipeline end-to-end, reducing manual collection effort by ~90% and cutting turnaround from days to minutes.",
      "Containerized and deployed scraping pipelines on AWS EC2, App Runner, and ECR using Docker — zero-downtime production deployments."
    ]
  },
  {
    role: "Freelance Backend Developer",
    company: "Holiday Itinerary Platform (Travel advisory client)",
    period: "Jun 2023 — Aug 2023",
    description: [
      "Architected and shipped a complete itinerary request platform using Node.js and Express — enabled the agency to handle 100% of client bookings digitally.",
      "Implemented JWT-based authentication (sign-up, login, session management) with full CRUD REST APIs, eliminating manual coordination overhead."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "OpenClaw Desktop — AI Automation Assistant",
    tech: "Rust, Tauri 2.0, React 19, TypeScript, Playwright, Ollama, SQLite",
    description: [
      "Built a cross-platform desktop app (Rust 23% · TypeScript 59% · JS 18%) using Tauri 2.0 that lets users automate LinkedIn actions via a natural language chat interface.",
      "Engineered a smart LLM router supporting local Ollama/Llama-3:8b and cloud OpenAI GPT-4o-mini with automatic switching — zero API key required for fully offline usage.",
      "Integrated Playwright-based real Chrome automation with persistent login sessions, a Safe Mode preview system, and a tokio-cron-scheduler backend for recurring tasks."
    ],
    link: "https://github.com/vikasmishra16/openclaw-desktop"
  },
  {
    title: "AI-Powered Resume Screening System (H3S Model)",
    tech: "Python, RoBERTa, spaCy NER, Scikit-learn, Flask",
    description: [
      "Designed H3S model combining RoBERTa sentence embeddings (semantic layer) + spaCy NER (structural layer) for hybrid candidate scoring — 88.6% F1-score, +14pp over keyword-only baselines.",
      "Built end-to-end pipeline: PDF/DOCX parsing → skill & entity extraction → weighted ranking → Flask REST API for ATS integration.",
      "Peer-reviewed and published at IEEE ICCCA 2025."
    ],
    link: "https://ieeexplore.ieee.org/document/11325535"
  },
  {
    title: "Neural Style Transfer with VGG19",
    tech: "Python, PyTorch, TorchVision, VGG19, Google Colab",
    description: [
      "Implemented NST pipeline extracting feature maps from VGG19 layers {0, 5, 10, 19, 28}; content loss via MSE on feature maps, style loss via Gram matrices — Adam optimizer, lr 0.001.",
      "Tuned alpha/beta hyperparameters for content-style trade-off; achieved near-real-time artistic rendering with perceptually convincing style blending.",
      "Peer-reviewed and published at ICoEIT 2025 (IEEE)."
    ],
    link: "https://ieeexplore.ieee.org/document/11211694"
  },
  {
    title: "Crop Yield & Fertilizer Predictor",
    tech: "Python, Scikit-learn, XGBoost, LightGBM, Gradio, Docker",
    description: [
      "Built regression pipeline taking soil parameters (pH, N, P, K), weather features and crop type as inputs — evaluated Scikit-learn, XGBoost, and LightGBM; selected best model via cross-validation.",
      "Deployed with an interactive Gradio UI for zero-friction access by non-technical users; Dockerfile included for containerized production deployment."
    ],
    link: "https://github.com/vikasmishra16/crop-yield-predictor"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Rust", "C/C++", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Node.js", "Flask", "React", "Tauri", "Express", "Gradio", "Puppeteer", "Playwright"]
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "RoBERTa / Transformers", "spaCy", "NLP", "NER", "Computer Vision", "Neural Style Transfer", "Ollama", "OpenAI API"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS EC2", "App Runner", "ECR", "Docker", "Git"]
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "MySQL", "SQLite", "Postman", "Jupyter", "VS Code"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Optimized Neural Style Transfer with VGG19 for Real-Time Artistic Rendering",
    conference: "ICoEIT 2025 (IEEE)",
    year: "2025",
    link: "https://ieeexplore.ieee.org/document/11211694"
  },
  {
    title: "A Hybrid Semantic-Structural Approach for Fair and Accurate Automated Resume Screening",
    conference: "IEEE ICCCA 2025",
    year: "2025",
    link: "https://ieeexplore.ieee.org/document/11325535"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Smart India Hackathon Finalist", subtitle: "National-level government hackathon" },
  { title: "2× IEEE Published Researcher", subtitle: "ICoEIT 2025 & IEEE ICCCA 2025" },
  { title: "CodeChef 3-Star", subtitle: "Consistent competitive programming performance" }
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
