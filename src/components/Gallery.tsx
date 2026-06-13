import { useState, useEffect, useRef } from 'react';
import { ZoomIn } from 'lucide-react';

type Category = 'All' | 'Schools' | 'Corporate' | 'Graduation' | 'Church Events' | 'Sports';

const categories: Category[] = ['All', 'Schools', 'Corporate', 'Graduation', 'Church Events', 'Sports'];

// ============================================================================
// EDITABLE GALLERY DATA
// To update: Change img path, title, category, or span (for grid sizing)
// span options: '' (default), 'col-span-2', 'row-span-2', 'col-span-2 row-span-2'
// ============================================================================
const galleryItems = [
  {
    img: '/WhatsApp_Image_2026-05-26_at_14.45.10.jpeg',
    title: 'Graduation T-Shirts',
    category: 'Graduation' as Category,
    span: 'col-span-2 row-span-2',
  },
  {
    img: '/WhatsApp_Image_2026-05-26_at_14.45.16.jpeg',
    title: 'Custom Branded Mugs',
    category: 'Corporate' as Category,
    span: '',
  },
  {
    img: '/Award & Plaque Category/WhatsApp_Image_2026-05-26_at_14.45.11.jpeg',
    title: 'Awards & Plaques',
    category: 'Corporate' as Category,
    span: '',
  },
  {
    img: '/Medals Category/WhatsApp_Image_2026-05-26_at_14.45.48.jpeg',
    title: 'Sports Medals',
    category: 'Sports' as Category,
    span: 'col-span-2',
  },
  {
    img: '/Corporate Branding/WhatsApp_Image_2026-05-26_at_14.46.02.jpeg',
    title: 'Corporate Branding',
    category: 'Corporate' as Category,
    span: '',
  },
  {
    img: '/ID Cards & Lanyards/WhatsApp_Image_2026-05-26_at_14.45.32.jpeg',
    title: 'ID Cards & Lanyards',
    category: 'Corporate' as Category,
    span: '',
  },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(i => i.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <section id="gallery" className="py-28 px-6" ref={sectionRef} style={{ background: '#0B0B0B' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-medium">Our Work</span>
            <div className="h-px w-12 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Product <span className="gold-text italic">Gallery</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A showcase of our finest work across schools, corporates, events, and more.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                active === cat
                  ? 'btn-gold text-[#0B0B0B]'
                  : 'border border-[#333] text-gray-400 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]'
              }`}
            >
              {active === cat ? <span>{cat}</span> : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {filtered.map((item, i) => (
            <div
              key={`${item.img}-${i}`}
              className={`gallery-item reveal rounded-xl overflow-hidden relative cursor-pointer border border-[#222] ${item.span}`}
              onClick={() => setLightbox(item.img)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="overlay absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2">
                <ZoomIn size={28} className="text-[#D4AF37]" />
                <span className="text-white text-sm font-medium tracking-wide">{item.title}</span>
                <span className="text-[#D4AF37] text-xs tracking-widest uppercase">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Preview"
            className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(212,175,55,0.2)' }}
          />
          <button
            className="absolute top-6 right-6 text-[#D4AF37] text-xl font-bold w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center hover:bg-[#D4AF37]/10 transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
