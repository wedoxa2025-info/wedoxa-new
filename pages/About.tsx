import React from 'react';
import Team from '../components/Team';
import TechStack from '../components/TechStack';
import { BookOpen, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-white sm:text-5xl">Our Story</h1>
          <div className="w-24 h-1 bg-wedoxa-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400">
            Wedoxa started in a university library with a simple idea: bringing academic excellence to real-world IT solutions.
          </p>
        </div>
      </div>

      {/* Values/Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl text-center border border-gray-700">
            <div className="mx-auto w-12 h-12 bg-wedoxa-900/50 rounded-full flex items-center justify-center mb-4 text-wedoxa-400">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Student Led</h3>
            <p className="text-gray-400">Founded by undergraduates from SLIIT and IIT, ensuring fresh perspectives.</p>
          </div>
          <div className="glass-panel p-8 rounded-2xl text-center border border-gray-700">
            <div className="mx-auto w-12 h-12 bg-wedoxa-900/50 rounded-full flex items-center justify-center mb-4 text-wedoxa-400">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Innovative</h3>
            <p className="text-gray-400">We don't just copy code; we engineer solutions using the latest tech stacks.</p>
          </div>
          <div className="glass-panel p-8 rounded-2xl text-center border border-gray-700">
            <div className="mx-auto w-12 h-12 bg-wedoxa-900/50 rounded-full flex items-center justify-center mb-4 text-wedoxa-400">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Academic Rigor</h3>
            <p className="text-gray-400">Applying university-level software engineering standards to your projects.</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Team Section */}
      <div className="text-center mt-20 mb-10">
        <h2 className="text-2xl font-display font-bold text-white">The Founders</h2>
        <p className="text-gray-400 mt-2">The brains behind the operation</p>
      </div>
      <Team />
    </div>
  );
};

export default About;