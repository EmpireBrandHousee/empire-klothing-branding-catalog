import { useEffect, useRef, useState } from 'react';
import {
  Shirt, Coffee, Trophy, Medal, Briefcase, CreditCard,
  School, Users, Crown, Droplets, PenTool, BookOpen,
  Award, Image, ZoomIn, X,
  Calendar, ShoppingBag, Key, Umbrella, MapPin, BookMarked, Tag,
  Shield, Layers
} from 'lucide-react';

// ============================================================================
// EDITABLE SERVICES DATA
// ============================================================================
// HOW TO UPDATE:
// 1. title: Change the service name
// 2. desc: Change the service description
// 3. img: Replace with your image path (e.g., '/your-image.jpg')
// 4. icon: Change icon from lucide-react (Shirt, Coffee, Trophy, etc.)
// 5. enquiryLink: Set to '#contact' for scroll OR WhatsApp link (e.g., 'https://wa.me/2348034492947?text=Hello')
// ============================================================================

const WHATSAPP = 'http://wa.me/2348034492947';

const services = [
  {
    icon: <Shirt size={28} />,
    title: 'Branded T-Shirts',
    desc: 'Branded T-shirts for Graduations, Corporate Identity, Churches & Special Events',
    img: '/Custom Apparel/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Coffee size={28} />,
    title: 'Branded Magic Mug',
    desc: 'Heat-Reveal Magic Mugs for Gifts, Promotions, Branding & Memorable Experiences',
    img: '/Branded Magic Mug/WhatsApp_Image_2026-05-26_at_14.45.16.jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <School size={28} />,
    title: 'Premium Souvenir Packages',
    desc: 'Elegant Gift Packs for Weddings, Conferences, Churches, Schools & Corporate Events',
    img: '/image copy copy.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Corporate Branding',
    desc: 'Premium Branding Solutions for Businesses, Conferences & Professional Identity',
    img: '/Corporate Branding/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Users size={28} />,
    title: 'Staff Branding',
    desc: 'Professional Staff Wears & Identity Solutions for Organizations and Teams',
    img: '/Staff Branding/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Image size={28} />,
    title: 'Roll-Up Banners',
    desc: 'Premium Display Banners for Events, Campaigns, Conferences & Brand Visibility',
    img: '/Staff Branding/WhatsApp_Image_2026-05-27_at_11.52.23.jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Crown size={28} />,
    title: 'Branded Caps',
    desc: 'Stylish Custom Caps for Promotions, Sports Teams, Events & Corporate Branding',
    img: '/Branded Caps/WhatsApp_Image_2026-05-28_at_10.30.15.jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Droplets size={28} />,
    title: 'Branded Vacuum Flasks',
    desc: 'Premium Insulated Flasks for Corporate Gifts, Souvenirs & Everyday Branding',
    img: '/Custom Vacuum Flask/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Droplets size={28} />,
    title: 'Branded Water Bottles',
    desc: 'Personalized Water Bottles for Events, Sports Clubs, NGOs & Brand Promotions',
    img: '/Custom Water Bottles/WhatsApp_Image_2026-05-26_at_14.45.27_(1).jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <PenTool size={28} />,
    title: 'Branded Pens',
    desc: 'Executive Branded Pens for Promotions, Conferences & Corporate Identity',
    img: '/Custom Pens/WhatsApp_Image_2026-05-26_at_14.45.28.jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Custom Note Books',
    desc: 'Premium Customized Notebooks for Meetings, Trainings, Schools & Organizations',
    img: '/Custom Note Books/WhatsApp_Image_2026-05-26_at_14.45.28_(1).jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Shirt size={28} />,
    title: 'Branded Polos',
    desc: 'Smart Branded Polos for Teams, Businesses, Churches & Event Crews',
    img: '/Custom Polos/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Award size={28} />,
    title: 'Custom Framed Awards',
    desc: 'Elegant Framed Recognition Awards for Excellence, Leadership & Achievements',
    img: '/Custom Framed Awards/WhatsApp_Image_2026-05-26_at_14.45.30.jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Coffee size={28} />,
    title: 'Branded Non-Magic Mugs',
    desc: 'Classic Customized Ceramic Mugs for Branding, Souvenirs & Gift Packages',
    img: '/Branded Non-Magic Mug/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Trophy size={28} />,
    title: 'Awards & Plaques',
    desc: 'Premium Recognition Plaques for Corporate, Religious & Special Achievements',
    img: '/Award & Plaque Category/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Medal size={28} />,
    title: 'Customized Medals',
    desc: 'Custom Medals & Trophies for Sports, Competitions & Recognition Events',
    img: '/Medals Category/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <CreditCard size={28} />,
    title: 'ID Cards & Lanyards',
    desc: 'Professional Identification Solutions for Staff, Events & Organizations',
    img: '/ID Cards & Lanyards/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Droplets size={28} />,
    title: 'Custom Wristbands',
    desc: 'Stylish Event Wristbands for Access Control, Campaigns & Brand Awareness',
    img: '/Custom Wristbands/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Image size={28} />,
    title: 'Flex Banner',
    desc: 'High-Impact Flex Banners for Promotions, Events & Outdoor Visibility',
    img: '/Flex Banner/WhatsApp_Image_2026-05-26_at_14.46.01.jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Award size={28} />,
    title: 'Premium Throw Pillows',
    desc: 'Luxury Customized Throw Pillows for Homes, Events, Gifts & Interior Branding',
    img: '/Premium Throw Pillows/WhatsApp_Image_2026-05-28_at_13.11.20.jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Trophy size={28} />,
    title: 'Custom Luminous Cube Clock',
    desc: 'Modern Illuminated Cube Clocks for Corporate Gifts, Branding & Premium Decor',
    img: '/Custom Luminous Cube Clock/WhatsApp_Image_2026-05-28_at_13.12.36.jpeg',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Calendar size={28} />,
    title: 'Customized Table Calendars',
    desc: 'Premium branded table calendars for offices, schools, and corporate gifting.',
    img: '/Customized Table Calendars/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <ShoppingBag size={28} />,
    title: 'Branded Tote Bags',
    desc: 'Stylish customized tote bags for branding, events, and promotional use.',
    img: '/Branded Tote Bags/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Key size={28} />,
    title: 'Branded Keyholders',
    desc: 'Personalized branded keyholders for souvenirs and corporate gifts.',
    img: '/image copy copy.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Umbrella size={28} />,
    title: 'Branded Umbrellas',
    desc: 'Custom branded umbrellas for corporate, school, and event branding.',
    img: '/image copy.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <MapPin size={28} />,
    title: 'Indoor & Outdoor Signages',
    desc: 'Professional indoor and outdoor signage solutions for businesses and events.',
    img: '/Indoor & Outdoor Signages/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <BookMarked size={28} />,
    title: 'Branded Notepads | Journals | Diaries',
    desc: 'Premium customized notebooks, journals, and diaries for corporate and promotional branding.',
    img: '/Custom Note Books/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Tag size={28} />,
    title: 'Customized Name Tag | Button Badges',
    desc: 'Professional customized name tags and button badges for events, schools, and organizations.',
    img: '/Customized Name Tag | Button Badges/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Shirt size={28} />,
    title: 'Branded Hoodies',
    desc: 'Premium customized hoodies for schools, organizations, events, teams, and corporate branding.',
    img: '/Branded Hoodies/image.png',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Layers size={28} />,
    title: 'Customized Towels',
    desc: 'Premium customized towels for schools, sports clubs, hotels, corporate gifting, and promotional branding.',
    img: '',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Shield size={28} />,
    title: 'Branded Reflective Jackets',
    desc: 'High-visibility branded reflective jackets for construction companies, logistics firms, security teams, field staff, and corporate branding.',
    img: '',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Branded Laptop | School Bags',
    desc: 'Customized laptop bags and school bags designed for branding, corporate gifting, educational institutions, and promotional campaigns.',
    img: '',
    enquiryLink: WHATSAPP,
  },
  {
    icon: <CreditCard size={28} />,
    title: 'Business Cards',
    desc: 'Premium professionally designed business cards that enhance brand identity, strengthen networking opportunities, and create lasting first impressions.',
    img: '',
    enquiryLink: WHATSAPP,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
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
    <section id="services" className="py-28 px-6 relative" style={{ background: '#0e0e0e' }} ref={sectionRef}>
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/3 w-96 h-96 rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-medium">What We Offer</span>
            <div className="h-px w-12 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gold-text italic">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Premium products crafted with precision — from custom apparel to full event branding.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s) => {
            const handleEnquire = (e: React.MouseEvent) => {
              e.preventDefault();
              const msg = encodeURIComponent(
                `Hello Empire Klothing & Prints,\n\nI am interested in your ${s.title} service and would like more information.\n\nPlease share details regarding pricing, minimum order quantity, turnaround time, and available customization options.\n\nThank you.`
              );
              window.open(`https://wa.me/2348034492947?text=${msg}`, '_blank');
            };

            return (
              <div
                key={s.title}
                className="service-card reveal group h-full rounded-lg overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col"
                style={{ background: '#161616' }}
              >
                {/* Image Container - Fixed height with proper fit */}
                <div
                  className="relative w-full bg-[#1a1a1a] overflow-hidden cursor-pointer"
                  style={{ height: '200px' }}
                  onClick={() => s.img && setLightbox(s.img)}
                >
                  {s.img ? (
                    <>
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        style={{ objectPosition: 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ZoomIn size={28} className="text-[#D4AF37]" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:bg-[#222]">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#D4AF37]/40 group-hover:text-[#D4AF37]/60 transition-colors" style={{ border: '2px dashed rgba(212,175,55,0.3)' }}>
                        {s.icon}
                      </div>
                      <span className="text-gray-600 text-xs tracking-wider uppercase">Add Image</span>
                    </div>
                  )}
                  <div
                    className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(11,11,11,0.8)', backdropFilter: 'blur(4px)' }}
                  >
                    {s.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-[#D4AF37] flex-shrink-0">
                      {s.icon}
                    </div>
                    <h3 className="text-white font-semibold text-base leading-tight">{s.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{s.desc}</p>

                  <button
                    onClick={handleEnquire}
                    className="mt-4 flex items-center gap-1 text-[#D4AF37] text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:gap-2 hover:opacity-80"
                  >
                    <span>ENQUIRE</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Preview */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Preview"
            className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(212,175,55,0.2)' }}
          />
          <button
            className="absolute top-6 right-6 text-[#D4AF37] w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center hover:bg-[#D4AF37]/10 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
