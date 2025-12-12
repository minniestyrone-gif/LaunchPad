import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-text text-studio-bg pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 border-b border-white/10 pb-10">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-display font-bold mb-2">LaunchPad Studio.</h2>
            <p className="opacity-60 max-w-sm">
              Empowering the next generation of digital designers to build better web experiences.
            </p>
          </div>

          <div className="flex gap-6">
             <a href="#" className="hover:text-studio-accent transition-colors"><Instagram /></a>
             <a href="#" className="hover:text-studio-accent transition-colors"><Twitter /></a>
             <a href="#" className="hover:text-studio-accent transition-colors"><Linkedin /></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-40">
          <p>&copy; {new Date().getFullYear()} LaunchPad Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="italic">Remember: Your design is only as good as the results it brings.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;