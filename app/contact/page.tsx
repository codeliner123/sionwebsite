import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/constants/site';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Sion Technology. We\'re here to help with your clinical documentation needs.',
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl mb-4">
              Get in touch
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Have questions about Sion? We're here to help. Reach out and we'll get back to you promptly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold text-slate-50 mb-6">Send us a message</h2>
              <form action="#" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200"
                    placeholder="General Hospital"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-50 mb-6">Other ways to reach us</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-slate-50 font-semibold mb-1">Email us</h3>
                      <p className="text-slate-400 mb-2">For general inquiries and support</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-violet-400 hover:text-violet-300 transition-colors duration-200"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-slate-50 font-semibold mb-1">Response time</h3>
                      <p className="text-slate-400">We typically respond within 24 hours during business days</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-slate-50 font-semibold mb-1">Partnership inquiries</h3>
                      <p className="text-slate-400">Interested in partnering with us? We'd love to explore opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-slate-50 font-semibold mb-4">Need immediate help?</h3>
                <p className="text-slate-400 mb-4">
                  Check out our documentation and frequently asked questions for quick answers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="text-violet-400 hover:text-violet-300 transition-colors duration-200 font-medium"
                  >
                    Documentation →
                  </a>
                  <a
                    href="/pricing#faq"
                    className="text-violet-400 hover:text-violet-300 transition-colors duration-200 font-medium"
                  >
                    FAQ →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}