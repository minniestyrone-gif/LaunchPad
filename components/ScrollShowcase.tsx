import React from 'react';

const websites = [
  { 
    id: 1, 
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80", 
    title: "Solarify", 
    desc: "Energy Solutions" 
  },
  { 
    id: 2, 
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80", 
    title: "Design Partner", 
    desc: "Agency Portfolio" 
  },
  { 
    id: 3, 
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80", 
    title: "ProBuilder", 
    desc: "Construction" 
  },
  { 
    id: 4, 
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80", 
    title: "Vineney", 
    desc: "Luxury Goods" 
  },
  { 
    id: 5, 
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", 
    title: "Digiset", 
    desc: "SaaS Platform" 
  },
  { 
    id: 6, 
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80", 
    title: "CoffeeCo", 
    desc: "E-commerce" 
  },
];

const ScrollShowcase: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-12">
      <div className="flex w-max animate-scroll">
        {/* First Set */}
        <div className="flex items-center gap-8 pr-8">
          {websites.map((site) => (
            <div key={`a-${site.id}`} className="flex-shrink-0 relative group cursor-pointer w-[280px] md:w-[350px] transition-all duration-300 hover:z-20">
              <div className="bg-studio-text p-3 rounded-[2rem] shadow-xl transition-all duration-500 group-hover:-translate-y-6 group-hover:shadow-2xl group-hover:shadow-studio-accent/20">
                <div className="bg-white rounded-[1.5rem] overflow-hidden relative aspect-[3/4]">
                  <img 
                    src={site.img} 
                    alt={site.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <p className="font-bold text-2xl mb-1">{site.title}</p>
                        <p className="text-sm font-light tracking-wider uppercase opacity-90">{site.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Duplicate Set for Loop */}
        <div className="flex items-center gap-8 pr-8">
          {websites.map((site) => (
            <div key={`b-${site.id}`} className="flex-shrink-0 relative group cursor-pointer w-[280px] md:w-[350px] transition-all duration-300 hover:z-20">
              <div className="bg-studio-text p-3 rounded-[2rem] shadow-xl transition-all duration-500 group-hover:-translate-y-6 group-hover:shadow-2xl group-hover:shadow-studio-accent/20">
                <div className="bg-white rounded-[1.5rem] overflow-hidden relative aspect-[3/4]">
                  <img 
                    src={site.img} 
                    alt={site.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <p className="font-bold text-2xl mb-1">{site.title}</p>
                        <p className="text-sm font-light tracking-wider uppercase opacity-90">{site.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollShowcase;