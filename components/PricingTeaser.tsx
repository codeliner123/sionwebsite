import Link from 'next/link';
import { pricingPlans } from '@/constants/site';

export default function PricingTeaser() {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Start free, upgrade as you grow
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 relative ${
                plan.popular
                  ? 'border-violet-500/50 bg-violet-500/5'
                  : 'border-white/10 bg-white/5'
              } hover:bg-white/[0.06] transition-colors duration-200`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-50 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-50">{plan.price}</span>
                  {plan.period && (
                    <span className="text-slate-400 ml-2">/{plan.period}</span>
                  )}
                </div>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.href}
                  className={`block w-full py-3 px-4 rounded-lg font-medium text-center transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-500 to-cyan-400 text-white hover:opacity-90'
                      : 'border border-white/20 text-slate-50 hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/pricing"
            className="text-slate-400 hover:text-slate-50 transition-colors duration-200 font-medium"
          >
            See full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
}