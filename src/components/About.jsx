import AboutImage from "../assets/imga.jpeg";
import { ABOUT_TEXT } from "..";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl" src={AboutImage} alt="About" />
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:justify-start">
            {ABOUT_TEXT.split("\n").map((line, index) => {
              const trimmedLine = line.trim();

              // Section headings with icons
              if (
                trimmedLine.startsWith("👨‍💻") ||
                trimmedLine.startsWith("📱") ||
                trimmedLine.startsWith("🎯") ||
                trimmedLine.startsWith("🚀")
              ) {
                return (
                  <h2
                    key={index}
                    className="my-4 text-xl font-bold text-neutral-200"
                  >
                    {trimmedLine}
                  </h2>
                );
              }

              // Bullet points
              if (trimmedLine.startsWith("-")) {
                return (
                  <li
                    key={index}
                    className="ml-4 list-disc text-neutral-300"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {trimmedLine.slice(1).trim()}
                  </li>
                );
              }

              // Regular paragraphs
              if (trimmedLine) {
                return (
                  <p key={index} className="mb-2 max-w-xl text-neutral-300">
                    {trimmedLine}
                  </p>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
