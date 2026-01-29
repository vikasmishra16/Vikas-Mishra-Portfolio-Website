import React, { useState, useEffect } from 'react';
import WarpGrid from './components/WarpGrid';
import {
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  Github,
  Linkedin,
  Mail,
  FileText,
  Star,
  Zap
} from 'lucide-react';
import {
  SUMMARY,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  PUBLICATIONS,
  ACHIEVEMENTS,
  EDUCATION,
  SOCIALS
} from './constants';

const Marquee = ({ text, repeat = 10, bg = "bg-[#ccff00]", textCol = "text-black" }: { text: string, repeat?: number, bg?: string, textCol?: string }) => (
  <div className={`w-full ${bg} ${textCol} py-2 border-y-2 border-black overflow-hidden relative z-20`}>
    <div className="marquee-container">
      <div className="marquee-content font-mono font-bold text-lg uppercase tracking-widest">
        {Array(repeat).fill(text).map((t, i) => (
          <span key={i} className="mx-8">{t}</span>
        ))}
      </div>
      <div className="marquee-content font-mono font-bold text-lg uppercase tracking-widest">
        {Array(repeat).fill(text).map((t, i) => (
          <span key={i} className="mx-8">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <WarpGrid />

      {/* Navigation / Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/80 backdrop-blur border-b-2 border-white/20' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-display font-black text-2xl tracking-tighter border-2 border-white px-2 bg-black hover:bg-[#ccff00] hover:text-black hover:border-black transition-colors cursor-pointer select-none">
            VM.SYS
          </div>
          <div className="hidden md:flex gap-6">
            {['EXPERIENCE', 'PROJECTS', 'SKILLS', 'CONTACT'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono font-bold text-sm text-gray-400 hover:text-[#ccff00] transition-all hover:decoration-[#ccff00] hover:underline hover:decoration-4"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${SOCIALS.email}`}
            className="hidden md:block bg-white text-black font-mono text-sm px-6 py-2 hover:bg-[#ccff00] transition-colors border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_#333] hover:shadow-[4px_4px_0px_0px_#fff]"
          >
            LET'S TALK
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-24 h-24 bg-[#ccff00] rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-[5%] w-32 h-32 bg-[#ff00ff] rounded-full blur-xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 border-2 border-white bg-black px-4 py-1 font-mono text-sm font-bold shadow-[4px_4px_0px_0px_#333]">
            <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-ping"></span>
            AVAILABLE FOR HIRE
          </div>

          <h1 className="font-display font-black text-[12vw] leading-[0.8] tracking-tighter hover-trigger text-white break-words">
            VIKAS<br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500"
              style={{ WebkitTextStroke: '1px white' }}
            >
              MISHRA
            </span>
          </h1>

          <div className="mt-12 md:flex justify-between items-end">
            <div className="max-w-xl bg-[#111] border-2 border-white p-6 hard-shadow mb-8 md:mb-0">
              <p className="font-mono text-lg md:text-xl leading-relaxed text-gray-300">
                {SUMMARY}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-display font-bold text-3xl md:text-4xl flex flex-wrap items-center gap-2">
                AI <span className="text-[#ff00ff]">&</span> ML <span className="text-xs font-mono bg-[#ccff00] text-black px-2 py-1 rotate-3 border border-black whitespace-nowrap">ENGINEER</span>
              </div>
              <div className="flex gap-4">
                <a href={SOCIALS.github} target="_blank" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all"><Github /></a>
                <a href={SOCIALS.linkedin} target="_blank" className="p-3 border-2 border-white hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all"><Linkedin /></a>
                <a
                  href={SOCIALS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[#ccff00] text-[#ccff00] font-bold hover:bg-[#ccff00] hover:text-black transition-all flex items-center gap-2 shadow-[4px_4px_0px_0px_#333] hover:shadow-[4px_4px_0px_0px_#fff]"
                >
                  RESUME <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full transform -rotate-1 origin-bottom-right">
          <Marquee text="+++ ARTIFICIAL INTELLIGENCE +++ MACHINE LEARNING +++ FULL STACK +++" bg="bg-[#ccff00]" textCol="text-black" />
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t-4 border-white bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-black text-5xl md:text-8xl mb-16 relative inline-block text-white">
            EXP.
            <span className="absolute -top-4 -right-8 text-xl md:text-2xl bg-[#ff00ff] text-white border border-white font-mono px-2 py-1 rotate-12">01</span>
          </h2>

          <div className="grid gap-12">
            {EXPERIENCE.map((job, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute left-0 top-0 w-full h-full bg-[#ff00ff] translate-x-2 translate-y-2 border-2 border-white hidden group-hover:block transition-all -z-10"></div>
                <div className="border-2 border-white bg-[#111] p-6 md:p-12 hover:-translate-y-1 hover:-translate-x-1 transition-transform">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="font-display font-black text-2xl md:text-4xl uppercase text-white leading-tight">{job.role}</h3>
                      <div className="font-mono font-bold text-lg md:text-xl text-[#ccff00] mt-1">{job.company}</div>
                    </div>
                    <div className="font-mono font-bold border-2 border-white px-4 py-2 bg-[#222] text-gray-300 inline-block self-start text-sm md:text-base">
                      {job.period}
                    </div>
                  </div>
                  <ul className="space-y-4 font-mono text-sm md:text-base border-t-2 border-dashed border-gray-700 pt-6">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="min-w-[10px] mt-1.5 h-2.5 w-2.5 bg-[#ccff00] flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee text="BUILDING THE FUTURE // BREAKING THE CODE // " bg="bg-[#ff00ff]" textCol="text-white" />

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#111] border-b-4 border-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-display font-black text-5xl md:text-8xl leading-none text-white">
              THE<br />WORKS
            </h2>
            <p className="font-mono max-w-sm text-right mt-6 md:mt-0 text-gray-400">
              A COLLECTION OF EXPERIMENTS, SYSTEMS, AND DEPLOYED APPLICATIONS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="bg-[#050505] border-2 border-white p-6 flex flex-col h-full hard-shadow hover-trigger group">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-12 h-12 bg-white text-black flex items-center justify-center group-hover:bg-[#ccff00] transition-colors flex-shrink-0">
                    <Cpu size={24} />
                  </div>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="cursor-pointer hover:scale-125 transition-transform text-white group-hover:text-[#ccff00]" />
                    </a>
                  ) : (
                    <ExternalLink className="cursor-pointer opacity-20 text-white" />
                  )}
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 leading-tight text-white">{project.title}</h3>
                <p className="font-mono text-sm mb-6 flex-grow border-l-2 border-[#ccff00] pl-3 text-gray-400">
                  {project.description.join(' ')}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-gray-800">
                  {project.tech.split(', ').map((t, i) => (
                    <span key={i} className="text-xs font-bold uppercase bg-[#222] text-[#ccff00] px-2 py-1 border border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
        {/* Abstract background lines */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #333 25%, transparent 25%, transparent 50%, #333 50%, #333 75%, transparent 75%, transparent)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="font-display font-black text-5xl md:text-8xl text-center mb-20 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
            ARSENAL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((cat, idx) => (
              <div key={idx} className={`border border-white/20 p-6 bg-[#111] hover:bg-[#1a1a1a] hover:border-[#ccff00] transition-all ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <h3 className="font-mono text-[#ccff00] text-sm mb-4 uppercase tracking-widest border-b border-white/10 pb-2 flex items-center gap-2">
                  <Zap size={14} /> {cat.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item, i) => (
                    <span key={i} className={`font-display font-bold text-white ${idx === 0 ? 'text-xl md:text-4xl' : 'text-lg'}`}>
                      {item}<span className="text-[#ff00ff]">.</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Education - Split View */}
      <section id="publications" className="grid grid-cols-1 md:grid-cols-2 border-t-4 border-white">
        <div className="bg-[#ccff00] border-b-2 md:border-b-0 md:border-r-2 border-black p-6 md:p-24 text-black overflow-hidden">
          <h2 className="font-display font-black text-3xl md:text-4xl mb-12 flex items-center gap-4">
            <Star className="fill-black flex-shrink-0" size={32} />
            PUBLICATIONS
          </h2>
          <div className="space-y-8">
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="border-b-2 border-black pb-6 last:border-0 group">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold text-xl md:text-2xl hover:underline decoration-4 decoration-black mb-2 block group-hover:translate-x-2 transition-transform break-words"
                >
                  {pub.title} <ArrowRight className="inline ml-2 w-5 h-5 -rotate-45" />
                </a>
                <div className="font-mono font-bold flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base">
                  <span>{pub.conference}</span>
                  <span>{pub.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111] p-6 md:p-24 text-white overflow-hidden">
          <h2 className="font-display font-black text-2xl md:text-4xl mb-12 flex items-center gap-4">
            <Terminal className="fill-white flex-shrink-0" size={32} />
            EDUCATION & HONORS
          </h2>

          <div className="mb-12">
            <h3 className="font-mono text-sm text-gray-500 mb-6 uppercase tracking-widest">Education</h3>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="mb-6 border-l-4 border-[#ff00ff] pl-6 hover:bg-white/5 p-2 rounded-r transition-colors">
                <div className="font-display font-bold text-xl md:text-2xl">{edu.institution}</div>
                <div className="font-mono text-base md:text-lg text-gray-300">{edu.degree}</div>
                <div className="font-mono text-xs md:text-sm text-gray-500 mt-1">{edu.year} // {edu.score}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-mono text-sm text-gray-500 mb-6 uppercase tracking-widest">Achievements</h3>
            <ul className="space-y-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-3 font-bold font-display text-base md:text-lg">
                  <div className="w-4 h-4 bg-[#ccff00] border border-transparent shadow-[0_0_10px_#ccff00] mt-1.5 flex-shrink-0"></div>
                  {ach.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-black text-white pt-24 pb-12 px-6 relative overflow-hidden border-t-4 border-white">
        {/* Giant Text Background */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between opacity-10 pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-black leading-none whitespace-nowrap text-white">GET IN TOUCH</span>
          <span className="text-[20vw] font-black leading-none whitespace-nowrap text-right text-white">START NOW</span>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-mono text-[#ccff00] mb-6">READY TO DEPLOY?</p>
          <h2 className="font-display font-black text-4xl md:text-8xl mb-12 leading-tight">
            LET'S BUILD THE<br /> IMPOSSIBLE.
          </h2>

          <a href={`mailto:${SOCIALS.email}`} className="inline-block bg-[#111] text-white font-display font-black text-xl md:text-4xl px-8 py-4 md:px-12 md:py-6 border-2 border-white hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black transition-all transform hover:-rotate-2 hard-shadow">
            SAY HELLO_
          </a>

          <div className="flex justify-center gap-8 mt-16 mb-24">
            <a href={SOCIALS.linkedin} target="_blank" className="text-white hover:text-[#0077b5] hover:scale-110 transition-all"><Linkedin size={32} /></a>
            <a href={SOCIALS.github} target="_blank" className="text-white hover:text-[#6e5494] hover:scale-110 transition-all"><Github size={32} /></a>
            <a href={`mailto:${SOCIALS.email}`} className="text-white hover:text-[#ea4335] hover:scale-110 transition-all"><Mail size={32} /></a>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-sm text-gray-400">
            <p>&copy; 2025 VIKAS MISHRA. ALL RIGHTS RESERVED.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-2">
              LOCATION: {SOCIALS.location} <MapPin size={14} />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper components
const MapPin = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const ExternalLink = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

export default App;