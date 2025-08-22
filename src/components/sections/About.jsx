import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
    const frontendSkills = ["Web Development", "Networking", "Workplace Safety Monitoring", "Data Encoding", "Organizational & Documentation Skills "];
    const backendSkills = ["Attention to Detail", "Time Management ", "Problem-Solving & Troubleshooting", "Adaptability & Continuous Learning"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>           
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        List of my Technical & Soft Skills
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Frontend Skills */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Education
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">                            
                                <strong>Bachelor of Science in Computer Engineering</strong> <br /> Southern Luzon State University (2021-2025)
                        </ul>

                        <h3 className="text-xl font-bold mb-4">
                            <br />Relevant Coursework
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>TECH-ENHANCED AGRI-TOURISM: “TARA NA SA QUEZON” AN INTERACTIVE TERMINAL FOR PERSONALIZED AGRI-TOURISM NAVIGATION (Thesis)</strong>
                            </li>
                            <li>
                                <strong>PCB Layout/Breadboarding</strong>
                            </li>
                            <li>
                                <strong>Web development</strong>
                            </li>
                            <li>
                                <strong>Embedded System</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Work Experience
                        </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"><strong>IT Support / Technical Intern</strong><br />Quezon 1 electric Cooperative, Inc. (QUEZELCO 1) CORPLAN IT Division </h4><br />
                                <li>
                                    Setting up office PCs and workstations
                                </li>
                                <li>
                                    Configuring IP address of a computer
                                </li>
                                <li>
                                    Troubleshooted UTP cable and printer connections
                                </li>
                                <li>
                                   Performed database encoding 
                                </li>
                                <li>
                                    Assembled and cleaned CPUs
                                </li>
                                <li>
                                    Familiarized with WordPress: added content/events to the company website
                                </li>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};