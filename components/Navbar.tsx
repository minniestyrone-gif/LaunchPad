import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-studio-bg/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-display font-bold tracking-tighter text-studio-text">
          LaunchPad<span className="text-studio-accent">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="text-sm font-medium hover:text-studio-accent transition-colors">Benefits</a>
          <a href="#showcase" onClick={(e) => scrollToSection(e, 'showcase')} className="text-sm font-medium hover:text-studio-accent transition-colors">Showcase</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-sm font-medium hover:text-studio-accent transition-colors">Stories</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-studio-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-studio-bg border-b border-studio-text/10 p-6 md:hidden flex flex-col space-y-4 shadow-xl">
           <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="text-lg font-medium">Benefits</a>
           <a href="#showcase" onClick={(e) => scrollToSection(e, 'showcase')} className="text-lg font-medium">Showcase</a>
           <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-lg font-medium">Stories</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;