import SectionHeading from "./SectionHeading";
import { RiReactjsLine } from "react-icons/ri";
import {
    SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql,
    SiAngular, SiPhp, SiLaravel, SiFirebase, SiGithub,
    SiFigma, SiTailwindcss, SiBootstrap, SiDotnet,
    SiFlutter, SiPostman, SiTypescript, SiExpress, SiPython,
    SiCplusplus, SiDart, SiJquery, SiPandas, SiJupyter,
    SiOpenai, SiGoogle, SiVite, SiIntellijidea, SiTableau
} from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
import { TbApi, TbBrandCSharp, TbBrandVisualStudio } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";

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
                    icon: <FaJava className="text-orange-500" />,
                    label: "Java", category: "Language"
                },
                { icon: <SiCplusplus className="text-blue-600" />, label: "C++", category: "Language" },
                { 
                    icon: <TbBrandCSharp className="text-purple-500" />,
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
                    icon: <SiDotnet className="text-violet-400" />,
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
                    icon: <DiMsqlServer className="text-red-500" />,
                    label: "SQL Server", category: "Database"
                },
                { icon: <SiMongodb className="text-green-400" />, label: "MongoDB Atlas", category: "Database" },

                // Development Tools
                { icon: <FaGitAlt className="text-orange-500" />, label: "Git", category: "Tool" },
                { icon: <SiGithub className="text-gray-100" />, label: "GitHub", category: "Tool" },
                { icon: <SiPostman className="text-orange-400" />, label: "Postman", category: "Tool" },
                { icon: <SiFigma className="text-purple-400" />, label: "Figma", category: "Tool" },
                { 
                    icon: <VscVscode className="text-sky-500" />,
                    label: "VS Code", category: "Tool"
                },
                { 
                    icon: <TbBrandVisualStudio className="text-purple-400" />,
                    label: "Visual Studio", category: "Tool"
                },
                { 
                    icon: <SiIntellijidea className="text-pink-500" />,
                    label: "IntelliJ", category: "Tool"
                },

                // Data Science & Analytics
                { icon: <SiPandas className="text-red-400" />, label: "Pandas", category: "Data Science" },
                { icon: <SiJupyter className="text-orange-500" />, label: "Jupyter", category: "Data Science" },
                { 
                    icon: <SiTableau className="text-blue-400" />,
                    label: "Tableau", category: "Analytics"
                },

                // AI & APIs
                { icon: <SiOpenai className="text-green-400" />, label: "OpenAI Whisper", category: "AI" },
                { icon: <SiGoogle className="text-blue-500" />, label: "Gemini API", category: "AI" },
                { icon: <SiGoogle className="text-red-500" />, label: "gTTS", category: "AI" },
            ]
        }
    ];

    const GROUPS = [
        { title: "Languages", match: ["Language"] },
        { title: "Frontend", match: ["Frontend"] },
        { title: "Backend", match: ["Backend"] },
        { title: "Mobile", match: ["Mobile"] },
        { title: "Databases", match: ["Database"] },
        { title: "AI & Data", match: ["AI", "Data Science", "Analytics"] },
        { title: "Tools", match: ["Tool"] },
    ];
    const allSkills = technologyCategories.flatMap((c) => c.skills);
    // Highlighted as core strengths
    const CORE = ["Python", "TypeScript", "C#", "React", "Angular", ".NET Core", "ASP.NET MVC", "Flask", "SQL Server", "MongoDB", "Gemini API"];

    return (
        <div className="py-16">
            <SectionHeading eyebrow="What I work with" title="Skills" subtitle="Technologies and tools I use to bring ideas to life" />
            <p className="-mt-6 mb-10 flex items-center justify-center gap-2 text-sm text-neutral-400">
                <span className="inline-block h-3 w-3 rounded border border-purple-500/60 bg-purple-500/20" /> Core strengths
            </p>

            <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
                {GROUPS.map((group) => {
                    const skills = allSkills.filter((t) => group.match.includes(t.category));
                    if (!skills.length) return null;
                    return (
                        <div key={group.title} className="spotlight rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[...skills].sort((a, b) => CORE.includes(b.label) - CORE.includes(a.label)).map((tech) => (
                                    <span
                                        key={tech.label}
                                        className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition hover:border-purple-500/50 ${
                                            CORE.includes(tech.label)
                                                ? "border-purple-500/50 bg-purple-500/10 text-white shadow-[0_0_20px_-8px_rgba(168,85,247,0.6)]"
                                                : "border-neutral-800 bg-neutral-950/60 text-neutral-300"
                                        }`}
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center text-lg [&_img]:h-5 [&_img]:w-5">
                                            {tech.icon}
                                        </span>
                                        {tech.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Technologies;
