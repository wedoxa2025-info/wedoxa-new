import React from 'react';
import { Globe, Smartphone, Palette, Database, Video, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8 text-wedoxa-500" />,
    title: 'Web Development',
    description: 'Modern, responsive websites built with React, Next.js, and Tailwind CSS. We prioritize speed and SEO.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-wedoxa-accent" />,
    title: 'App Development',
    description: 'Cross-platform mobile applications that offer seamless user experiences on both iOS and Android.',
  },
  {
    icon: <Palette className="h-8 w-8 text-pink-500" />,
    title: 'UI/UX Design',
    description: 'User-centric design interfaces that are intuitive, accessible, and visually stunning.',
  },
  {
    icon: <Database className="h-8 w-8 text-green-500" />,
    title: 'Backend Solutions',
    description: 'Robust server-side architectures, API development, and database management for scalable apps.',
  },
  {
    icon: <Video className="h-8 w-8 text-red-500" />,
    title: 'Video Editing',
    description: 'Professional video editing for commercials, social media content, and corporate presentations.',
  },
  {
    icon: <PenTool className="h-8 w-8 text-orange-500" />,
    title: 'Graphic Designing',
    description: 'Creative branding, logo design, and social media graphics to elevate your visual identity.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-wedoxa-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-1/4 left-0 w-64 h-64 bg-wedoxa-900/40 rounded-full blur-3xl"></div>
         <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-wedoxa-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-wedoxa-500 font-semibold tracking-wide uppercase text-sm">What We Do</h2>
          <h3 className="mt-2 text-3xl leading-8 font-display font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Leveraging university-grade knowledge to deliver professional IT and Creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-xl border border-gray-700 hover:border-wedoxa-500/50 hover:bg-gray-800/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-4 p-3 bg-gray-900 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gray-900/50">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;