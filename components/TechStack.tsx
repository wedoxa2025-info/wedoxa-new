import React from 'react';
import { Database, Server, Atom, Wind, Figma, Github } from 'lucide-react';

const technologies = [
  {
    name: 'React.js',
    icon: <Atom size={48} strokeWidth={1.5} />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-900/30',
    borderColor: 'hover:border-cyan-500/50',
    shadowColor: 'hover:shadow-cyan-500/20',
    description: 'Used for building the interactive user interface of Lagan, ensuring a smooth, single-page application experience.'
  },
  {
    name: 'Node.js',
    icon: <Server size={48} strokeWidth={1.5} />,
    color: 'text-green-500',
    bgColor: 'bg-green-900/30',
    borderColor: 'hover:border-green-500/50',
    shadowColor: 'hover:shadow-green-500/20',
    description: 'Powers the backend API, handling concurrent booking requests efficiently with its event-driven architecture.'
  },
  {
    name: 'PostgreSQL',
    icon: <Database size={48} strokeWidth={1.5} />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-900/30',
    borderColor: 'hover:border-blue-500/50',
    shadowColor: 'hover:shadow-blue-500/20',
    description: 'A robust relational database used to store complex bus schedules, seat mappings, and user data securely.'
  },
  {
    name: 'Tailwind CSS',
    icon: <Wind size={48} strokeWidth={1.5} />,
    color: 'text-teal-400',
    bgColor: 'bg-teal-900/30',
    borderColor: 'hover:border-teal-500/50',
    shadowColor: 'hover:shadow-teal-500/20',
    description: 'Enabled rapid UI development with a utility-first approach, maintaining design consistency across the platform.'
  },
   {
    name: 'Figma',
    icon: <Figma size={48} strokeWidth={1.5} />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-900/30',
    borderColor: 'hover:border-purple-500/50',
    shadowColor: 'hover:shadow-purple-500/20',
    description: 'Our primary design tool for prototyping user flows and high-fidelity mockups before a single line of code was written.'
  },
  {
    name: 'Git & GitHub',
    icon: <Github size={48} strokeWidth={1.5} />,
    color: 'text-white',
    bgColor: 'bg-gray-800',
    borderColor: 'hover:border-gray-400/50',
    shadowColor: 'hover:shadow-gray-500/20',
    description: 'Ensured seamless collaboration between the team, with CI/CD pipelines for automated testing and deployment.'
  }
];

const TechStack: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">The Tech Behind Lagan</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                We didn't just build a website; we engineered a scalable platform using industry-standard technologies.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
                <div
                    key={index}
                    className={`glass-panel relative h-80 rounded-2xl overflow-hidden border border-gray-700/50 cursor-pointer group transition-all duration-300 hover:-translate-y-2 ${tech.borderColor} shadow-lg ${tech.shadowColor}`}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40">
                        <div className={`absolute -right-10 -top-10 w-48 h-48 rounded-full blur-3xl ${tech.bgColor}`}></div>
                        <div className={`absolute -left-10 -bottom-10 w-32 h-32 rounded-full blur-3xl ${tech.bgColor}`}></div>
                    </div>

                    {/* Default State - Prominent Icon */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-transform duration-500 group-hover:-translate-y-full ease-in-out z-10">
                        <div className={`mb-6 p-6 rounded-3xl ${tech.bgColor} ring-1 ring-white/10 ${tech.color} shadow-2xl group-hover:scale-110 transition-transform duration-500 relative`}>
                             {/* Inner glow */}
                             <div className={`absolute inset-0 rounded-3xl blur-md opacity-40 ${tech.color} bg-current`}></div>
                             <div className="relative z-10">
                                {tech.icon}
                             </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{tech.name}</h3>
                        <div className="mt-4 w-12 h-1 bg-gray-700 rounded-full group-hover:w-16 transition-all duration-500"></div>
                    </div>

                    {/* Hover State - Slide Up Description */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-wedoxa-900/95 backdrop-blur-xl text-center transition-transform duration-500 translate-y-full group-hover:translate-y-0 ease-in-out border-t border-gray-700 z-20">
                         <div className={`mb-4 ${tech.color} transform scale-75 opacity-100`}>
                            {React.cloneElement(tech.icon as React.ReactElement<any>, { size: 32 })}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">{tech.name}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed font-medium">
                            {tech.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;