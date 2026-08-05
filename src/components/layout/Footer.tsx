import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {

    return (
        <footer className="mt-12 py-12 border-t border-[#222]">
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex items-center gap-8 text-[#888]">
                    <a href="https://www.linkedin.com/in/salilmishra249/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer"><Linkedin className="w-5 h-5" /></a>
                    <a href="https://github.com/SalilkumarMishra" target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer"><Github className="w-5 h-5" /></a>
                    <a href="mailto:salilmishra249@gmail.com" className="hover:text-white transition-colors cursor-pointer"><Mail className="w-5 h-5" /></a>
                </div>

                <div className="text-center font-sans tracking-tight">
                    <p className="text-[#888] text-sm md:text-base font-medium">Designed & Developed by <span className="text-white font-bold">Salil Mishra</span></p>
                    <p className="text-[#555] text-xs md:text-sm mt-1">Built with React, Tailwind CSS & Framer Motion.</p>
                </div>
            </div>
        </footer>
    );
}
