import { Instagram, Facebook, Mail, Phone, Music } from 'lucide-react';

const footerLinks = {
  Services: ['Custom T-Shirts', 'Hoodies & Caps', 'Mugs & Drinkware', 'Awards & Medals', 'Event Branding', 'Corporate Gifts'],
  'We Serve': ['Schools & Universities', 'Corporate Organizations', 'Churches & NGOs', 'Event Planners', 'Sports Clubs', 'Government Agencies'],
  Company: ['About Us', 'Our Process', 'Gallery', 'Packages', 'Testimonials', 'Contact Us'],
};

const socials = [
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/empireklothingandprints?igsh=MXEzcnB6N3V3b2F2cw==', label: 'Instagram' },
  { icon: <Facebook size={18} />, href: 'https://facebook.com/empireklothingandprints', label: 'Facebook' },
  { icon: <Music size={18} />, href: 'https://tiktok.com/@empireklothingandprints', label: 'TikTok' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #1a1a1a' }}>
      {/* CTA Banner */}
      <div
        className="py-14 px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #161616 0%, #1a1500 50%, #161616 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to <span className="gold-text italic">Elevate Your Brand?</span>
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Join 200+ satisfied clients who trust Empire Klothing &amp; Prints.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-gold px-8 py-3 rounded text-sm tracking-widest uppercase"
            >
              <span>Start a Project</span>
            </button>
            <a
              href="https://wa.me/2348034492947"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold px-8 py-3 rounded text-sm tracking-widest uppercase"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
                <span className="text-[#D4AF37] font-bold font-serif">EK</span>
              </div>
              <div>
                <div className="text-white font-bold tracking-widest uppercase text-sm">Empire</div>
                <div className="text-[#D4AF37] text-xs tracking-widest uppercase">Klothing & Prints</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              Premium branding and printing solutions for schools, corporates, churches, and events. Your vision, our craftsmanship.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo('#services')}
                      className="text-gray-600 hover:text-[#D4AF37] text-sm transition-colors duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="gold-divider my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="mailto:frank@empirebrandhouse.store" className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] text-sm transition-colors">
              <Mail size={14} />
              <span>frank@empirebrandhouse.store</span>
            </a>
            <a href="tel:+2348034492947" className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] text-sm transition-colors">
              <Phone size={14} />
              <span>+234 803 449 2947</span>
            </a>
          </div>

          <div className="text-center">
            <div className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-semibold mb-1">
              Design | Printing | Branding
            </div>
            <div className="text-gray-700 text-xs">
              © {new Date().getFullYear()} Empire Klothing &amp; Prints. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
