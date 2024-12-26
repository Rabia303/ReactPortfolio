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

export const HERO_CONTENT = `Driven by curiosity and a passion for innovation, I am a skilled mobile app and web developer with a knack for turning complex problems into seamless solutions. Proficient in Flutter, Firebase, and .NET, I specialize in creating impactful applications that not only meet but exceed user expectations. My focus is on delivering value through clean code, intuitive design, and scalable systems.`;

export const ABOUT_TEXT = `As a computer science enthusiast, I thrive on solving challenges through technology. With a solid foundation in mobile and web development, I bring a creative and analytical approach to every project. From crafting user-friendly mobile apps with Flutter to designing robust web systems using .NET and SQL, I am dedicated to pushing the boundaries of innovation. Beyond coding, I enjoy exploring new tools, contributing to the tech community, and continuously honing my skills to make a meaningful impact.`;

export const EDUCATION = [
  {
    degree: "Bachelor of Science, Computer Science",
    institution: "Dawood University of Engineering and Technology",
    timeline: "7th Semester | Expected Graduation: 2025",
    courses: ["Data Structures", "Algorithms", "Computer Networks", "Operating Systems", "Database Management Systems"],
    description: "I am a final year student of cs trying to learn new things and improve my skills and land an internship. I am currently pursuing my Bachelor of Science in Computer Science at Dawood University of Engineering and Technology. I have a strong foundation in computer science and am eager to apply my skills to real-world problems. "
  },
  {
    degree: "Advanced Diploma in Software Engineering (ADSE II)",
    institution: "Aptech Learning Center",
    timeline: "5th Semester | Expected Graduation: 2025",
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
];


export const CONTACT = {
  address: "FB Area, Karachi",
  phoneNo: "0324-1458873",
  email: "rabiaimtiaz203@gmail.com",
};