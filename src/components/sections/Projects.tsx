import { Github, ExternalLink, Eye, X } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const projects = [
        {
            title: 'Nexus Health',
            description: 'A modern, full-stack healthcare platform designed to bridge the gap between patients and medical professionals.',
            tech: ['Next.js', 'React', 'HealthTech'],
            github: 'https://github.com/shivanshm1726/NexusHealth',
            link: 'https://www.nexus-health.me',
            icon: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
        },
        {
            title: 'TheFleetFly',
            description: 'A robust fleet management solution designed to handle and orchestrate vehicle tracking logistics.',
            tech: ['React', 'Node.js', 'Logistics'],
            github: 'https://github.com/shivanshm1726/thefleetfly',
            link: 'https://www.thefleetfly.xyz/',
            icon: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
        },
        {
            title: 'Expense Tracker',
            description: 'A comprehensive Java-based application for tracking and managing personal financial expenditures.',
            tech: ['Java', 'Spring Boot', 'Postgre SQL'],
            github: 'https://github.com/shivanshm1726/expense-tracker',
            link: 'https://track-thecashflow.vercel.app/',
            icon: 'bg-green-500/10 text-green-500 border-green-500/20'
        }
    ];

    return (
        <section id="projects" className="py-12">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-serif text-white tracking-tight">Projects</h2>
                <span className="text-[#333] font-mono text-xl">#</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <div key={i} className="card-bg p-6 group flex flex-col h-full">
                        {/* Inline Iframe Preview */}
                        {project.link !== '#' && (
                            <div 
                                className="w-full h-48 mb-6 rounded-xl overflow-hidden relative border border-[#333] group-hover:border-[#555] transition-colors cursor-pointer"
                                onClick={() => setPreviewUrl(project.link)}
                            >
                                <div className="absolute inset-0 z-20 hover:bg-white/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium backdrop-blur-md shadow-xl transition-transform hover:scale-105">
                                        <Eye className="w-4 h-4" /> Expand Preview
                                    </div>
                                </div>
                                <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0a0a0a]">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-[#555] border-t-white rounded-full animate-spin"></div>
                                    </div>
                                </div>
                                <iframe
                                    src={project.link}
                                    className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] border-0 z-10 pointer-events-none bg-white"
                                    title={`${project.title} preview`}
                                    sandbox="allow-same-origin allow-scripts"
                                    tabIndex={-1}
                                    loading="lazy"
                                />
                            </div>
                        )}

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
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors" onClick={e => e.stopPropagation()}>
                                    <Github className="w-5 h-5" />
                                </a>
                                {project.link !== '#' && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors" title="Open Link" onClick={e => e.stopPropagation()}>
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-[#888] text-sm leading-relaxed mb-6 flex-1">
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
                ))}
            </div>

            {/* Live Preview Modal */}
            {previewUrl && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm transition-all duration-300 animate-in fade-in zoom-in-95"
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
                        
                        {/* Iframe Container */}
                        <div className="flex-1 w-full bg-[#0a0a0a] relative">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-6 h-6 border-2 border-[#555] border-t-white rounded-full animate-spin"></div>
                                    <span className="text-[#555] font-mono text-sm">Loading Preview...</span>
                                </div>
                            </div>
                            <iframe 
                                src={previewUrl} 
                                className="absolute inset-0 w-full h-full border-0 relative z-10 bg-white"
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
