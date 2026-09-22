import Image from "next/image";
import { site } from "@/data/site";

export default function Intro() {
  return (
    <section
      id="about"
      className="bg-[#efe5d2] px-6 py-20 text-[#20231f] md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#756b5c]">
              {site.intro.eyebrow}
            </p>
          </div>

          <div>
            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {site.intro.title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#4d4b45] md:text-lg md:leading-8">
              {site.intro.description}
            </p>

            <a
              href="#menu"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#20231f]/30 pb-1 text-sm font-medium transition hover:border-[#20231f]"
            >
              {site.intro.link}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-sm md:mt-20">
          <Image
            src="/images/restaurant.png"
            alt="Concept image representing the restaurant's interior"
            fill
            loading="eager"
            className="intro-image object-cover transition duration-700 hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 1200px"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
            Concept imagery
          </div>
        </div>
      </div>
    </section>
  );
}