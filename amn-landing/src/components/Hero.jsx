import heroBg from "../assets/hero-bg.webp";
import logo from "../assets/AMN LOGO 1.0.svg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d4d]/90 via-[#0b1d4d]/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: TEXT */}
        <div>
          <img
            src={logo}
            alt="Akademia Młodzieży Nowoczesnej"
            className="h-40 md:h-40 xl:h-60 drop-shadow-[0_0_15px_rgba(255,159,28,0.25)]
  hover:drop-shadow-[0_0_40px_rgba(255,159,28,0.5)]
  transition"
          />

          {/* <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-8">
            Akademia Młodzieży <br />
            <span className="text-[#4da3ff]">Nowoczesnej</span>
          </h1> */}

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl">
            Programowanie, gry i technologie przyszłości.
            <br />
            Ucz się przez zabawę, zdobywaj punkty
            <br />i rozwijaj swoje supermoce 🚀
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#ff9f1c] text-black font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition"
            >
              Zacznij przygodę
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition"
            >
              Zobacz jak to działa
            </a>
          </div>
        </div>

        {/* RIGHT: AGENT PLACEHOLDER */}
        <div className="relative h-[420px] md:h-[520px] rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
          <span className="text-white/60 text-sm">
            (miejsce na agenta 3D / ilustrację)
          </span>
        </div>
      </div>
    </section>
  );
}
