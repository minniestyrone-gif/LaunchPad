import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const Scarcity: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="enroll" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-studio-text/5 p-8 md:p-12 text-center overflow-hidden relative">
        {/* Decor */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-studio-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-studio-text/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
            <AlertCircle size={16} />
            <span>Limited Spots Remaining</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-studio-text">
            Master the Craft. <br />
            <span className="text-studio-accent">Transform Your Career.</span>
          </h2>

          <p className="text-lg text-studio-text/70 mb-8 max-w-xl mx-auto">
            Our next cohort starts soon. Join a community of elite designers and start building pages that print money.
          </p>

          <div className="flex justify-center gap-4 mb-10">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="bg-studio-text text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold font-mono">
                  {value.toString().padStart(2, '0')}
                </div>
                <span className="text-xs uppercase mt-2 tracking-widest opacity-60">{unit}</span>
              </div>
            ))}
          </div>

          <button className="w-full md:w-auto bg-studio-accent text-white hover:bg-studio-dark-accent px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Secure Your Spot Now
          </button>
          
          <p className="mt-4 text-sm text-studio-text/40">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scarcity;