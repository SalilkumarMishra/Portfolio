export default function Biography() {
    return (
        <section id="biography" className="py-12">
            <div className="mb-8 inline-block">
                <h2 className="text-2xl font-serif text-white tracking-tight pb-2 border-b border-white/20">biography</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start mt-2">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-2xl overflow-hidden bg-[#1a1a1a] subtle-border group border border-white/5">
                    <img
                        src="/avatar.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover grayscale opacity-80 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:opacity-100"
                    />
                </div>

                <div className="flex-1 pt-1">
                    <p className="text-[#888] text-sm md:text-base leading-relaxed mb-4">
                        <span className="text-[3.25rem] font-serif text-[#ddd] float-left mr-3 mt-1.5 leading-[0.75]">I</span>
                        'm Salil Mishra, a final-year Computer Science student at Lovely Professional University. I specialize in full-stack web development, software engineering, and UI/UX design, building scalable applications with elegant interfaces and efficient backend architectures.
                    </p>
                    <p className="text-[#888] text-sm md:text-base leading-relaxed">
                        With a strong foundation in Data Structures and Algorithms, I have developed multiple real-world applications using modern technologies like React, Node.js, and Django. I am constantly exploring new tools and AI-assisted workflows to build better software.
                    </p>
                </div>
            </div>
        </section>
    );
}
