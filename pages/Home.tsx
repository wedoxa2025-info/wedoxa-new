import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <Services />
      
      {/* Mini CTA Section */}
      <section className="py-16 bg-gradient-to-b from-wedoxa-dark to-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Ready to start your project?</h2>
          <p className="text-gray-400 mb-8">We are currently accepting new challenges for the upcoming semester break.</p>
          <a href="/contact" className="inline-block bg-wedoxa-900 text-wedoxa-100 px-6 py-2 rounded-lg font-medium border border-wedoxa-700 hover:bg-wedoxa-800 transition-colors">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;