'use client';

const MockupCard = ({ delay }: { delay: string }) => (
  <div 
    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
    style={{ 
      animation: `float 6s ease-in-out infinite`,
      animationDelay: delay 
    }}
  >
    <div className="h-4 bg-gradient-to-r from-violet-500/20 to-cyan-400/20 rounded mb-3"></div>
    <div className="space-y-2">
      <div className="h-2 bg-slate-700 rounded w-3/4"></div>
      <div className="h-2 bg-slate-700 rounded w-1/2"></div>
      <div className="h-2 bg-slate-700 rounded w-5/6"></div>
    </div>
  </div>
);

export default function HeroMock() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <div className="space-y-4">
          <MockupCard delay="0s" />
          <MockupCard delay="2s" />
        </div>
        <div className="space-y-4 pt-8">
          <MockupCard delay="1s" />
          <MockupCard delay="3s" />
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}