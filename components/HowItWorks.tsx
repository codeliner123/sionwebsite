import { howItWorksSteps } from '@/constants/site';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            From voice to documentation in three simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-semibold">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-violet-500/50 to-cyan-400/50 transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}