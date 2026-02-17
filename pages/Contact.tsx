import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-white sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Have an idea? Let's build it together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-wedoxa-900/50 rounded-lg text-wedoxa-400 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email Us</h4>
                    <p className="text-gray-400 mt-1">wedoxa2025@gmail.com</p>
                    <p className="text-gray-500 text-sm mt-1">We usually reply within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                   <div className="p-3 bg-wedoxa-900/50 rounded-lg text-wedoxa-400 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400 mt-1">Nintavur, Sri Lanka</p>
                    <p className="text-gray-500 text-sm mt-1">Available for remote work worldwide.</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="p-3 bg-wedoxa-900/50 rounded-lg text-wedoxa-400 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Working Hours</h4>
                    <p className="text-gray-400 mt-1">Flexible Student Hours</p>
                    <p className="text-gray-500 text-sm mt-1">We code late into the night!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-wedoxa-900/20 to-wedoxa-600/20 rounded-2xl border border-wedoxa-500/20">
              <p className="text-wedoxa-200 italic text-center">
                "We are eager to apply our knowledge to real world problems. Your project helps us grow!"
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-2xl border border-gray-700">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. We will get back to you shortly at {formData.email}.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-wedoxa-500 hover:text-white transition-colors underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-wedoxa-500 focus:ring-1 focus:ring-wedoxa-500 transition-colors"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-wedoxa-500 focus:ring-1 focus:ring-wedoxa-500 transition-colors"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-wedoxa-500 focus:ring-1 focus:ring-wedoxa-500 transition-colors"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="" className="bg-gray-900">Select a topic</option>
                    <option value="web" className="bg-gray-900">Web Development</option>
                    <option value="app" className="bg-gray-900">Mobile App</option>
                    <option value="video" className="bg-gray-900">Video Editing</option>
                    <option value="graphic" className="bg-gray-900">Graphic Designing</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-wedoxa-500 focus:ring-1 focus:ring-wedoxa-500 transition-colors"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-wedoxa-600 hover:bg-wedoxa-500 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center shadow-lg hover:shadow-wedoxa-500/25"
                >
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;