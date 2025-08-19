import Link from 'next/link';
import { securityBadges } from '@/constants/site';

const IconComponent = ({ icon }: { icon: string }) => {
  const iconMap: Record<string, JSX.Element> = {
    shield: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    globe: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    lock: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  };

  return iconMap[icon] || iconMap.shield;
};

export default function SecurityBadges() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl mb-4">
            Security you can trust
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Your patient data is protected with enterprise-grade security measures
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {securityBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.06] transition-colors duration-200"
            >
              <div className="text-green-500 mr-3">
                <IconComponent icon={badge.icon} />
              </div>
              <span className="text-slate-50 font-medium">{badge.name}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/security"
            className="text-slate-400 hover:text-slate-50 transition-colors duration-200 font-medium"
          >
            Learn more about our security →
          </Link>
        </div>
      </div>
    </section>
  );
}