import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Packages', href: '#packages' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
            <span className="text-[#D4AF37] font-bold text-sm font-serif">EK</span>
          </div>
          <div className="leading-tight">
            <div className="text-white font-bold text-sm tracking-widest uppercase">Empire</div>
            <div className="text-[#D4AF37] text-xs tracking-widest uppercase">Klothing & Prints</div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium tracking-wider uppercase transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#contact')}
            className="btn-gold px-5 py-2 rounded text-xs tracking-widest uppercase"
          >
            <span>Get Quote</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#D4AF37] p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(11,11,11,0.98)' }}
      >
        <div className="px-6 py-4 flex flex-col gap-4 border-t border-[#222]">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium tracking-wider uppercase text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink('#contact')}
            className="btn-gold px-5 py-2 rounded text-xs tracking-widest uppercase self-start"
          >
            <span>Get Quote</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
