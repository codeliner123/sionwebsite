const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-12 opacity-50 hover:opacity-70 transition-opacity duration-200">
    <div className="text-slate-500 font-semibold text-lg">{name}</div>
  </div>
);

export default function LogoStrip() {
  const partners = ['BRAC'];

  return (
    <section className="py-16 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 mb-8">
          Trusted by healthcare professionals at leading institutions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner) => (
            <LogoPlaceholder key={partner} name={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
