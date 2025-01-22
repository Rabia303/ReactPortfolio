import AboutImage from "../assets/imga.jpeg";
import { ABOUT_TEXT } from "..";

const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="rounded-2xl"
              src={AboutImage}
              alt="A personal photo or representation"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center mb-4 text-neutral-400">
            {ABOUT_TEXT.split("\n").map((line, index) => {
              const trimmedLine = line.trim();

              // Bold specific headings
              if (
                ["What I Do", "Who I Am", "What I’m Working On", "Hackathon Adventures"].includes(
                  trimmedLine
                )
              ) {
                return (
                  <h2
                    key={index}
                    className="mb-4 text-xl font-bold text-neutral-400"
                  >
                    {trimmedLine}
                  </h2>
                );
              }

              // Bold parts with a colon (e.g., "Web Development:")
              const parts = trimmedLine.split(":");
              if (parts.length > 1) {
                return (
                  <p key={index} className="mb-4 text-neutral-500">
                    <strong className="font-bold text-neutral-400">
                      {parts[0]}:
                    </strong>{" "}
                    {parts.slice(1).join(":").trim()}
                  </p>
                );
              }

              // Bullet points
              if (trimmedLine.startsWith("-")) {
                return (
                  <li
                    key={index}
                    className="ml-4 list-disc text-neutral-300 mb-4"
                  >
                    {trimmedLine.slice(1).trim()}
                  </li>
                );
              }

              // Regular paragraphs
              if (trimmedLine) {
                return (
                  <p key={index} className="mb-4 text-neutral-400">
                    {trimmedLine}
                  </p>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
