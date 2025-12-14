import React from 'react';
import { ArrowRight, Layout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Abstract Background Floating Elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-studio-accent/20 rounded-full blur-3xl animate-float-slow -z-10" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-studio-dark-accent/10 rounded-full blur-3xl animate-float-medium -z-10" />
      
      {/* Floating Design Elements (Simulating the 'Packaging that performs' image style) */}
      <div className="absolute right-10 top-1/4 hidden lg:block animate-float-slow">
        <div className="bg-white/40 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg w-48">
            <div className="h-24 bg-studio-text/10 rounded mb-2"></div>
            <div className="h-2 w-2/3 bg-studio-text/20 rounded"></div>
        </div>
      </div>

      <div className="absolute left-10 bottom-1/4 hidden lg:block animate-float-fast">
         <div className="bg-studio-text text-white p-6 rounded-xl shadow-2xl w-56 transform -rotate-3">
            <p className="font-display italic text-lg">"Conversion up 300%"</p>
            <div className="flex items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-studio-accent"></div>
                <span className="text-xs opacity-70">Design Student</span>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <span className="inline-block py-1 px-3 border border-studio-text/30 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 hover:bg-studio-text hover:text-white transition-all cursor-default">
          New Cohort Open
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 text-studio-text relative">
          Quality Landing Page <br />
          <span className="italic font-light text-studio-dark-accent">Contributes to 40% Conversions.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-studio-text/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop guessing. Start converting. We teach you the psychology and craft behind 
          landing pages that turn visitors into loyal customers.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Button with Beam Light Effect */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center p-[2px] overflow-hidden rounded-full w-full sm:w-auto transition-transform hover:scale-105 active:scale-95"
          >
            {/* Spinning Beam */}
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#8C7C6D_100%)]" />
            
            {/* Button Content */}
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-studio-text px-8 py-4 text-lg font-medium text-white backdrop-blur-3xl">
              <span className="flex items-center gap-2">
                Get Access <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </span>
          </button>
          
          <button 
            onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-studio-text/20 hover:bg-white/50 transition-all font-medium text-lg w-full sm:w-auto group"
          >
            <Layout size={20} className="text-studio-accent group-hover:scale-110 transition-transform"/>
            See Benefits
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;