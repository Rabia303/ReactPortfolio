import { useState } from "react";
import { FaCertificate, FaTrophy, FaDatabase } from "react-icons/fa";
import Certifications from "./Certifications";
import Hackathons from "./Hackathons";
import Datasets from "./Datasets";
import SectionHeading from "./SectionHeading";

const TABS = [
  { id: "certifications", label: "Certifications", icon: FaCertificate },
  { id: "hackathons", label: "Hackathons", icon: FaTrophy },
  { id: "datasets", label: "Datasets", icon: FaDatabase },
];

const Achievements = () => {
  const [tab, setTab] = useState("certifications");

  return (
    <div className="py-16">
      <SectionHeading eyebrow="Recognition" title="Achievements" subtitle="Certifications, hackathons, and published research" />

      <div className="mb-10 flex justify-center gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-xs transition sm:px-5 sm:text-sm ${
              tab === t.id
                ? "bg-purple-600 text-white"
                : "bg-neutral-900 text-neutral-400 hover:text-white"
            }`}
          >
            <t.icon /> {t.label}
          </button>
        ))}
      </div>

      {tab === "certifications" && <Certifications hideHeader />}
      {tab === "hackathons" && <Hackathons hideHeader />}
      {tab === "datasets" && <Datasets hideHeader />}
    </div>
  );
};

export default Achievements;
