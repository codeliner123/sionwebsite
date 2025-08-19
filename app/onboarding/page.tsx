import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Get Started',
  description: 'Start your free trial with Sion Technology. No credit card required.',
};

export default function Onboarding() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl mb-4">
              Start your free trial
            </h1>
            <p className="text-xl text-slate-400">
              Get started with Sion in minutes. No credit card required.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-50 mb-4">
              Coming Soon
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              We're putting the finishing touches on our onboarding experience. 
              Sign up below to be notified when we launch.
            </p>
            
            <form className="space-y-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
              >
                Join the Waitlist
              </button>
            </form>
            
            <p className="text-slate-500 text-sm mt-6">
              We'll email you as soon as we're ready. No spam, ever.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}