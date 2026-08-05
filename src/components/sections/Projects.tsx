import { Github, ExternalLink, X, Maximize2 } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const projects = [
        {
            title: 'SpreeWise',
            description: 'SpreeWise is a Splitwise-inspired expense management platform built to simplify shared finances for groups. It enables users to create groups, manage memberships, record shared expenses, settle balances, import expenses through CSV files, and handle multi-currency transactions. The application focuses on scalable backend architecture, clean user experience, and accurate expense settlement.',
            tech: ['React', 'TypeScript', 'Django', 'Django REST Framework', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
            github: 'https://github.com/SalilkumarMishra/spreewise',
            link: 'https://spreewise-xi.vercel.app/login',
            icon: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
        },
        {
            title: 'NutriNest',
            description: 'NutriNest is a modern full-stack e-commerce platform focused on healthy food products. It provides secure authentication, product browsing, shopping cart functionality, order management, Stripe payment integration, and a responsive user interface designed to deliver a seamless shopping experience across devices.',
            tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
            github: 'https://github.com/SalilkumarMishra/NUTRINEST',
            link: 'https://nutrinest-frontend.vercel.app/',
            icon: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
        }
    ];

    return (
        <section id="projects" className="py-12">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-serif text-white tracking-tight">Projects</h2>
                <span className="text-[#333] font-mono text-xl">#</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {projects.map((project, i) => (
                    <div key={i} className="card-bg overflow-hidden group">
                        {/* Site Preview Thumbnail */}
                        {project.link !== '#' && (
                            <div
                                className="relative w-full h-[220px] overflow-hidden border-b border-[#222222] cursor-pointer"
                                onClick={() => setPreviewUrl(project.link)}
                            >
                                {/* Loading spinner behind the iframe */}
                                <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0e0e0e]">
                                    <div className="w-5 h-5 border-2 border-[#333] border-t-[#888] rounded-full animate-spin"></div>
                                </div>
                                {/* Scaled iframe */}
                                <iframe
                                    src={project.link}
                                    className="absolute top-0 left-0 w-[1440px] h-[900px] border-0 z-10 pointer-events-none bg-white"
                                    style={{ transform: 'scale(0.5)', transformOrigin: 'top left' }}
                                    title={`${project.title} preview`}
                                    sandbox="allow-same-origin allow-scripts"
                                    tabIndex={-1}
                                    loading="lazy"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium border border-white/20">
                                        <Maximize2 className="w-4 h-4" /> Expand Preview
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Card Content */}
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${project.icon}`}>
                                        <span className="font-mono font-bold text-sm tracking-tighter">
                                            {project.title.substring(0, 2).toUpperCase()}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    {project.link !== '#' && (
                                        <a href={project.link} target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-[#888] text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="flex gap-2 flex-wrap mt-auto">
                                {project.tech.map(tech => (
                                    <span key={tech} className="px-2 py-1 rounded bg-[#1a1a1a] text-[#555] font-mono text-[10px] tracking-widest uppercase">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full-screen Preview Modal */}
            {previewUrl && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
                    onClick={() => setPreviewUrl(null)}
                >
                    <div
                        className="relative w-full max-w-6xl h-[85vh] bg-[#121212] border border-[#333] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Browser-like Header */}
                        <div className="flex justify-between items-center px-4 py-3 border-b border-[#333] bg-[#1a1a1a]">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="bg-black/50 px-3 py-1 rounded-md border border-[#333]">
                                    <span className="text-xs font-mono text-[#888]">{previewUrl}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setPreviewUrl(null)}
                                className="text-[#888] hover:text-white bg-[#222] hover:bg-[#333] p-1 rounded-md transition-colors cursor-pointer"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Iframe */}
                        <div className="flex-1 w-full bg-[#0a0a0a] relative">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-6 h-6 border-2 border-[#555] border-t-white rounded-full animate-spin"></div>
                                    <span className="text-[#555] font-mono text-sm">Loading Preview...</span>
                                </div>
                            </div>
                            <iframe
                                src={previewUrl}
                                className="absolute inset-0 w-full h-full border-0 z-10 bg-white"
                                title="Project Preview"
                                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

