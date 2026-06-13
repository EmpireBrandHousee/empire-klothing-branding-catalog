import { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup */}
      <div
        className={`transition-all duration-400 origin-bottom-right ${
          open ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div
          className="rounded-2xl p-5 w-72 border border-[#222] shadow-2xl"
          style={{ background: '#161616' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle size={18} className="text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Empire Klothing</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                <span className="text-green-400 text-xs">Online now</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-gray-600 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <div
            className="rounded-xl p-3 mb-4 text-sm text-gray-300 leading-relaxed"
            style={{ background: '#0B0B0B' }}
          >
            Hello! Ready to create something amazing? Let's talk about your branding needs. 👋
          </div>
          <a
            href="http://wa.me/2348034492947"
            target="_blank"
            rel="noreferrer"
            className="block text-center py-3 rounded-xl text-sm font-bold text-white tracking-wider uppercase transition-all duration-300 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            Start Chat
          </a>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl whatsapp-float transition-transform hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 8px 30px rgba(37,211,102,0.4)',
        }}
        aria-label="Chat on WhatsApp"
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>
    </div>
  );
}
