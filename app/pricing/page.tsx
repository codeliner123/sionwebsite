import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pricingPlans, faqItems } from '@/constants/site';

export const metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for Sion Technology. Start free and upgrade as you grow.',
};

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose the plan that's right for you. Start free, no credit card required.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
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
                  <h3 className="text-2xl font-semibold text-slate-50 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-slate-50">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-400 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-slate-400 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={plan.href}
                    className={`block w-full py-4 px-6 rounded-lg font-medium text-center transition-colors duration-200 ${
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

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-50 text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.06] transition-colors duration-200"
                >
                  <summary className="p-6 cursor-pointer text-slate-50 font-medium hover:text-violet-400 transition-colors duration-200">
                    {item.question}
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}