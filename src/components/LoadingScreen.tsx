interface Props {
  visible: boolean;
}

export default function LoadingScreen({ visible }: Props) {
  if (!visible) return null;

  return (
    <div className="loading-screen" style={{ background: '#0B0B0B' }}>
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center">
          <span className="text-[#D4AF37] font-bold font-serif text-lg">EK</span>
        </div>

        {/* Brand name */}
        <div className="text-center">
          <div className="shimmer text-2xl font-serif font-bold tracking-widest uppercase">
            Empire Klothing
          </div>
          <div className="text-[#D4AF37]/60 text-xs tracking-[0.5em] uppercase mt-1">& Prints</div>
        </div>
      </div>
    </div>
  );
}
