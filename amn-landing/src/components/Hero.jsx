export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Akademia Młodzieży
            <br />
            Nowoczesnej
          </h1>

          <p className="text-lg text-white/90 mb-8">
            Programowanie, gry i technologia.
            <br />
            Ucz się codziennie, zdobywaj punkty
            <br />i rozwijaj swoje supermoce 🚀
          </p>

          <a
            href="#"
            className="inline-block bg-cta text-black font-semibold px-8 py-4 rounded-full shadow-lg"
          >
            Zacznij przygodę
          </a>
        </div>

        {/* Agent placeholder */}
        <div className="relative h-[420px] bg-white/10 rounded-3xl flex items-center justify-center">
          <span className="text-white/70">(agent – placeholder)</span>
        </div>
      </div>
    </section>
  );
}
