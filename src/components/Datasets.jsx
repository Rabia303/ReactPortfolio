// src/components/Datasets.jsx
import { FaDatabase, FaChartLine, FaBookOpen } from "react-icons/fa";

const DATASETS = [
  {
    title: "Karachi Synthetic Crime Dataset (2020–2025)",
    description:
      "First large-scale synthetic crime dataset for Karachi with 100,000+ records. Designed for red zone detection, safe route prediction, and urban safety analysis. Published on Kaggle with growing adoption in the data science community.",
    link: "https://www.kaggle.com/datasets/rabiaaaimtiaz/karachi-synthetic-crime-dataset-20202025", 
    notebook: "https://www.kaggle.com/code/rabiaaaimtiaz/karachicrimedataanalysis/notebook",
    stats: {
      views: "189+",
      downloads: "33+",
      records: "100k+",
    },
    technologies: [
      "BeautifulSoup",
      "Outscraper",
      "Google Search API",
      "spaCy",
      "Gemini AI",
      "Geopy",
    ],
  },
];

const Datasets = () => {
  return (
    <section className="pb-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        📊 Datasets & Research
      </h2>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {DATASETS.map((dataset, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-3 justify-center">
                <FaDatabase className="text-purple-400" />
                {dataset.title}
              </h3>
              <p className="text-neutral-300 mb-4 text-center">{dataset.description}</p>

              {/* Stats Section */}
              <div className="flex gap-6 justify-center text-sm mb-4 flex-wrap">
                <span className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full">
                  👁 {dataset.stats.views} Views
                </span>
                <span className="bg-green-900 text-green-300 px-3 py-1 rounded-full">
                  ⬇ {dataset.stats.downloads} Downloads
                </span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full">
                  📂 {dataset.stats.records} Records
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {dataset.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-neutral-700 px-3 py-1 rounded-full text-xs text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-center">
                <a
                  href={dataset.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
                >
                  <FaChartLine /> View Dataset
                </a>
                <a
                  href={dataset.notebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
                >
                  <FaBookOpen /> View Notebook
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Datasets;
