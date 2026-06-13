import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    life: number;
    maxLife: number;
  }>>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawn = () => {
      if (particles.current.length < 60) {
        const maxLife = 150 + Math.random() * 150;
        particles.current.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 10,
          vx: (Math.random() - 0.5) * 0.5,
          vy: -(0.3 + Math.random() * 0.8),
          size: 1 + Math.random() * 2,
          opacity: 0,
          life: 0,
          maxLife,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < 0.3) spawn();

      particles.current = particles.current.filter(p => p.life < p.maxLife);
      particles.current.forEach(p => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        p.opacity = progress < 0.15
          ? progress / 0.15
          : progress > 0.85
          ? (1 - progress) / 0.15
          : 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * 0.5})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0B0B0B' }}>
      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] pulse-gold inline-block"></span>
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">Premium Brand Solutions</span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 hero-title"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 40%, #F0D060 60%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Premium Branding<br />
          <span style={{ fontStyle: 'italic' }}>&amp; Printing</span> Solutions
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
          Custom Designs, Printing &amp; Corporate Branding for Schools, Businesses &amp; Events
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('#gallery')}
            className="btn-gold px-8 py-4 rounded text-sm tracking-widest uppercase w-full sm:w-auto"
          >
            <span>View Catalog</span>
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-outline-gold px-8 py-4 rounded text-sm tracking-widest uppercase w-full sm:w-auto"
          >
            Request Quote
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '200+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold font-serif gold-text">{stat.value}</div>
              <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="text-[#D4AF37] scroll-indicator" />
      </div>
    </section>
  );
}
