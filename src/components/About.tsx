import { useEffect, useRef } from 'react';
import { Award, Layers, Users, Zap } from 'lucide-react';

const pillars = [
  { icon: <Layers size={22} />, title: 'Branding', desc: 'Strategic branding solutions that strengthen identity and elevate brand presence.' },
  { icon: <Zap size={22} />, title: 'Printing', desc: 'High-quality apparel and print production crafted for lasting impressions.' },
  { icon: <Award size={22} />, title: 'Souvenirs', desc: 'Customized keepsakes, promotional items, and gift solutions for every occasion.' },
  { icon: <Users size={22} />, title: 'Event Solutions', desc: 'End-to-end branding support for graduations, conferences, campaigns, and events.' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 px-6 relative" ref={sectionRef}>
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <div className="h-px w-12 bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-medium">Who We Are</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Where Vision Meets<br />
              <span className="gold-text italic">Craftsmanship</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Empire Klothing &amp; Prints is a premier branding and printing company dedicated to transforming ideas into
              tangible, high-impact branded experiences. We partner with schools, corporate organizations, churches, NGOs,
              event planners, and sports clubs to deliver exceptional branding solutions with unmatched quality, creativity,
              and attention to detail.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From custom apparel and promotional merchandise to corporate gifts, event branding, recognition awards, and
              premium souvenirs, we create products that elevate your identity and leave lasting impressions. Every item
              we produce is crafted to reflect excellence and represent your brand at its very best.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Schools', 'Corporates', 'Churches', 'Event Planners', 'NGOs', 'Sports Clubs'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-[#D4AF37]/30 text-[#D4AF37] text-xs tracking-wider uppercase rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="glow-hover p-6 rounded-lg border border-[#222] hover:border-[#D4AF37]/40 transition-all duration-300"
                  style={{ background: '#161616', transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-[#D4AF37] mb-4">{p.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
