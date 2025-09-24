import project1 from "../src/assets/projects/ngo1.jpg";
import project2 from "../src/assets/projects/movie1.png";
import project3 from "../src/assets/projects/cosmetic1.png";
import project4 from "../src/assets/projects/calculator.jfif";
import project5 from "../src/assets/projects/hr1.png";
import project6 from "../src/assets/projects/expense1.jfif";
import project7 from "../src/assets/projects/car1.jpg";
import project8 from "../src/assets/projects/trip1.png";
import project9 from "../src/assets/projects/laptop1.png";
import project10 from "../src/assets/projects/restaurant1.png";
import project11 from "../src/assets/projects/bmi2.jpg";
import project16 from "../src/assets/projects/hotel.webp";
import project17 from "../src/assets/projects/chat.png";
import project15 from "../src/assets/projects/translate.webp";
import project12 from "../src/assets/projects/muhafiz.jpg";
import project13 from "../src/assets/projects/text.png";
import project14 from "../src/assets/projects/movie.webp";
import { FaMobile, FaBrain, FaCode, FaUtensils } from "react-icons/fa";


export const HERO_CONTENT = `Driven by curiosity and a passion for innovation, I am a full-stack developer with experience in web, mobile, and AI-powered applications. Proficient in MERN, .NET Core, Flutter, and Flask, I specialize in creating scalable and user-friendly solutions that turn complex problems into seamless experiences. My focus is on delivering value through clean code, intuitive design, and reliable systems that make a real impact.`;


export const ABOUT_TEXT = `👩‍💻 Who I Am
I'm Rabia Imtiaz, a passionate final-year Computer Science student and aspiring full-stack engineer. With a strong foundation in software engineering and real-world development, I aim to transform creative ideas into impactful solutions using modern technologies.

📱 What I Do
Full-Stack Development: Experienced in MERN, .NET Core, and Flask for building scalable web apps.  
Mobile Development: Building intuitive apps with Flutter.  
Data & AI: Skilled in creating large-scale datasets, integrating AI APIs, and applying machine learning for real-world use cases.  
Cross-Tech Expertise: Versatile in both frontend and backend stacks, from React and Node.js to SQL and MongoDB.  

🎯 Achievements & Recognitions
Nominated for HBL P@SHA ICT Awards 2025 for Muhafiz, my Karachi Crime Safety & Awareness Platform.  
Selected for Aptech Vision 2025 for Multivox, an AI-powered instant dubbing and subtitling platform.  
Participated in several Generative AI competitions, continuously improving my expertise in building innovative AI-driven applications.  

🚀 What I'm Working On
Currently, I'm focusing on expanding my skills in Big Data and Hadoop, while working towards my long-term goals of launching a startup, securing a role in a big tech company, and consistently learning new technologies to improve my existing projects and create new ones.  
`;

export const EDUCATION = [
  {
    degree: "Bachelor of Science, Computer Science",
    institution: "Dawood University of Engineering and Technology",
    timeline: "Expected Graduation: 2025",
    courses: ["Data Structures", "Algorithms", "Computer Networks", "Operating Systems", "Database Management Systems"],
    description: "I am a final year student of cs trying to learn new things and improve my skills and land an internship. I am currently pursuing my Bachelor of Science in Computer Science at Dawood University of Engineering and Technology. I have a strong foundation in computer science and am eager to apply my skills to real-world problems. "
  },
  {
    degree: "Advanced Diploma in Software Engineering (ADSE II)",
    institution: "Aptech Learning Center",
    timeline: "6th Semester | Expected Graduation: 2025",
    courses: ["Frontend Developement","Mobile Developement","Backend Developement","Database Management","MERN Stack","Data Science","AI","Machine Learning"],
    description: "I am a dedicated and hardworking student with a passion for technology. I am currently pursuing my Advanced Diploma in Software Engineering (ADSE II) at Aptech Learning Center. I have a strong foundation in software development and am eager to apply my skills to real-world problems. I am a quick learner and am always looking for ways to improve my skills."
  },
  {
    degree: "Intermediate in Pre-Engineering",
    institution: "Usman Public School, Campus 1",
    timeline: "Graduation Date: 2021",

  },
  {
    degree: "Matric in Computer Science",
    institution: "Programmer Girls School, Campus 1",
    timeline: "Graduation Date: 2019",
   
  },
];
export const HACKATHONS = [
  {
    title: "TechWiz 5 – Mobile Development",
    role: "Backend Developer",
    description:
      "Built Trip Budgeter, a mobile app to manage travel expenses with real-time syncing and cloud storage.",
    icon: FaMobile,
    link: "https://github.com/Rabia303/tripBudget",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "TechWiz 6 – Generative AI",
    role: "Backend Developer",
    description:
      "Developed Talk-to-Text AI Web App, enabling speech-to-text and AI-powered interactive conversations.",
    icon: FaBrain,
    link: "https://github.com/Rabia303/TalkToTextPro-GenAI-Project", 
    technologies: ["React (Vite)", "Flask", "MongoDB Atlas"],
  },
  {
    title: "SMEC Hackathon – Sir Syed University",
    role: "Full Stack Developer",
    description:
      "Created Clothes Donation Platform, connecting donors with NGOs via a responsive full-stack web app.",
    icon: FaCode,
    link: "https://github.com/Rabia303/SMEC_Hackathon_CharityLoop_v1", 
    technologies: [".NET MVC Core", "Bootstrap", "SSMS"],
  },
  {
    title: "ACM MAJU Hackathon",
    role: "Backend Developer",
    description:
      "Built Restaurant Management System to streamline menu, orders, and staff management efficiently.",
    icon: FaUtensils,
    link: "https://github.com/Rabia303/ACM_MAJU-Hackathon-FullStackFrenzy", 
    technologies: [".NET MVC Core", "Bootstrap", "SSMS"],
  },
];
export const PROJECTS = [
  {
    title: "Give-AID: NGO Management System",
    image: project1,
    description:
      "Engineered a web application for NGOs to efficiently manage operations through distinct Admin and User modules. Designed the architecture to support seamless content management and real-time user interaction. Developed with .NET MVC Core for scalable backend operations and SQL for robust data handling.",
    technologies: [".NET MVC Core", "SQL"],
    github: "https://github.com/Rabia303/NGO-WEBSITE-USING-DOTNET-MVC-CORE-AND-SQL",
  },
  {
    title: "CineFlix: Customizable Movie Streaming Website",
    image: project2,
    description:
      "Developed an interactive platform for movie enthusiasts with features like detailed exploration, trailer viewing, and user review management. Built a dynamic admin dashboard enabling content customization and advanced user analytics. Crafted with PHP and MySQL for an integrated backend system.",
    technologies: ["PHP", "MySQL"],
    github: "https://github.com/Rabia303/CineFlix-movie-Streaming-Website-using-php-and-mysql",
  },
  {
    title: "E-commerce Website for Cosmetics and Jewelry Business",
    image: project3,
    description:
      "Developed a dynamic e-commerce website enabling the cosmetics and jewelry business to expand.Implemented user-friendly features such as product browsing,shopping basket management, and order finalization. Enhanced the user experience by allowing clientsto input their details, search products, and facilitated administrators with inventory management, database maintenance, and report generation functionalities.",
    technologies: ["PHP", "MySQL","Bootstrap"],
    github: "https://github.com/Rabia303/Jewelery-and-cosmetics-website",
  },
  {
    title: "MetricMate: Responsive Metric Conversion App",
    image: project4,
    description:
      "Developed a fully responsive metric conversion tool supporting multiple units like length, volume, and temperature. Enhanced user engagement with Bootstrap styling and real-time JavaScript-based functionality. Focused on delivering a sleek and intuitive interface for users.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Rabia303/metric-conversion",
  },
  {
    title: "HRGenix: Streamlined Employee Management System",
    image: project5,
    description:
      "Built a desktop application designed to simplify HR workflows, including employee record management, payroll automation, and expense tracking. Implemented role-based access and detailed reporting capabilities with C# and SQL for reliability.",
    technologies: ["C#", "SQL"],
    github: "https://github.com/Rabia303/Employee-Management-System",
  },
  {
    title: "FinTrack: Real-Time Expense Tracker App",
    image: project6,
    description:
      "Developed a mobile application to simplify financial management by categorizing and tracking expenses. Implemented Firebase for real-time synchronization and secure data storage. Leveraged Flutter to create a visually appealing and seamless user interface.",
    technologies: ["Flutter", "Firebase"],
    github: "https://github.com/Rabia303/expense-tracker",
  },
  {
    title: "DriveXChange: Car Rental Management System",
    image: project7,
    description:
      "Engineered a car rental platform offering vehicle browsing, real-time bookings, and an admin dashboard for rental and user management. Designed a secure, scalable backend with PHP and MySQL to support high volumes of traffic.",
    technologies: ["PHP", "MySQL","Bootstrap"],
    github: "https://github.com/Rabia303/DriveXChange-CarRentalWebsite",
  },
  {
    title: "TripBudgeter: Travel Budget Optimization App",
    image: project8,
    description:
      "Made both User and Admin Panel.Built a cross-platform travel budgeting app with advanced trip management and real-time expense tracking. Utilized Flutter to craft a polished UI and Firebase for a secure backend infrastructure.",
    technologies: ["Flutter", "Firebase"],
    github: "https://github.com/Rabia303/tripBudget",
  },
  {
    title: "Laptop Harbour: E-Commerce App for Tech Products",
    image: project9,
    description:
      "Developed a modern e-commerce app for laptops, featuring intuitive search, wishlist functionality, and a streamlined checkout experience. Integrated Firebase Firestore for real-time data and scalable performance.",
    technologies: ["Flutter", "Firebase"],
    github: "https://github.com/Rabia303/Laptop-Harbour",
  },
  {
    title: "DineFlow: Comprehensive Restaurant Management Solution",
    image: project10,
    description:
      "Created a full-stack restaurant management system with robust Admin and User panels. Implemented features like menu management, real-time order tracking, and analytics dashboards. Leveraged .NET MVC Core for backend efficiency and SQL for database reliability.",
    technologies: [".NET MVC Core", "SQL","Bootstrap"],
  },
  {
    title: "BMI Calculator App",
    image: project11,
    description:
      "Built a BMI Calculator app with an intuitive interface for users to calculate their body mass index and receive health suggestions. Designed with Flutter to deliver a responsive UI and seamless navigation.",
    technologies: ["Flutter"],
    github: "https://github.com/Rabia303/bmi_calculator",
  },
  {
  title: "Muhafiz: Karachi Crime Zone & Safety Platform",
  image: project12,
  description:
    "Developed a full-stack safety platform for urban crime awareness with zone-based risk mapping, incident reporting, and safer route suggestions powered by a custom risk algorithm. Built a 100,000+ record dataset via web scraping, geocoding, and severity tagging, and delivered secure dashboards, JWT authentication, an interactive forum, and Power BI analytics for insights.",
  technologies: ["React (Vite)", "Node.js", "Express", "Flask", "MongoDB"],
  github: "https://github.com/Rabia303/final-year-project-muhafiz",
},

{
  title: "TalkToText Pro: AI-Powered Meeting Notes & Subtitles",
  image: project13,
  description:
    "Created a full-stack AI app to process meeting audio/video (uploads or links) into transcripts, summaries, and subtitles using Gemini AI. Implemented secure multi-auth (GitHub OAuth, Google Sign-In, OTP), real-time progress tracking, and multi-format export (PDF, DOCX, SRT), handling 30-min meetings in under 2 minutes.",
  technologies: ["Python", "Flask", "React.js", "MongoDB Atlas"],
  github: "https://github.com/Rabia303/TalkToTextPro-GenAI-Project",
},

{
  title: "Multivox: Instant AI Dubbing & Subtitling Platform",
  image: project14,
  description:
    "Engineered an AI-powered platform for real-time dubbing and subtitling via URL or file upload. Integrated Whisper for transcription, gTTS for speech synthesis, and built a processing pipeline for transcription, translation, audio generation, and perfect resync with original video.",
  technologies: ["React (Vite)", "Flask", "OpenAI Whisper"],
  github: "https://github.com/Rabia303/Multivox-AI-ML-Project",
},

{
  title: "GeoSpeak: GenAI Multilingual Translation Platform",
  image: project15,
  description:
    "Developed a multilingual web app supporting text and image translation across multiple languages. Features include conversation mode, translation history, and copy-to-clipboard with a responsive interface for smooth user experience.",
  technologies: ["React (Vite)", "Flask", "Gemini AI"],
  github: "https://github.com/Rabia303/GeoSpeak_GenAi-Project",
},

{
  title: "LuxuryStay: Hotel & Restaurant Management System",
  image: project16,
  description:
    "Built a hotel and restaurant management system using the MERN stack with features like booking, billing automation, and customer feedback. Integrated scalable REST APIs and role-based access for Admin and User dashboards, ensuring secure real-time reservation management.",
  technologies: ["MongoDB", "Express", "React", "Node.js"],
  github: "https://github.com/Rabia303/HOTEL-BOOKING-MERN-STACK",
},

{
  title: "DocuDraft Pro: AI-Powered Document Drafting Assistant",
  image: project17,
  description:
    "Designed an AI-powered drafting assistant for business proposals, contracts, and reports with domain-specific templates, compliance checks, and rich-text editing. Enabled AI chat assistance, plagiarism detection, and export in PDF/DOCX/HTML formats with team collaboration support.",
  technologies: ["React (Vite + JSX)", "Flask", "MongoDB", "Gemini API"],
  github: "https://github.com/Rabia303/DocuDraft-Pro---Ticket-to-Techwiz",
},

];


export const CONTACT = {
  address: "FB Area, Karachi",
  phoneNo: "0324-1458873",
  email: "rabiaimtiaz203@gmail.com",
};
