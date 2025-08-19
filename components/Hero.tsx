import Link from 'next/link';
import HeroMock from './HeroMock';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">
              Clinical notes,{' '}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                without the paperwork.
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-xl">
              AI-powered documentation that understands your voice and creates professional clinical notes instantly. 
              Spend more time with patients, less time typing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/onboarding"
                className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 text-center"
              >
                Try Sion Free
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-slate-50 px-8 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors duration-200 text-center"
              >
                Book a demo
              </Link>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <HeroMock />
          </div>
        </div>
      </div>
    </section>
  );
}