import { RiReactjsLine } from "react-icons/ri";
import {
    SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql,
    SiAngular, SiPhp, SiLaravel, SiFirebase, SiGithub,
    SiFigma, SiTailwindcss, SiBootstrap, SiDotnet,
    SiFlutter, SiPostman, SiTypescript, SiExpress, SiEslint
} from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-24 bg-gradient-to-b ">
            <h2 className="my-20 text-center text-4xl  text-white">Technologies</h2>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center px-4">
                {/* Individual Technology Cards */}
                {[
                    // Programming Languages
                    { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
                    { icon: <SiHtml5 className="text-orange-400" />, label: "HTML5" },
                    { icon: <SiCss3 className="text-blue-500" />, label: "CSS3" },
                    {
                        icon: (
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                                alt="Java Logo"
                                className="w-14 h-14 mx-auto"
                            />
                        ),
                        label: "Java",
                    },
                    {
                        icon: (
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                                alt="C# Logo"
                                className="w-14 h-14 mx-auto"
                            />
                        ),
                        label: "C#",
                    },
                    { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },

                    // Frontend & Frameworks
                    { icon: <RiReactjsLine className="text-cyan-400" />, label: "React" },
                    { icon: <SiAngular className="text-red-500" />, label: "Angular" },
                    { icon: <SiBootstrap className="text-purple-600" />, label: "Bootstrap" },
                    { icon: <SiTailwindcss className="text-teal-400" />, label: "Tailwind CSS" },
                    { icon: <SiFlutter className="text-blue-500" />, label: "Flutter" },
                    { icon: <SiEslint className="text-yellow-500" />, label: "EJS" },

                    // Backend & Frameworks
                    { icon: <FaNodeJs className="text-green-400" />, label: "Node.js" },
                    { icon: <SiExpress className="text-white" />, label: "Express.js" },
                    { icon: <SiPhp className="text-indigo-500" />, label: "PHP" },
                    { icon: <SiLaravel className="text-red-600" />, label: "Laravel" },
                    { icon: <SiDotnet className="text-purple-600" />, label: ".NET MVC Core" },

                    // Databases
                    { icon: <SiMysql className="text-blue-500" />, label: "MySQL" },
                    { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
                    { icon: <SiFirebase className="text-yellow-500" />, label: "Firebase" },
                    {
                        icon: (
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png"
                                alt="SQL Server Logo"
                                className="w-14 h-14 mx-auto"
                            />
                        ),
                        label: "SQL Server",
                    },

                    // Tools & Platforms
                    { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
                    { icon: <SiGithub className="text-gray-400" />, label: "GitHub" },
                    { icon: <SiPostman className="text-orange-400" />, label: "Postman" },
                    { icon: <SiFigma className="text-pink-500" />, label: "Figma" },
                ].map((tech, index) => (
                    <div
                        key={index}
                        className="group rounded-2xl border-4 border-neutral-800 p-6 text-center hover:scale-105 hover:border-cyan-500 transition-transform duration-300"
                    >
                        <div className="text-6xl mb-2">{tech.icon}</div>
                        <p className="text-white text-sm font-medium">{tech.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
