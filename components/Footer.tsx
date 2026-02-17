import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <span className="text-2xl font-display font-bold text-white tracking-tighter mb-4 block">
              wedoxa<span className="text-wedoxa-500">.</span>
            </span>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering businesses with student-driven innovation. We turn academic knowledge into practical digital solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2 text-wedoxa-500" />
                <a href="mailto:wedoxa2025@gmail.com">wedoxa2025@gmail.com</a>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-wedoxa-500" />
                <span>Nintavur, Sri Lanka</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
             <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-wedoxa-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-wedoxa-500 transition-colors">Team</Link></li>
              <li><Link to="/portfolio" className="hover:text-wedoxa-500 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-wedoxa-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Wedoxa. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React & Gemini AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;