import React from 'react';
import { Layout, Zap, DollarSign } from 'lucide-react';
import { Benefit } from '../types';

const benefitsList: Benefit[] = [
  {
    title: "Psychology-Driven Layouts",
    description: "Learn why users click. We dive deep into F-patterns, Z-patterns, and cognitive load theory to ensure your designs actually sell.",
    icon: <Layout className="w-8 h-8 text-studio-accent" />
  },
  {
    title: "Rapid Prototyping",
    description: "Stop wasting time on pixel perfection too early. Master our wireframe-to-conversion workflow that speeds up delivery by 2x.",
    icon: <Zap className="w-8 h-8 text-studio-accent" />
  },
  {
    title: "High-Ticket Client Acquisition",
    description: "It's not just about design. We teach you how to package your services to attract clients willing to pay 15k+ per landing page.",
    icon: <DollarSign className="w-8 h-8 text-studio-accent" />
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-28">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-studio-text max-w-lg">
          More Than Just <br/>
          <span className="text-studio-accent">Pretty Pixels.</span>
        </h2>
        <p className="text-studio-text/60 max-w-xs mt-6 md:mt-0">
          A comprehensive curriculum designed to turn you into a full-stack digital designer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefitsList.map((benefit, index) => (
          <div 
            key={index} 
            className="bg-white/50 border border-white p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
          >
            <div className="mb-6 bg-studio-bg p-4 rounded-full w-fit group-hover:scale-110 transition-transform">
                {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-studio-text/70 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;