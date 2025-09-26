import { RiReactjsLine } from "react-icons/ri";
import {
    SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql,
    SiAngular, SiPhp, SiLaravel, SiFirebase, SiGithub,
    SiFigma, SiTailwindcss, SiBootstrap, SiDotnet,
    SiFlutter, SiPostman, SiTypescript, SiExpress, SiPython,
    SiCplusplus, SiDart, SiJquery, SiPandas, SiJupyter,
    SiOpenai, SiGoogle, SiVite
} from "react-icons/si";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const Technologies = () => {
    const technologyCategories = [
        {
            title: "Core Technologies & Frameworks",
            subtitle: "Programming Languages & Development Frameworks",
            skills: [
                // Programming Languages
                { icon: <SiPython className="text-yellow-400" />, label: "Python", category: "Language" },
                { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript", category: "Language" },
                { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript", category: "Language" },
                { 
                    icon: <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java" className="w-10 h-10 mx-auto" />,
                    label: "Java", category: "Language"
                },
                { icon: <SiCplusplus className="text-blue-600" />, label: "C++", category: "Language" },
                { 
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C#" className="w-10 h-10 mx-auto" />,
                    label: "C#", category: "Language"
                },
                { icon: <SiPhp className="text-indigo-500" />, label: "PHP", category: "Language" },
                { icon: <SiDart className="text-blue-400" />, label: "Dart", category: "Language" },

                // Frontend Frameworks
                { icon: <RiReactjsLine className="text-purple-400" />, label: "React", category: "Frontend" },
                { icon: <SiVite className="text-purple-500" />, label: "Vite", category: "Frontend" },
                { icon: <SiAngular className="text-red-500" />, label: "Angular", category: "Frontend" },
                { icon: <SiJquery className="text-blue-500" />, label: "jQuery", category: "Frontend" },
                { icon: <SiBootstrap className="text-purple-600" />, label: "Bootstrap", category: "Frontend" },
                { icon: <SiTailwindcss className="text-purple-300" />, label: "Tailwind CSS", category: "Frontend" },
                { icon: <SiHtml5 className="text-orange-400" />, label: "HTML5", category: "Frontend" },
                { icon: <SiCss3 className="text-blue-500" />, label: "CSS3", category: "Frontend" },

                // Mobile & Cross-Platform
                { icon: <SiFlutter className="text-blue-400" />, label: "Flutter", category: "Mobile" },

                // Backend Frameworks
                { icon: <FaNodeJs className="text-green-500" />, label: "Node.js", category: "Backend" },
                { icon: <SiExpress className="text-gray-100" />, label: "Express.js", category: "Backend" },
                { icon: <SiDotnet className="text-purple-500" />, label: ".NET Core", category: "Backend" },
                { icon: <SiLaravel className="text-red-500" />, label: "Laravel", category: "Backend" },
                { icon: <TbApi className="text-green-300" />, label: "REST APIs", category: "Backend" },
                { 
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg" alt="ASP.NET MVC" className="w-10 h-10 mx-auto" />,
                    label: "ASP.NET MVC", category: "Backend"
                },
            ]
        },
        {
            title: "Tools & Platforms",
            subtitle: "Development Tools, Databases & Analytics",
            skills: [
                // Databases
                { icon: <SiMysql className="text-blue-500" />, label: "MySQL", category: "Database" },
                { icon: <SiMongodb className="text-green-500" />, label: "MongoDB", category: "Database" },
                { icon: <SiFirebase className="text-yellow-500" />, label: "Firebase", category: "Database" },
                { 
                    icon: <img src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png" alt="SQL Server" className="w-10 h-10 mx-auto" />,
                    label: "SQL Server", category: "Database"
                },
                { icon: <SiMongodb className="text-green-400" />, label: "MongoDB Atlas", category: "Database" },

                // Development Tools
                { icon: <FaGitAlt className="text-orange-500" />, label: "Git", category: "Tool" },
                { icon: <SiGithub className="text-gray-100" />, label: "GitHub", category: "Tool" },
                { icon: <SiPostman className="text-orange-400" />, label: "Postman", category: "Tool" },
                { icon: <SiFigma className="text-purple-400" />, label: "Figma", category: "Tool" },
                { 
                    icon: <img src="https://code.visualstudio.com/assets/images/code-stable.png" alt="VS Code" className="w-10 h-10 mx-auto" />,
                    label: "VS Code", category: "Tool"
                },
                { 
                    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg" alt="Visual Studio" className="w-10 h-10 mx-auto" />,
                    label: "Visual Studio", category: "Tool"
                },
                { 
                    icon: <img src="https://cdn-icons-png.flaticon.com/512/226/226772.png" alt="IntelliJ" className="w-10 h-10 mx-auto" />,
                    label: "IntelliJ", category: "Tool"
                },

                // Data Science & Analytics
                { icon: <SiPandas className="text-red-400" />, label: "Pandas", category: "Data Science" },
                { icon: <SiJupyter className="text-orange-500" />, label: "Jupyter", category: "Data Science" },
                { 
                    icon: <img src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg" alt="Tableau" className="w-10 h-10 mx-auto" />,
                    label: "Tableau", category: "Analytics"
                },

                // AI & APIs
                { icon: <SiOpenai className="text-green-400" />, label: "OpenAI Whisper", category: "AI" },
                { icon: <SiGoogle className="text-blue-500" />, label: "Gemini API", category: "AI" },
                { icon: <SiGoogle className="text-red-500" />, label: "gTTS", category: "AI" },
            ]
        }
    ];

    return (
        <section id="technologies" className="relative py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 bg-clip-text text-transparent mb-4">
                        Tech Stack
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Technologies and tools I use to bring ideas to life and create impactful solutions
                    </p>
                </div>

                <div className="space-y-20">
                    {technologyCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <div className="text-center mb-12">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                    {category.title}
                                </h3>
                                <p className="text-lg text-gray-400">{category.subtitle}</p>
                                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                                {category.skills.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-2xl border border-gray-700/50 p-6 text-center transition-all duration-500 hover:scale-105 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
                                    >
                                        {/* Gradient Border Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Animated Background */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                                        
                                        {/* Icon Container */}
                                        <div className="relative z-10 mb-4">
                                            <div className="group/icon inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                                                <div className="text-3xl">
                                                    {tech.icon}
                                                </div>
                                                {/* Individual Icon Glow Effect */}
                                                <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-md group-hover/icon:opacity-100 opacity-0 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                        
                                        {/* Label */}
                                        <p className="relative z-10 text-white font-semibold text-sm mb-2">
                                            {tech.label}
                                        </p>
                                        
                                        {/* Category Badge */}
                                        <span className="relative z-10 text-xs text-gray-400 bg-gray-800/50 rounded-full px-2 py-1">
                                            {tech.category}
                                        </span>
                                        
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 rounded-2xl bg-purple-500/10 blur-xl hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Expertise Summary */}
                <div className="mt-20 text-center">
                    <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm overflow-hidden">
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:20px_20px]"></div>
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Technical Expertise
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                As a <span className="text-purple-400 font-semibold">Full-Stack Developer</span>, I specialize in creating 
                                scalable applications using modern technologies like <span className="text-purple-400">React</span>, 
                                <span className="text-green-400"> Node.js</span>, <span className="text-purple-400">.NET Core</span>, and 
                                <span className="text-yellow-400"> Python</span>. With expertise in both <span className="text-purple-400">MERN stack</span> and 
                                <span className="text-purple-400"> .NET ecosystem</span>, I deliver end-to-end solutions with focus on 
                                performance, security, and user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;