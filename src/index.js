import img_muhafiz from "./assets/projects/fixed/muhafiz.webp";
import img_talktotext from "./assets/projects/fixed/text.webp";
import img_multivox from "./assets/projects/fixed/movie.webp";
import img_geospeak from "./assets/projects/fixed/translate.webp";
import img_docudraft from "./assets/projects/fixed/chat.webp";
import img_giveaid from "./assets/projects/fixed/ngo1.webp";
import img_cineflix from "./assets/projects/fixed/movie1.webp";
import img_cosmetics from "./assets/projects/fixed/cosmetic1.webp";
import img_hrgenix from "./assets/projects/fixed/hr1.webp";
import img_fintrack from "./assets/projects/fixed/expense1.webp";
import img_drivexchange from "./assets/projects/fixed/car1.webp";
import img_tripbudgeter from "./assets/projects/fixed/trip1.webp";
import img_laptopharbour from "./assets/projects/fixed/laptop1.webp";
import img_dineflow from "./assets/projects/fixed/restaurant1.webp";
import img_luxurystay from "./assets/projects/fixed/hotel.webp";
import { FaMobile, FaBrain, FaCode, FaUtensils, FaRobot } from "react-icons/fa";


export const HERO_CONTENT = `A full-stack developer who's genuinely excited about AI. I build products that turn models into tools people actually use — from real-time AI dubbing to a crime-safety platform built on a 100K-record dataset I created.`;


export const ABOUT = {
  intro: [
    "I'm Rabia — a curious, hands-on developer who loves building things that feel a little bit like magic.",
    "I'm drawn to AI because it lets me solve problems that weren't solvable a few years ago. I'm happiest experimenting with a new model, API, or idea and turning it into something people can actually use.",
  ],
  focus: [
    { title: "Full-Stack", text: ".NET, Angular, React, Node.js, Flask" },
    { title: "AI & Data", text: "LLMs, speech, datasets & pipelines" },
    { title: "Mobile", text: "Cross-platform apps with Flutter" },
    { title: "Databases", text: "SQL Server, MongoDB, MySQL" },
  ],
  highlights: [
    "Nominated for HBL P@SHA ICT Awards 2025 — Muhafiz",
    "Selected for Aptech Vision 2025 — Multivox",
    "Published a 100K-record crime dataset on Kaggle",
  ],
  now: "Going deeper into AI — building with LLMs, speech, and data pipelines, and looking for roles where I work on AI products every day.",
};

export const EDUCATION = [
  {
    degree: "Bachelor of Science, Computer Science",
    institution: "Dawood University of Engineering and Technology",
    timeline: "Graduated: April 2025",
    courses: ["Data Structures", "Algorithms", "Computer Networks", "Operating Systems", "Database Management Systems"],
    description: "Completed my Bachelor of Science in Computer Science with a strong foundation in core computer science, software engineering, and database systems. My final year project, Muhafiz, was nominated for the HBL P@SHA ICT Awards 2025."
  },
  {
    degree: "Advanced Diploma in Software Engineering (ADSE II)",
    institution: "Aptech Learning Center",
    timeline: "Graduated: Oct 2025",
    courses: ["Frontend Development","Mobile Development","Backend Development","Database Management","MERN Stack","Data Science","AI","Machine Learning"],
    description: "Completed the Advanced Diploma in Software Engineering (ADSE II), covering frontend, backend, and mobile development, databases, and AI/ML. Multivox, built during the program, was selected for Aptech Vision 2025."
  },
];


export const EXPERIENCE = [
  {
    year: "Nov 2025 - Present",
    role: "Junior Technology Consultant",
    company: "CipherTronix",
    description:
      "Full stack engineer on STOS, a terminal and cargo management platform deployed across port terminals in Pakistan.",
    highlights: [
      "Engineered financial reports and features for the Accounts module using .NET MVC and SQL Server, including AR/AP aging, customer/vendor inquiry, and profit & loss reports.",
      "Wrote data logic using stored procedures, LINQ, and raw SQL to power billing, invoicing, and financial reporting workflows.",
      "Built the Procurement module frontend in Angular (TypeScript), integrating RESTful APIs developed with ASP.NET Web API to support requisitions, RFQ comparison, and purchase order workflows.",
      "Contributed full-stack development on the Logistics module — order creation, gate movement tracking, and real-time monitoring workflows using .NET MVC and SQL Server.",
      "Delivered across three modules (Accounts, Procurement, Logistics) spanning .NET and Angular, adapting quickly as project needs evolved.",
    ],
    technologies: [".NET MVC", "ASP.NET Web API", "Angular", "TypeScript", "SQL Server", "LINQ", "Stored Procedures"],
  },
  {
    year: "Oct 2025 - Nov 2025",
    role: ".NET Developer Intern",
    company: "CipherTronix",
    description:
      "Analyzed database schemas, EDI workflows, and multi-database operations for enterprise financial and cargo management systems.",
    highlights: [
      "Installed and tested application builds on IIS, documenting modules, pages, and system functionality for internal reference.",
    ],
    technologies: [".NET", "SQL Server", "EDI", "IIS"],
  },
];

export const HACKATHONS = [
    {
    title: "SMEC Hackathon – Sir Syed University",
    link: "https://github.com/Rabia303/SMEC_Hackathon_CharityLoop_v1",
    role: "Full Stack Developer",
    description:
      "Created Clothes Donation Platform, connecting donors with NGOs via a responsive full-stack web app.",
    icon: FaCode,
    technologies: [".NET MVC Core", "Bootstrap", "SSMS"],
  },
  {
    title: "ACM MAJU Hackathon",
    link: "https://github.com/Rabia303/ACM_MAJU-Hackathon-FullStackFrenzy",
    role: "Backend Developer",
    description:
      "Built Restaurant Management System to streamline menu, orders, and staff management efficiently.",
    icon: FaUtensils,
    technologies: [".NET MVC Core", "Bootstrap", "SSMS"],
  },
  {
    title: "TechWiz 5 – Mobile Development",
    link: "https://github.com/Rabia303/tripBudget",
    role: "Backend Developer",
    description:
      "Built Trip Budgeter, a mobile app to manage travel expenses with real-time syncing and cloud storage.",
    icon: FaMobile,
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "TechWiz 6 – Generative AI",
    link: "https://github.com/Rabia303/TalkToTextPro-GenAI-Project",
    role: "Backend Developer",
    description:
      "Developed Talk-to-Text AI Web App, enabling speech-to-text and AI-powered interactive conversations.",
    icon: FaBrain,
    technologies: ["React (Vite)", "Flask", "MongoDB Atlas"],
  },

  {
    title: "Tech Olympics – Season 01",
    role: "Prompt Engineering Challenge",
    description:
      "Tasked with crafting a startup business proposal in Education/Finance using advanced prompt engineering. Explored how prompts guide AI to produce structured reports with market analysis, growth potential, and innovation strategy.",
    technologies: ["Prompt Engineering", "AI"],
    icon: FaBrain,
  },
  {
    title: "Tech Olympics – Season 02",
    link: "https://github.com/Rabia303/AI-CHAT-BOT",
    role: "Generative AI Medical Chatbot",
    description:
      "Built a GenAI-powered medical chatbot featuring PDF export, voice input, email sharing (Nodemailer), and Gemini API integration. Developed frontend in React (Vite) and backend in Express.js. Explored enhancements like emoji support and WhatsApp sharing.",
    technologies: ["React (Vite)", "Express.js", "Gemini API", "Nodemailer"],
    icon: FaRobot,
  },
  {
    title: "Tech Olympics – Season 03",
    link: "https://github.com/Rabia303/TechOlymics-S3-MobileDev",
    role: "Mobile App Development",
    description:
      "Completed a 2-hour coding challenge to build a Workshop Registration App with student and admin modules. Features included workshop CRUD, live dashboard, secure login, and validation. Designed with MVC architecture and Provider for state management.",
    technologies: ["Flutter", "Dart", "Provider", "MVC Architecture"],
    icon: FaMobile,
  },
];

export const PROJECTS = [
  {
  title: "Muhafiz: Karachi Crime Zone & Safety Platform",
    github: "https://github.com/Rabia303/final-year-project-muhafiz",
    badge: "Nominated · HBL P@SHA ICT Awards 2025",
    stats: [
      { value: "100K+", label: "Records" },
      { value: "18", label: "Towns" },
      { value: "170+", label: "Subdivisions" },
    ],
    category: "AI",
    image: img_muhafiz,
  description:
    "Developed a full-stack safety platform for urban crime awareness with zone-based risk mapping, incident reporting, and safer route suggestions powered by a custom risk algorithm. Built a 100,000+ record dataset via web scraping, geocoding, and severity tagging, and delivered secure dashboards, JWT authentication, an interactive forum, and Power BI analytics for insights.",
  technologies: ["React (Vite)", "Node.js", "Express", "Flask", "MongoDB"],
},
  {
  title: "TalkToText Pro: AI-Powered Meeting Notes & Subtitles",
    github: "https://github.com/Rabia303/TalkToTextPro-GenAI-Project",
    category: "AI",
    image: img_talktotext,
  description:
    "Created a full-stack AI app to process meeting audio/video (uploads or links) into transcripts, summaries, and subtitles using Gemini AI. Implemented secure multi-auth (GitHub OAuth, Google Sign-In, OTP), real-time progress tracking, and multi-format export (PDF, DOCX, SRT), handling 30-min meetings in under 2 minutes.",
  technologies: ["Python", "Flask", "React.js", "MongoDB Atlas"],
},
  {
  title: "Multivox: Instant AI Dubbing & Subtitling Platform",
    github: "https://github.com/Rabia303/Multivox-AI-ML-Project",
    badge: "Selected · Aptech Vision 2025",
    category: "AI",
    image: img_multivox,
  description:
    "Engineered an AI-powered platform for real-time dubbing and subtitling via URL or file upload. Integrated Whisper for transcription, gTTS for speech synthesis, and built a processing pipeline for transcription, translation, audio generation, and perfect resync with original video.",
  technologies: ["React (Vite)", "Flask", "OpenAI Whisper"],
},
  {
    title: "Give-AID: NGO Management System",
    github: "https://github.com/Rabia303/NGO-WEBSITE-USING-DOTNET-MVC-CORE-AND-SQL",
    badge: "Project of the Month · Aptech",
    category: "Web",
    image: img_giveaid,
    description:
      "Engineered a web application for NGOs to efficiently manage operations through distinct Admin and User modules. Designed the architecture to support seamless content management and real-time user interaction. Developed with .NET MVC Core for scalable backend operations and SQL for robust data handling.",
    technologies: [".NET MVC Core", "SQL"],
  },
  {
    title: "CineFlix: Customizable Movie Streaming Website",
    github: "https://github.com/Rabia303/CineFlix-movie-Streaming-Website-using-php-and-mysql",
    category: "Web",
    image: img_cineflix,
    description:
      "Developed an interactive platform for movie enthusiasts with features like detailed exploration, trailer viewing, and user review management. Built a dynamic admin dashboard enabling content customization and advanced user analytics. Crafted with PHP and MySQL for an integrated backend system.",
    technologies: ["PHP", "MySQL"],
  },
  {
    title: "E-commerce Website for Cosmetics and Jewelry Business",
    github: "https://github.com/Rabia303/Jewelery-and-cosmetics-website",
    category: "Web",
    image: img_cosmetics,
    description:
      "Developed a dynamic e-commerce website enabling the cosmetics and jewelry business to expand.Implemented user-friendly features such as product browsing,shopping basket management, and order finalization. Enhanced the user experience by allowing clientsto input their details, search products, and facilitated administrators with inventory management, database maintenance, and report generation functionalities.",
    technologies: ["PHP", "MySQL","Bootstrap"],
  },
  {
    title: "HRGenix: Streamlined Employee Management System",
    github: "https://github.com/Rabia303/Employee-Management-System",
    category: "Web",
    image: img_hrgenix,
    description:
      "Built a desktop application designed to simplify HR workflows, including employee record management, payroll automation, and expense tracking. Implemented role-based access and detailed reporting capabilities with C# and SQL for reliability.",
    technologies: ["C#", "SQL"],
  },
  {
    title: "FinTrack: Real-Time Expense Tracker App",
    github: "https://github.com/Rabia303/expense-tracker",
    category: "Mobile",
    image: img_fintrack,
    description:
      "Developed a mobile application to simplify financial management by categorizing and tracking expenses. Implemented Firebase for real-time synchronization and secure data storage. Leveraged Flutter to create a visually appealing and seamless user interface.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "DriveXChange: Car Rental Management System",
    github: "https://github.com/Rabia303/DriveXChange-CarRentalWebsite",
    category: "Web",
    image: img_drivexchange,
    description:
      "Engineered a car rental platform offering vehicle browsing, real-time bookings, and an admin dashboard for rental and user management. Designed a secure, scalable backend with PHP and MySQL to support high volumes of traffic.",
    technologies: ["PHP", "MySQL","Bootstrap"],
  },
  {
    title: "TripBudgeter: Travel Budget Optimization App",
    github: "https://github.com/Rabia303/tripBudget",
    category: "Mobile",
    image: img_tripbudgeter,
    description:
      "Made both User and Admin Panel.Built a cross-platform travel budgeting app with advanced trip management and real-time expense tracking. Utilized Flutter to craft a polished UI and Firebase for a secure backend infrastructure.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Laptop Harbour: E-Commerce App for Tech Products",
    github: "https://github.com/Rabia303/Laptop-Harbour",
    category: "Mobile",
    image: img_laptopharbour,
    description:
      "Developed a modern e-commerce app for laptops, featuring intuitive search, wishlist functionality, and a streamlined checkout experience. Integrated Firebase Firestore for real-time data and scalable performance.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "DineFlow: Comprehensive Restaurant Management Solution",
    category: "Web",
    image: img_dineflow,
    description:
      "Created a full-stack restaurant management system with robust Admin and User panels. Implemented features like menu management, real-time order tracking, and analytics dashboards. Leveraged .NET MVC Core for backend efficiency and SQL for database reliability.",
    technologies: [".NET MVC Core", "SQL","Bootstrap"],
  },
  {
  title: "GeoSpeak: GenAI Multilingual Translation Platform",
    github: "https://github.com/Rabia303/GeoSpeak_GenAi-Project",
    category: "AI",
    image: img_geospeak,
  description:
    "Developed a multilingual web app supporting text and image translation across multiple languages. Features include conversation mode, translation history, and copy-to-clipboard with a responsive interface for smooth user experience.",
  technologies: ["React (Vite)", "Flask", "Gemini AI"],
},
  {
  title: "LuxuryStay: Hotel & Restaurant Management System",
    github: "https://github.com/Rabia303/HOTEL-BOOKING-MERN-STACK",
    category: "Web",
    image: img_luxurystay,
  description:
    "Built a hotel and restaurant management system using the MERN stack with features like booking, billing automation, and customer feedback. Integrated scalable REST APIs and role-based access for Admin and User dashboards, ensuring secure real-time reservation management.",
  technologies: ["MongoDB", "Express", "React", "Node.js"],
},
  {
  title: "DocuDraft Pro: AI-Powered Document Drafting Assistant",
    github: "https://github.com/Rabia303/DocuDraft-Pro---Ticket-to-Techwiz",
    category: "AI",
    image: img_docudraft,
  description:
    "Designed an AI-powered drafting assistant for business proposals, contracts, and reports with domain-specific templates, compliance checks, and rich-text editing. Enabled AI chat assistance, plagiarism detection, and export in PDF/DOCX/HTML formats with team collaboration support.",
  technologies: ["React (Vite + JSX)", "Flask", "MongoDB", "Gemini API"],
},
];


export const CONTACT = {
  address: "FB Area, Karachi",
  phoneNo: "0324-1458873",
  email: "rabiaimtiaz203@gmail.com",
};
