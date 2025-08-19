import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { securityDetails } from '@/constants/site';

export const metadata = {
  title: 'Security',
  description: 'Learn about Sion Technology\'s enterprise-grade security measures and compliance standards.',
};

export default function Security() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl mb-4">
              Security & Compliance
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Your patient data is protected with enterprise-grade security measures and full compliance standards.
            </p>
          </div>

          {/* Security Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-slate-50 mb-6">Privacy First</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                We believe healthcare data deserves the highest level of protection. That's why we've built 
                Sion with privacy and security as core principles, not afterthoughts.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our platform is designed to meet and exceed industry standards, ensuring your patient data 
                remains secure while you focus on providing excellent care.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-50 mb-6">Regional Hosting</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Your data stays in your region. We offer hosting options in the US, EU, and other regions 
                to ensure compliance with local data protection regulations.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We're happy to sign Business Associate Agreements (BAA) and Data Processing Agreements (DPA) 
                with all our customers at no additional cost.
              </p>
            </div>
          </div>

          {/* Security Details */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-50 text-center mb-12">
              Security Details
            </h2>
            <div className="space-y-6">
              {securityDetails.map((detail, index) => (
                <details
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.06] transition-colors duration-200"
                >
                  <summary className="p-6 cursor-pointer text-slate-50 font-semibold hover:text-violet-400 transition-colors duration-200">
                    {detail.question}
                  </summary>
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                    {detail.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-50 mb-8">Compliance Standards</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-slate-50 font-semibold mb-2">HIPAA Ready</h3>
                <p className="text-slate-400 text-sm">Full compliance with US healthcare data protection standards</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-slate-50 font-semibold mb-2">GDPR Ready</h3>
                <p className="text-slate-400 text-sm">European data protection compliance for global healthcare</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-slate-50 font-semibold mb-2">Encrypted</h3>
                <p className="text-slate-400 text-sm">End-to-end encryption for data at rest and in transit</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}