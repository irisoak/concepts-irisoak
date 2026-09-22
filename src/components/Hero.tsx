import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#20231f] text-white">
      <Image
        src="/images/hero-food.jpg"
        alt="Highland-inspired dining setting"
        fill
        priority
        className="hero-fade-in object-cover"
        sizes="100vw"
      />

      {/* Image treatment */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

      {/* Hero content */}
      <div className="relative z-10 w-full px-6 pb-14 pt-32 md:px-10 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#d8c6a5]">
            {site.location}
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-[0.92] tracking-tight sm:text-6xl md:text-8xl">
            {site.name}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75 md:text-xl">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex justify-center rounded-full bg-[#efe5d2] px-6 py-3 text-sm font-medium text-[#20231f] transition hover:scale-[1.02]"
            >
              {site.cta.primary}
            </a>

            <a
              href="#visit"
              className="inline-flex justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#20231f]"
            >
              {site.cta.secondary}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/55">
            <span className="h-px w-8 bg-white/30" />
            <span>Independent restaurant in the heart of the city</span>
          </div>
        </div>
      </div>
    </section>
  );
}