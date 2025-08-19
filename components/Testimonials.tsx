import { testimonials } from '@/constants/site';

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            Loved by clinicians
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            See what healthcare professionals are saying about Sion
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/[0.06] transition-colors duration-200"
            >
              <blockquote className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-slate-50 font-medium">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}