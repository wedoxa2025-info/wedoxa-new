import React from 'react';
import { ArrowRight, Cpu, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-wedoxa-dark">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-wedoxa-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-wedoxa-accent/10 rounded-full blur-[100px]"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 text-gray-700 opacity-20 animate-bounce delay-1000 hidden lg:block">
          <Code size={48} />
        </div>
        <div className="absolute bottom-1/3 right-10 text-wedoxa-500 opacity-10 animate-bounce delay-700 hidden lg:block">
          <Cpu size={64} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-wedoxa-accent opacity-10 animate-pulse delay-500 hidden lg:block">
           <Zap size={32} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-wedoxa-900/30 border border-wedoxa-500/30 mb-6 backdrop-blur-sm hover:border-wedoxa-500/50 transition-all cursor-default hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              <span className="text-wedoxa-100 text-sm font-medium">Accepting new projects</span>
            </div>
            
            <h1 className="text-4xl tracking-tight font-display font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              From Campus to <br />
              <span className="gradient-text animate-[text-shimmer_3s_ease-in-out_infinite]">Cloud Solutions</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Wedoxa is a powerhouse of student innovation based in <span className="text-white font-medium">Nintavur</span>. Founded by undergraduates from SLIIT and IIT, we combine academic rigor with modern tech stacks to build affordable, high-quality digital products.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-wedoxa-600 hover:bg-wedoxa-700 md:py-4 md:text-lg md:px-10 transition-all hover:scale-105 shadow-[0_0_20px_rgba(2,132,199,0.4)]">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-full text-gray-300 hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-all hover:border-gray-400">
                Let's Talk
              </Link>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              {/* Glowing Background for Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-wedoxa-500 to-wedoxa-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative block w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl group">
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">wedoxa_init.ts</div>
                </div>
                
                <div className="p-6 font-mono text-sm text-gray-300 space-y-4 bg-gray-900/90 backdrop-blur relative">
                  {/* Scanline Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-wedoxa-500/30 animate-[scan_3s_linear_infinite] shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>

                  <div className="flex items-center">
                    <span className="text-wedoxa-500 mr-2">$</span>
                    <span><span className="text-purple-400">const</span> location = <span className="text-green-400">"Nintavur"</span>;</span>
                  </div>
                  <div className="flex items-center">
                     <span className="text-wedoxa-500 mr-2">$</span>
                     <span><span className="text-purple-400">const</span> services = [</span>
                  </div>
                  <div className="pl-6 text-blue-300">
                    "Web_Dev",<br/>
                    "App_Dev",<br/>
                    "Video_Edit",<br/>
                    "Graphic_Design"<br/>
                  </div>
                  <div className="flex items-center">
                    <span className="text-wedoxa-500 mr-2">$</span>
                    <span>];</span>
                  </div>
                   <div className="flex items-center">
                    <span className="text-wedoxa-500 mr-2">$</span>
                    <span>startup.<span className="text-yellow-400">deploy</span>(<span className="text-green-400">"Lagan_App"</span>);</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-wedoxa-500 mr-2">$</span>
                    <span className="animate-pulse bg-gray-500 w-3 h-5 block"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;