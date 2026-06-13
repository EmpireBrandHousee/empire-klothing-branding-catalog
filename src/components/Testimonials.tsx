import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Murex Cowrie Trading Limited',
    text: "We've used Empire for all our corporate branding needs for years. From ID cards and lanyards to branded polos, caps, and vehicle branding, they never disappoint. Professional, fast, and incredibly talented.",
    rating: 5,
  },
  {
    name: 'Greenwoods International School',
    text: "Empire Klothing & Prints delivered our graduation souvenirs beyond expectation. The quality was outstanding and they met every deadline. Our students loved their custom mugs, jotters, pens, and paper bags.",
    rating: 5,
  },
  {
    name: 'Nigeria Korea Model School',
    text: "The sports medals, customized water bottles, and t-shirts Empire made for our inter-house competition were top-notch. Students were proud to receive them. Definitely our go-to for all future sports events.",
    rating: 5,
  },
  {
    name: 'Ukay Prime Events',
    text: "Professional, creative, and reliable. Empire Klothing & Prints handled our full event branding package and it was immaculate. I recommend them to every event planner I know.",
    rating: 5,
  },
  {
    name: 'Women For Women International',
    text: "Empire Klothing & Prints supported our awareness campaign with branded t-shirts, wristbands, banners, and promotional materials. The quality was exceptional, delivery was timely, and the branding helped us make a stronger impact throughout our outreach activities.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    if (!isAuto) return;
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isAuto]);

  const go = (dir: number) => {
    setIsAuto(false);
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
  };

  const prev = testimonials[(current - 1 + testimonials.length) % testimonials.length];
  const curr = testimonials[current];
  const next = testimonials[(current + 1) % testimonials.length];

  return (
    <section id="testimonials" className="py-28 px-6 relative" style={{ background: '#0e0e0e' }} ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF37 1px, transparent 1px), radial-gradient(circle at 80% 50%, #D4AF37 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-medium">Client Reviews</span>
            <div className="h-px w-12 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="gold-text italic">Clients Say</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Trusted by schools, corporations, churches, and event planners across Nigeria.
          </p>
        </div>

        {/* Main slider */}
        <div className="reveal relative">
          {/* Side previews (desktop only) */}
          <div className="hidden lg:grid grid-cols-3 gap-6 items-center">
            {/* Prev */}
            <div className="opacity-40 scale-95 transition-all duration-500 cursor-pointer" onClick={() => go(-1)}>
              <TestimonialCard t={prev} />
            </div>

            {/* Current */}
            <div className="scale-105 z-10">
              <TestimonialCard t={curr} featured />
            </div>

            {/* Next */}
            <div className="opacity-40 scale-95 transition-all duration-500 cursor-pointer" onClick={() => go(1)}>
              <TestimonialCard t={next} />
            </div>
          </div>

          {/* Mobile single */}
          <div className="lg:hidden">
            <TestimonialCard t={curr} featured />
          </div>

          {/* Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAuto(false); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-[#D4AF37]' : 'w-2 h-2 bg-[#333] hover:bg-[#D4AF37]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, featured = false }: { t: typeof testimonials[0]; featured?: boolean }) {
  return (
    <div
      className={`testimonial-card rounded-xl p-6 border transition-all duration-300 ${
        featured ? 'border-[#D4AF37]/40' : 'border-[#222]'
      }`}
      style={{ background: featured ? '#1a1a1a' : '#161616' }}
    >
      <Quote size={28} className="text-[#D4AF37] mb-4 opacity-60" />
      <p className={`leading-relaxed mb-6 ${featured ? 'text-gray-300 text-base' : 'text-gray-500 text-sm'}`}>
        "{t.text}"
      </p>
      <div className="flex items-center justify-between gap-3">
        <div className="text-white font-semibold text-sm">{t.name}</div>
        <div className="flex gap-0.5 shrink-0">
          {Array.from({ length: t.rating }).map((_, i) => (
            <span key={i} className="text-[#D4AF37] text-xs">★</span>
          ))}
        </div>
      </div>
    </div>
  );
}
