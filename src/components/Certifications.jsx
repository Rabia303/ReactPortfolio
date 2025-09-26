// src/components/Certifications.jsx
import { useState } from "react";
import { FaCertificate, FaExternalLinkAlt, FaAward, FaTimes, FaTrophy, FaMedal, FaCode, FaDatabase, FaRobot } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/certifications/img1.jpg";
import img2 from "../assets/certifications/img2.jpg";
import img3 from "../assets/certifications/img3.jpg";
import img4 from "../assets/certifications/img4.jpg";
import img5 from "../assets/certifications/img5.jpg";


const DATA_ANALYTICS_CERTS = [
  {
    title: "Google Advanced Data Analytics Specialization",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "XZKRE5D3ESJ3",
    skills: ["Data Analysis", "Data Science", "Machine Learning", "Statistics"],
    link: "https://www.coursera.org/account/accomplishments/verify/XZKRE5D3ESJ3",
    icon: "📊",
    gradient: "from-blue-500 to-cyan-500",
    description: "Comprehensive data analytics specialization covering advanced techniques and tools",
    type: "data"
  },
  {
    title: "Foundations of Data Science",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "M550G3W1WB78",
    skills: ["Data Science", "Foundations", "Analytics"],
    link: "https://www.coursera.org/account/accomplishments/verify/M550G3W1WB78",
    icon: "🔍",
    gradient: "from-green-500 to-emerald-500",
    type: "data"
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "NML9JXE62T4T",
    skills: ["Data Fundamentals", "Data Management"],
    link: "https://www.coursera.org/account/accomplishments/records/NML9JXE62T4T",
    icon: "📈",
    gradient: "from-purple-500 to-pink-500",
    type: "data"
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "KQA5R5IE7P7D",
    skills: ["Data-Driven Decisions", "Analytical Thinking"],
    link: "https://www.coursera.org/account/accomplishments/verify/KQA5R5IE7P7D",
    icon: "❓",
    gradient: "from-indigo-500 to-blue-500",
    type: "data"
  },
  {
    title: "Go Beyond the Numbers: Translate Data into Insights",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "34QDEKOYWIYO",
    skills: ["Data Visualization", "Insight Generation"],
    link: "https://www.coursera.org/account/accomplishments/records/34QDEKOYWIYO",
    icon: "💡",
    gradient: "from-teal-500 to-cyan-500",
    type: "data"
  },
  {
    title: "Regression Analysis: Simplify Complex Data Relationships",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "53AIZBHWFD2X",
    skills: ["Regression Analysis", "Statistical Modeling"],
    link: "https://www.coursera.org/account/accomplishments/records/53AIZBHWFD2X",
    icon: "📉",
    gradient: "from-orange-500 to-red-500",
    type: "data"
  },
  {
    title: "The Power of Statistics",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "MJCOZMPRGTS1",
    skills: ["Statistics", "Probability", "Analysis"],
    link: "https://www.coursera.org/account/accomplishments/records/MJCOZMPRGTS1",
    icon: "⚡",
    gradient: "from-yellow-500 to-amber-500",
    type: "data"
  },
  {
    title: "Speed Up Data Analysis and Presentation Building",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "INQSXD5C59QL",
    skills: ["Data Presentation", "Efficiency", "Reporting"],
    link: "https://www.coursera.org/account/accomplishments/records/INQSXD5C59QL",
    icon: "🚀",
    gradient: "from-pink-500 to-rose-500",
    type: "data"
  }
];

const AI_PYTHON_CERTS = [
  {
    title: "Google Prompting Essentials Specialization",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "94ZDJZ3LNIMK",
    skills: ["AI Prompting", "Specialization", "Google AI"],
    link: " https://www.coursera.org/account/accomplishments/specialization/94ZDJZ3LNIMK",
    icon: "🤖",
    gradient: "from-purple-500 to-indigo-500",
    description: "Mastering AI prompting techniques for various applications",
    type: "ai"
  },
  {
    title: "Google Prompting Essentials",
    issuer: "Coursera",
    date: "Issued Jul 2025",
    skills: ["AI Essentials", "Prompt Engineering"],
    link: "https://www.credly.com/badges/d5d4e1ef-ecf2-4f67-863d-892b3d9faf03/linked_in_profile",
    icon: "⚡",
    gradient: "from-blue-500 to-purple-500",
    type: "ai"
  },
  {
    title: "Design Prompts for Everyday Work Tasks",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "7YQC91XIMLT6",
    skills: ["Prompt Design", "Workflow Optimization"],
    link: "https://www.coursera.org/account/accomplishments/verify/7YQC91XIMLT6",
    icon: "🎯",
    gradient: "from-green-500 to-teal-500",
    type: "ai"
  },
  {
    title: "Start Writing Prompts like a Pro",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "CCKENQPTHLPS",
    skills: ["Professional Prompting", "AI Communication"],
    link: "https://www.coursera.org/account/accomplishments/records/CCKENQPTHLPS",
    icon: "✍️",
    gradient: "from-yellow-500 to-orange-500",
    type: "ai"
  },
  {
    title: "Use AI as a Creative or Expert Partner",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "J30BQQK6C30D",
    skills: ["Creative AI", "Expert Systems", "Collaboration"],
    link: "https://www.coursera.org/account/accomplishments/records/J30BQQK6C30D",
    icon: "🤝",
    gradient: "from-red-500 to-pink-500",
    type: "ai"
  },
  {
    title: "The Nuts and Bolts of Machine Learning",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "2QU7TKB7B42D",
    skills: ["Machine Learning", "AI Fundamentals", "Algorithms"],
    link: "https://www.coursera.org/account/accomplishments/records/2QU7TKB7B42D",
    icon: "⚙️",
    gradient: "from-gray-500 to-blue-500",
    type: "ai"
  },
  {
    title: "Get Started with Python",
    issuer: "United Latino Students Association",
    date: "Issued Jul 2025",
    credentialId: "5KHYSY68J1ZB",
    skills: ["Python", "Programming", "Algorithms"],
    link: "https://www.coursera.org/account/accomplishments/verify/5KHYSY68J1ZB",
    icon: "🐍",
    gradient: "from-emerald-500 to-green-500",
    type: "ai"
  }
];

const SOFTWARE_DEV_CERTS = [
  {
    title: "TechWiz 5 – Mobile Application Competition (Flutter)",
    issuer: "Aptech",
    date: "Issued Nov 2024",
    skills: ["Mobile App Development", "Flutter", "Dart", "UI/UX"],
    image: img3,
    icon: "📱",
    gradient: "from-purple-600 to-pink-500",
    ribbon: "Competition Participant",
    description: "Mobile application competition showcasing Flutter and Dart skills",
    type: "dev"
  },
  {
    title: "Java Programming Certification",
    issuer: "Aptech Pakistan",
    date: "Issued Apr 2022",
    skills: ["Java", "OOP", "JDBC", "Data Structures"],
    image: img4,
    icon: "☕",
    gradient: "from-red-600 to-orange-500",
    description: "Developed a Restaurant Management System & Quiz App using CRUD operations and OOP principles",
    type: "dev"
  },
  {
    title: "Certificate of Participation – SMEC'25 Hackathon",
    issuer: "Sir Syed University of Engineering & Technology",
    date: "2025",
    skills: ["Web Development", ".NET", "Teamwork", "Problem Solving"],
    image: img5,
    icon: "⚡",
    gradient: "from-blue-600 to-cyan-500",
    ribbon: "🚀 Hackathon Participant",
    type: "dev"
  },
  {
    title: "Project of the Month – NGO Website",
    issuer: "Aptech",
    date: "Issued Oct 2023",
    skills: [".NET", "SQL", "Full Stack", "Web Design"],
    image: img1,
    icon: "🌟",
    gradient: "from-yellow-600 to-amber-500",
    ribbon: "⭐ Project of the Month",
    description: "Built a full NGO Website with admin & user modules, recognized as Project of the Month",
    type: "dev"
  },
  {
    title: "Static Website Exhibition – Metric Conversion Project",
    issuer: "Aptech",
    date: "Issued Mar 2022",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    image: img2,
    icon: "🌐",
    gradient: "from-indigo-600 to-purple-500",
    ribbon: "🎖️ Excellence Award",
    description: "Built Metric Conversion Website using modern web technologies",
    type: "dev"
  }
];

// Combine all certifications for tab filtering
const ALL_CERTS = [...DATA_ANALYTICS_CERTS, ...AI_PYTHON_CERTS, ...SOFTWARE_DEV_CERTS];

const TABS = [
  { id: "all", label: "All Certifications", icon: "🎓", count: ALL_CERTS.length },
  { id: "data", label: "Data Analytics", icon: "📊", count: DATA_ANALYTICS_CERTS.length },
  { id: "ai", label: "AI & Python", icon: "🤖", count: AI_PYTHON_CERTS.length },
  { id: "dev", label: "Software Development", icon: "💻", count: SOFTWARE_DEV_CERTS.length }
];

const CertificationCard = ({ cert, index, onPreview }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative group"
  >
    {/* Ribbon for special achievements */}
    {cert.ribbon && (
      <div className="absolute -top-3 -right-3 z-10">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-xs font-bold rotate-3 transform shadow-lg border-2 border-yellow-300">
          {cert.ribbon}
        </span>
      </div>
    )}

    <div className="p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-neutral-700 group-hover:border-neutral-400 h-full flex flex-col relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
      
      {/* Header with gradient icon */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {cert.icon}
        </div>
        <FaCertificate className="text-2xl text-yellow-400 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Image if available */}
      {cert.image && (
        <div className="flex justify-center mb-4 relative z-10">
          <div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer" onClick={() => onPreview(cert.image)}>
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-lg">Click to Preview</span>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 relative z-10">
        <h4 className="text-lg font-bold mb-2 leading-tight group-hover:text-white transition-colors duration-300 line-clamp-2">
          {cert.title}
        </h4>
        
        <div className="flex items-center text-sm text-neutral-300 mb-2">
          <span className="bg-neutral-700/80 px-3 py-1 rounded-lg backdrop-blur-sm">{cert.issuer}</span>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <p className="text-xs text-neutral-400 font-medium">{cert.date}</p>
          {cert.credentialId && (
            <p className="text-xs text-neutral-500 font-mono">ID: {cert.credentialId}</p>
          )}
        </div>

        {/* Description */}
        {cert.description && (
          <p className="text-sm text-neutral-300 mb-4 leading-relaxed bg-neutral-800/50 p-3 rounded-lg">
            {cert.description}
          </p>
        )}

        {/* Skills */}
        {cert.skills && (
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-700/80 px-3 py-1.5 rounded-lg text-xs text-neutral-200 hover:bg-neutral-600 transition-all duration-200 backdrop-blur-sm cursor-default border border-neutral-600/50"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className={`flex gap-3 mt-auto relative z-10 ${cert.image && cert.link ? 'flex-col' : ''}`}>
        {cert.link && (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex-1 text-center group/btn"
          >
            <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
              View Credential
            </span>
            <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-1 transition-transform duration-200" />
          </motion.a>
        )}
        
        {cert.image && (
          <motion.button
            onClick={() => onPreview(cert.image)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex-1 text-center group/btn"
          >
            <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
              Preview Certificate
            </span>
            <FaAward className="text-sm group-hover/btn:translate-x-1 transition-transform duration-200" />
          </motion.button>
        )}
      </div>
    </div>
  </motion.div>
);

const Lightbox = ({ image, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="relative max-w-4xl max-h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={image}
        alt="Certificate Preview"
        className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
      />
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-4 -right-4 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition shadow-lg"
      >
        <FaTimes className="text-lg" />
      </motion.button>
    </motion.div>
  </motion.div>
);

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("dev");
  const [previewImage, setPreviewImage] = useState(null);

  const filteredCerts = activeTab === "all" 
    ? ALL_CERTS 
    : ALL_CERTS.filter(cert => cert.type === activeTab);

  return (
    <section className="pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-4xl mb-6 shadow-2xl animate-pulse-slow">
            🎓
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-300 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Validated expertise and recognized accomplishments across data analytics, AI, and software development. 
            Each certification represents hands-on experience and proven skills.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {TABS.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
              <span className="bg-black/20 px-2 py-1 rounded-full text-xs">
                {tab.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredCerts.map((cert, index) => (
              <CertificationCard
                key={`${cert.title}-${index}`}
                cert={cert}
                index={index}
                onPreview={setPreviewImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-neutral-300 mb-2">No certifications found</h3>
            <p className="text-neutral-500">Select a different category to view more certifications.</p>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {previewImage && (
            <Lightbox
              image={previewImage}
              onClose={() => setPreviewImage(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;