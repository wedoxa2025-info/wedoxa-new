import React, { useRef, useState } from 'react';
import { ExternalLink, Bus, CheckCircle2, Globe, Loader2, ShoppingCart, Code } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'lagan',
    title: 'Lagan Bus Booking',
    description: 'Our flagship project. Lagan is a comprehensive web application designed to revolutionise the public transport sector in Sri Lanka. It features real-time seat availability, secure booking management, and an intuitive user interface for travelers, solving the chaos of manual booking.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'UX/UI'],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    status: 'Completed',
    demoUrl: '#'
  },
  {
    id: 'marketplace',
    title: 'Nintavur Marketplace',
    description: 'An upcoming multi-vendor e-commerce platform tailored for local businesses in Nintavur. This platform aims to bridge the gap between local sellers and digital consumers, providing a seamless shopping experience with integrated payment gateways and real-time inventory tracking.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-415522f96313?q=80&w=1000&auto=format&fit=crop',
    status: 'In Progress'
  }
];

const getProjectIcon = (id: string) => {
  switch (id) {
    case 'lagan': return <Bus size={24} aria-hidden="true" />;
    case 'marketplace': return <ShoppingCart size={24} aria-hidden="true" />;
    default: return <Code size={24} aria-hidden="true" />;
  }
};

const StatusBadge: React.FC<{ status: 'Completed' | 'In Progress' }> = ({ status }) => {
  const isCompleted = status === 'Completed';
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md shadow-lg border transition-colors duration-300 ${
      isCompleted 
        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
        : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    }`}>
      {isCompleted ? (
        <CheckCircle2 size={12} className="mr-1.5" aria-hidden="true" />
      ) : (
        <Loader2 size={12} className="mr-1.5 animate-spin" aria-hidden="true" />
      )}
      {status}
    </span>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation: range -2.5 to 2.5 degrees for a subtle 3D feel
    const rY = ((mouseX - width / 2) / width) * 5; 
    const rX = ((height / 2 - mouseY) / height) * 5;
    
    setRotation({ x: rX, y: rY });
    setCursorPos({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
        className="relative [perspective:1000px] group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
        <div 
          ref={cardRef}
          className="glass-panel rounded-2xl overflow-hidden border border-gray-700 group-hover:border-wedoxa-500/50 transition-all duration-100 ease-out shadow-lg group-hover:shadow-[0_0_40px_rgba(14,165,233,0.15)] relative transform-gpu"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
          }}
        >
          {/* Dynamic Shine/Glare Effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 mix-blend-soft-light"
            style={{
              background: `radial-gradient(circle 400px at ${cursorPos.x}px ${cursorPos.y}px, rgba(255,255,255,0.15), transparent 80%)`
            }}
          />

          {/* Ambient Glow Background on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-wedoxa-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="lg:grid lg:grid-cols-2 relative z-10">
            <div className="relative h-64 lg:h-full overflow-hidden bg-gray-900">
               {/* Image Parallax: Move slightly opposite to rotation for depth */}
               <div 
                 className="absolute inset-0 w-full h-full"
                 style={{
                   transform: `translateX(${rotation.y * -1.5}px) translateY(${rotation.x * -1.5}px) scale(1.1)`,
                   transition: 'transform 0.1s ease-out'
                 }}
               >
                 <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700 ease-out"
                  />
               </div>
              <div className="absolute top-4 left-4 z-20">
                <StatusBadge status={project.status} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent lg:hidden opacity-60"></div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-gray-900/40 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                    <div className="p-3 bg-wedoxa-900/50 border border-wedoxa-500/20 rounded-xl mr-4 text-wedoxa-400 group-hover:bg-wedoxa-900 group-hover:text-wedoxa-300 transition-colors duration-300">
                        {getProjectIcon(project.id)}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-wedoxa-100 transition-colors">{project.title}</h3>
                        <p className="text-xs text-wedoxa-500 uppercase tracking-widest font-semibold mt-1">
                          {project.id === 'lagan' ? 'Flagship Product' : 'Upcoming Release'}
                        </p>
                    </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-wedoxa-500/30 transition-colors cursor-default hover:bg-gray-700">
                        {tag}
                    </span>
                    ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                    <button 
                        className="inline-flex items-center px-6 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-wedoxa-50 hover:text-wedoxa-600 transition-colors text-sm shadow-lg shadow-white/5 hover:shadow-white/20 transform active:scale-95"
                        aria-label={`View case study for ${project.title}`}
                    >
                        View Case Study <ExternalLink size={16} className="ml-2" aria-hidden="true" />
                    </button>
                    {project.demoUrl && (
                    <a 
                        href={project.demoUrl}
                        className="inline-flex items-center px-6 py-2.5 bg-wedoxa-600/20 text-wedoxa-300 border border-wedoxa-500/30 rounded-lg font-medium hover:bg-wedoxa-600 hover:text-white transition-all duration-300 text-sm backdrop-blur-sm hover:shadow-wedoxa-500/30 transform active:scale-95"
                        aria-label={`View live demo of ${project.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Live Demo <Globe size={16} className="ml-2" aria-hidden="true" />
                    </a>
                    )}
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-1 max-w-5xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;