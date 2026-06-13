import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Instagram, Send, MessageCircle, AlertCircle } from 'lucide-react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby6eSS0RI7lM91A6rQN8xTcmQ6pxV3XvuQSUs5svr5ZSejy6VbPBVo_r-cFJtRKswUsSQ/exec';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceNeeded: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
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
    const handleRequestQuote = (e: Event) => {
      const pkg = (e as CustomEvent).detail?.packageName as string;
      if (pkg) setForm(f => ({ ...f, serviceNeeded: pkg }));
    };
    window.addEventListener('requestQuote', handleRequestQuote);
    return () => window.removeEventListener('requestQuote', handleRequestQuote);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phoneNumber: form.phoneNumber,
          serviceNeeded: form.serviceNeeded,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setError(
        'Submission failed. Please check your connection and try again, or reach us directly on WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  const waMessage = encodeURIComponent(
    `Hello Empire Klothing & Prints,\n\nI just submitted a quote request through your website${
      form.serviceNeeded ? ` for the ${form.serviceNeeded} package` : ''
    }.\n\nI would like to discuss my requirements further.\n\nThank you.`
  );

  return (
    <section id="contact" className="py-28 px-6 relative" style={{ background: '#0B0B0B' }} ref={sectionRef}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-medium">Get In Touch</span>
            <div className="h-px w-12 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your <span className="gold-text italic">Project Today</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Ready to elevate your brand? Get in touch for a free consultation and custom quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="reveal-left space-y-8">
            <div>
              <h3 className="text-white font-serif text-2xl font-bold mb-6">
                Let's Create Something<br />
                <span className="gold-text italic">Extraordinary</span>
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Whether you need a complete branding package or a single custom product, we're here to bring your vision
                to life. Reach out via any channel below.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: <Phone size={18} />, label: 'Phone / WhatsApp', value: '+234 803 449 2947', link: 'tel:+2348034492947' },
                { icon: <Mail size={18} />, label: 'Email', value: 'frank@empirebrandhouse.store', link: 'mailto:frank@empirebrandhouse.store' },
                { icon: <Instagram size={18} />, label: 'Instagram', value: '@empireklothingandprints', link: 'https://www.instagram.com/empireklothingandprints?igsh=MXEzcnB6N3V3b2F2cw==' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[#D4AF37] shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-600 text-xs tracking-wider uppercase">{item.label}</div>
                    <div className="text-white text-sm font-medium group-hover:text-[#D4AF37] transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="http://wa.me/2348034492947"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] w-full justify-center"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
              }}
            >
              <MessageCircle size={20} className="text-white" />
              <span className="text-white font-bold tracking-wider text-sm uppercase">Chat on WhatsApp</span>
            </a>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center border border-[#D4AF37]/30 flex flex-col items-center justify-center min-h-[400px]"
                style={{ background: '#161616' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: 'rgba(212,175,55,0.1)' }}
                >
                  <Send size={28} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-white font-serif text-2xl font-bold mb-3">Quote Request Received!</h3>
                <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
                  Thank you for your quote request. Our team has received your details and will contact you shortly.
                </p>
                <p className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                  For Faster Response
                </p>
                <a
                  href={`https://wa.me/2348034492947?text=${waMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:scale-[1.02] mb-4 w-full justify-center"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
                >
                  <MessageCircle size={18} />
                  Contact Us on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-gold px-6 py-2 rounded text-xs tracking-widest uppercase"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 border border-[#222] space-y-5"
                style={{ background: '#161616' }}
              >
                <h3 className="text-white font-serif text-xl font-bold mb-2">Request a Quote</h3>
                <div className="gold-divider" />

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="text-gray-500 text-xs tracking-wider uppercase block mb-2">Full Name *</label>
                    <input
                      required
                      value={form.fullName}
                      onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                      className="w-full bg-[#0B0B0B] border border-[#333] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs tracking-wider uppercase block mb-2">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-[#0B0B0B] border border-[#333] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-500 text-xs tracking-wider uppercase block mb-2">Phone Number</label>
                    <input
                      value={form.phoneNumber}
                      onChange={e => setForm(f => ({ ...f, phoneNumber: e.target.value }))}
                      className="w-full bg-[#0B0B0B] border border-[#333] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="+234..."
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs tracking-wider uppercase block mb-2">Service Needed</label>
                    <select
                      value={form.serviceNeeded}
                      onChange={e => setForm(f => ({ ...f, serviceNeeded: e.target.value }))}
                      className="w-full bg-[#0B0B0B] border border-[#333] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="">Select a package...</option>
                      <option>School Branding Package</option>
                      <option>Graduation Package</option>
                      <option>Corporate Branding Package</option>
                      <option>Church Branding Package</option>
                      <option>NGO & Awareness Campaign Package</option>
                      <option>Sports Club & Competition Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-xs tracking-wider uppercase block mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-[#0B0B0B] border border-[#333] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    placeholder="Tell us about your project, quantity needed, and timeline..."
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-red-500/30 bg-red-500/10">
                    <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                    <p className="text-red-400 text-sm leading-relaxed">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-4 rounded-lg text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full loader-ring" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="text-black relative z-10" />
                      <span>Send Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
