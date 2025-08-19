import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-violet-500/10 to-cyan-400/10">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl mb-4">
          Start in minutes—no credit card required
        </h2>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Join thousands of healthcare professionals who have reclaimed their time with Sion Technology.
        </p>
        <Link
          href="/onboarding"
          className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity duration-200 inline-block"
        >
          Try Sion Free Today
        </Link>
      </div>
    </section>
  );
}