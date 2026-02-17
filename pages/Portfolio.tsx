import React from 'react';
import Projects from '../components/Projects';
import { Rocket } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-white sm:text-5xl">Our Work</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            From assignments to enterprise-grade applications.
          </p>
        </div>
        
        <Projects />

        {/* Coming Soon Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-dashed border-gray-700 p-12 text-center bg-gray-900/30">
            <Rocket className="mx-auto h-12 w-12 text-gray-500 mb-4" />
            <h3 className="text-xl font-medium text-white">More Projects Cooking</h3>
            <p className="text-gray-400 mt-2">
              We have several exciting projects in the pipeline, including an e-commerce platform for local vendors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;