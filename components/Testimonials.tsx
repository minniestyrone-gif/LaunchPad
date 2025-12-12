import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Freelance Designer",
    quote: "I was stuck charging R1000 per page. After LaunchPad, my confidence skyrocketed along with my rates.",
    result: "Tripled her monthly income in 3 months.",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Agency Owner",
    quote: "The psychology modules changed how I pitch. Clients don't just see design anymore; they see ROI.",
    result: "Closed a $25k contract using our framework.",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "UX Researcher",
    quote: "Finally, a course that connects the dots between beautiful aesthetics and hard business metrics.",
    result: "Increased client conversion rates by 40%.",
    image: "https://picsum.photos/100/100?random=12"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-studio-text text-studio-bg overflow-hidden relative scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Student Stories</h2>
            <p className="text-studio-bg/60 max-w-2xl mx-auto">
                Hover over the cards to see the real-world impact our training has on careers.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group h-80 w-full perspective-1000">
              <div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl rounded-2xl">
                
                {/* Front of Card */}
                <div className="absolute inset-0 h-full w-full bg-[#2A2A2A] rounded-2xl p-8 flex flex-col justify-between backface-hidden border border-white/10">
                  <div className="text-5xl text-studio-accent font-serif opacity-50">"</div>
                  <p className="text-lg leading-relaxed font-light text-studio-bg/90">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full border-2 border-studio-accent object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <span className="text-sm text-studio-bg/50">{testimonial.role}</span>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 h-full w-full bg-studio-accent rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180">
                  <h3 className="text-2xl font-bold text-studio-text mb-4 font-display">The Result</h3>
                  <div className="w-12 h-1 bg-studio-text mb-6"></div>
                  <p className="text-xl font-medium text-studio-text leading-snug">
                    {testimonial.result}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;