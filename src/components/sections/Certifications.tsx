import { ExternalLink, Award } from 'lucide-react';

export default function Certifications() {
    const certifications = [
        {
            title: 'Advanced DSA & System Design',
            issuer: 'Programming Pathshala | August 2025',
            description: 'Completed rigorous training in advanced Data Structures, Algorithms, and System Design concepts. Focused on solving complex computational problems and designing scalable software architectures.',
            link: 'https://drive.google.com/file/d/1TM6DSjp66Az4amZ49Ith6T2HLX4KqQa-/view?usp=sharing',
            icon: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
        },
        {
            title: 'Data Structures & Algorithms – Self Paced',
            issuer: 'GeeksforGeeks | July 2025',
            description: 'Mastered core data structures and algorithmic paradigms through comprehensive learning. Strengthened problem-solving skills and optimized code performance.',
            link: 'https://www.geeksforgeeks.org/certificate/2b2b043347d803c4b7079748a4955ed8',
            icon: 'bg-green-500/10 text-green-500 border-green-500/20'
        },
        {
            title: 'Introduction to Hardware and Operating Systems',
            issuer: 'Coursera | September 2024',
            description: 'Gained a solid foundation in computer hardware components, system architecture, and operating system principles, including process management and memory allocation.',
            link: 'https://www.coursera.org/account/accomplishments/verify/AFA9VHME47Z2',
            icon: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
        }
    ];

    return (
        <section id="certifications" className="py-12">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-serif text-white tracking-tight">Certifications</h2>
                <span className="text-[#333] font-mono text-xl">#</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, i) => (
                    <div key={i} className="card-bg p-6 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 shrink-0 rounded-lg border flex items-center justify-center ${cert.icon}`}>
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-[#888] text-sm mt-1">{cert.issuer}</p>
                                </div>
                            </div>
                            <div className="flex gap-3 ml-4 shrink-0 sm:mt-1">
                                <a href={cert.link} target="_blank" rel="noreferrer" className="text-[#555] hover:text-white transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <p className="text-[#888] text-sm leading-relaxed">
                            {cert.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
