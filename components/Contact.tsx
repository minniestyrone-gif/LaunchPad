import React from 'react';
import { Mail, Instagram, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-studio-text/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-studio-text mb-6">
            Get in Touch
          </h2>
          <p className="text-studio-text/60 max-w-xl mx-auto text-lg">
            Have questions about the curriculum or need help with enrollment? Reach out to our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Email */}
          <a href="mailto:elevatesolutions26@gmail.com" className="group flex flex-col items-center p-8 rounded-3xl bg-studio-bg border border-transparent hover:border-studio-text/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-studio-text text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Mail size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 font-display">Email</h3>
            <p className="text-studio-text/70 group-hover:text-studio-accent transition-colors break-all">
              elevatesolutions26@gmail.com
            </p>
          </a>

          {/* Discord */}
          <div className="group flex flex-col items-center p-8 rounded-3xl bg-studio-bg border border-transparent hover:border-studio-text/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-default">
            <div className="w-16 h-16 bg-[#5865F2] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MessageSquare size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 font-display">Discord</h3>
            <p className="text-studio-text/70">
              LaunchPad Studio
            </p>
          </div>

          {/* Instagram */}
          <a href="https://instagram.com/LaunchPad_Studio" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 rounded-3xl bg-studio-bg border border-transparent hover:border-studio-text/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
             <div className="w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Instagram size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2 font-display">Instagram</h3>
            <p className="text-studio-text/70 group-hover:text-studio-accent transition-colors">
              LaunchPad_Studio
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;