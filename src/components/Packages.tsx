import { useEffect, useRef } from 'react';
import { Check, GraduationCap, Briefcase, Church, PartyPopper, Heart, Trophy } from 'lucide-react';

const WHATSAPP_LINK = 'http://wa.me/2348034492947';

const packages = [
  {
    icon: <GraduationCap size={28} />,
    title: 'Graduation Souvenir Package',
    tagline: 'For Schools, Universities & Graduation Celebrations',
    color: '#D4AF37',
    popular: true,
    items: [
      'Customized Graduation T-Shirts/Hoodies',
      'Branded Graduation Caps',
      'Branded Magic/Non-Magic Mugs with School Logo',
      'Certificate Frames & Plaques',
      'Graduation Medals & Awards',
      'Premium Souvenir Gift Packs',
      'Customized Water Bottles',
      'Event Backdrop Banner',
    ],
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Corporate Branding Package',
    tagline: 'For Businesses, Offices & Professional Brand Identity',
    color: '#c0953a',
    popular: false,
    items: [
      'Branded Polos & Corporate T-Shirts',
      'Staff ID Cards & Lanyards',
      'Executive Pens & Notepad/Diary',
      'Branded Magic/Non-Magic Mugs',
      'Premium Vacuum Flasks',
      'Corporate Gift Packs',
      'Roll-Up Banners',
      'Custom Wristbands',
    ],
  },
  {
    icon: <Church size={28} />,
    title: 'Church Event Package',
    tagline: 'For Churches, Conferences, Choirs & Special Programs',
    color: '#D4AF37',
    popular: false,
    items: [
      'Branded Church T-Shirts & Polos',
      'Flex Banners',
      'Customized Wristbands',
      'Branded Water Bottles',
      'ID Cards & Lanyards',
      'Branded Caps',
      'Souvenir Gift Packs',
      'Custom Pens & Notepad',
    ],
  },
  {
    icon: <PartyPopper size={28} />,
    title: 'Event Planner Premium Package',
    tagline: 'For Weddings, Celebrations, Conferences & VIP Events',
    color: '#c0953a',
    popular: false,
    items: [
      'Premium Souvenir Packages',
      'Customized Throw Pillows',
      'Branded Magic/Non-Magic Mugs',
      'Event Roll-Up & Flex Banners',
      'Custom Wristbands',
      'Custom Vacuum Flask',
      'Branded Water Bottles',
      'Premium Gift Items',
    ],
  },
  {
    icon: <Heart size={28} />,
    title: 'NGO & Awareness Campaign Package',
    tagline: 'For NGOs, Outreach Programs & Community Campaigns',
    color: '#D4AF37',
    popular: false,
    items: [
      'Campaign T-Shirts & Polos',
      'ID Cards & Lanyards',
      'Customized Caps',
      'Custom Pens & Diary',
      'Awareness Wristbands',
      'Roll-Up Banners',
      'Flex Banners',
      'Customized Water Bottles',
      'Souvenir Gift Packs',
    ],
  },
  {
    icon: <Trophy size={28} />,
    title: 'Sports Club & Competition Package',
    tagline: 'For Sports Clubs, Tournaments & Competitive Events',
    color: '#c0953a',
    popular: false,
    items: [
      'Roll-Up & Backdrop Banners',
      'Team Branded T-Shirts/Polos',
      'Customized Drawstring Bags',
      'Customized Framed Awards',
      'Customized Water Bottles',
      'Branded Tents/Canopies',
      'Customized Wristbands',
      'Customized Medals',
      'Awards & Plaques',
      'Branded Jerseys',
      'Branded Towels',
      'Branded Caps',
      'Feather Flags',
    ],
  },
];

export default function Packages() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="packages" className="py-28 px-6 relative" style={{ background: '#0B0B0B' }} ref={sectionRef}>
      {/* Bg accent */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-medium">Curated Packages</span>
            <div className="h-px w-12 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Curated <span className="gold-text italic">Packages</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            All-inclusive branded packages tailored for every occasion. Mix and match to suit your budget.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.title}
              className={`package-card reveal relative rounded-xl border overflow-hidden flex flex-col transition-all duration-400 hover:scale-[1.02] ${
                pkg.popular ? 'border-[#D4AF37]/60' : 'border-[#222] hover:border-[#D4AF37]/30'
              }`}
              style={{ background: '#161616', transitionDelay: `${i * 100}ms` }}
            >
              {pkg.popular && (
                <div
                  className="absolute top-0 left-0 right-0 text-center py-1.5 text-xs tracking-widest uppercase font-bold text-black"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}
                >
                  Most Popular
                </div>
              )}

              <div className={`p-6 ${pkg.popular ? 'pt-10' : ''}`}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: `${pkg.color}20`, color: pkg.color }}
                >
                  {pkg.icon}
                </div>
                <h3 className="text-white font-bold text-lg font-serif leading-tight mb-1">{pkg.title}</h3>
                <p className="text-gray-500 text-xs tracking-wider uppercase mb-5">{pkg.tagline}</p>

                <div className="gold-divider mb-5" />

                <ul className="space-y-2.5 flex-1">
                  {pkg.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
                      <span className="text-gray-400 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('requestQuote', { detail: { packageName: pkg.title } }));
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block w-full text-center py-3 rounded text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
                    pkg.popular ? 'btn-gold' : 'btn-outline-gold'
                  }`}
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-10 reveal">
          <p className="text-gray-600 text-sm">
            All packages are fully customizable. Contact us for bulk pricing and special event discounts.
          </p>
        </div>
      </div>
    </section>
  );
}
