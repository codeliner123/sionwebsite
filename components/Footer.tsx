import Link from 'next/link';
import { siteConfig, navigation } from '@/constants/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-xl font-semibold text-slate-50 mb-4">
              {siteConfig.name}
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              {siteConfig.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200"
              />
              <button className="bg-gradient-to-r from-violet-500 to-cyan-400 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {navigation.footer.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-slate-50 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-400 hover:text-slate-50 transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2025 {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-slate-500 hover:text-slate-400 transition-colors duration-200">
              Privacy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-400 transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}