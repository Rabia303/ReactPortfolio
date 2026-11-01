// src/components/Certifications.jsx
import { useState } from "react";
import { FaCertificate, FaExternalLinkAlt, FaAward, FaTimes, FaTrophy, FaMedal, FaCode, FaDatabase, FaRobot, FaChartBar, FaLayerGroup } from "react-icons/fa";

const TYPE_ICONS = { data: FaChartBar, ai: FaRobot, dev: FaCode };
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
  { id: "all", label: "All Certifications", icon: FaLayerGroup, count: ALL_CERTS.length },
  { id: "data", label: "Data Analytics", icon: FaChartBar, count: DATA_ANALYTICS_CERTS.length },
  { id: "ai", label: "AI & Python", icon: FaRobot, count: AI_PYTHON_CERTS.length },
  { id: "dev", label: "Software Development", icon: FaCode, count: SOFTWARE_DEV_CERTS.length }
];

const CertificationCard = ({ cert, index, onPreview }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06 }}
    className="spotlight group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.45)]"
  >
    {cert.image && (
      <button
        onClick={() => onPreview(cert.image)}
        className="relative aspect-[4/3] overflow-hidden bg-neutral-950"
        aria-label={`Preview ${cert.title}`}
      >
        {/* blurred copy fills the frame; the full certificate sits on top, uncropped */}
        <img
          src={cert.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl"
        />
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="relative h-full w-full object-contain p-4 drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-sm text-white opacity-0 transition group-hover:opacity-100">
          Click to preview
        </span>
      </button>
    )}

    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
          {(() => { const Icon = TYPE_ICONS[cert.type] || FaCertificate; return <Icon />; })()}
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs text-neutral-400">{cert.issuer}</p>
          <p className="text-xs text-neutral-500">{cert.date}</p>
        </div>
      </div>

      <h4 className="mb-2 font-semibold leading-snug text-white">{cert.title}</h4>

      {cert.ribbon && (
        <span className="mb-2 w-fit rounded-full bg-purple-500/15 px-2.5 py-0.5 text-xs text-purple-300">
          {cert.ribbon.replace(/^[^A-Za-z]+/, "")}
        </span>
      )}

      {cert.description && (
        <p className="mb-3 line-clamp-2 text-sm text-neutral-400">{cert.description}</p>
      )}

      {cert.skills && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          {cert.skills.slice(0, 4).map((skill) => (
            <span key={skill} className="rounded bg-neutral-800 px-2 py-0.5 text-xs text-purple-400">
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex gap-4 text-sm">
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300"
          >
            View credential <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
        {cert.image && (
          <button
            onClick={() => onPreview(cert.image)}
            className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300"
          >
            Preview <FaAward className="text-xs" />
          </button>
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

const Certifications = ({ hideHeader = false }) => {
  const [activeTab, setActiveTab] = useState("ai");
  const [previewImage, setPreviewImage] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const MOBILE_COUNT = 3;

  const filteredCerts = activeTab === "all" 
    ? ALL_CERTS 
    : ALL_CERTS.filter(cert => cert.type === activeTab);

  return (
    <div className="pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {!hideHeader && (
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
        )}

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0 [scrollbar-width:none]"
        >
          {TABS.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setShowAllMobile(false); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition ${
                activeTab === tab.id
                  ? "border-purple-500 bg-purple-500/15 text-purple-200"
                  : "border-neutral-800 text-neutral-400 hover:text-white"
              }`}
            >
              <tab.icon />
              <span>{tab.label}</span>
              <span className="text-xs opacity-60">
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            {filteredCerts.map((cert, index) => (
              <div key={`${cert.title}-${index}`} className={!showAllMobile && index >= MOBILE_COUNT ? "hidden sm:block" : ""}>
                <CertificationCard cert={cert} index={index} onPreview={setPreviewImage} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length > MOBILE_COUNT && (
          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => setShowAllMobile((v) => !v)}
              className="rounded-full border border-purple-500/50 px-6 py-2.5 text-sm text-purple-300"
            >
              {showAllMobile ? "Show fewer" : `Show all ${filteredCerts.length} certificates`}
            </button>
          </div>
        )}

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
    </div>
  );
};

export default Certifications;