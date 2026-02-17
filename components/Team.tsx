import React from 'react';
import { GraduationCap, Linkedin, Github, Cpu, Terminal } from 'lucide-react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  {
    id: '1',
    name: 'Haqqani MZA',
    role: 'Co-Founder & Lead Developer',
    university: 'Sri Lanka Institute of Information Technology (SLIIT)',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'The visionary behind Wedoxa. A SLIIT undergraduate passionate about scalable web architectures and solving real-world problems through code. Started Wedoxa to bridge the gap between academic theory and industry practice.'
  },
  {
    id: '2',
    name: 'Ahshaan HM',
    role: 'Co-Founder & Tech Strategist',
    university: 'Institute Of Information Technology (IIT)',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'IIT undergraduate bringing strategic technical direction. Focused on user experience, modern frontend ecosystems, and ensuring every product meets high usability standards.'
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wedoxa-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {members.map((member) => (
            <div 
              key={member.id}
              className="group relative"
            >
              {/* Card Container with animated border gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-wedoxa-500 via-purple-500 to-wedoxa-500 rounded-2xl opacity-30 group-hover:opacity-100 blur-sm transition-all duration-500 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]" />
              
              <div className="relative h-full bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center text-center border border-gray-800 group-hover:border-transparent transition-all duration-300 shadow-2xl">
                
                {/* Profile Image Area */}
                <div className="relative mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Decorative orbital rings */}
                  <div className="absolute inset-0 -m-4 border border-wedoxa-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-0 -m-4 border border-dashed border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  
                  {/* Image Container */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-800 shadow-xl">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-wedoxa-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Corner Icon */}
                  <div className="absolute -bottom-2 -right-2 bg-gray-800 p-2 rounded-full border border-gray-700 text-wedoxa-400 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {member.id === '1' ? <Terminal size={18} /> : <Cpu size={18} />}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full relative flex-grow flex flex-col">
                  <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-wedoxa-400 group-hover:to-purple-400 transition-all duration-300">
                    {member.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-wedoxa-500/10 text-wedoxa-400 text-xs font-semibold uppercase tracking-wider border border-wedoxa-500/20">
                      {member.role}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8 text-sm border-t border-b border-gray-800/50 py-6 group-hover:border-wedoxa-500/20 transition-colors duration-300 flex-grow">
                    {member.bio}
                  </p>

                  {/* Footer Info */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full mt-auto">
                     <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-300 transition-colors bg-gray-950 px-3 py-2 rounded-lg border border-gray-800 w-full sm:w-auto justify-center sm:justify-start">
                        <GraduationCap size={14} className="text-purple-500 shrink-0" />
                        <span className="truncate max-w-[180px]">{member.university.split('(')[0]}</span>
                     </div>

                     <div className="flex gap-3">
                        <a href="#" className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-wedoxa-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20" aria-label="LinkedIn">
                           <Linkedin size={18} />
                        </a>
                        <a href="#" className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20" aria-label="GitHub">
                           <Github size={18} />
                        </a>
                     </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Team;