import Image from "next/image";
import { site } from "@/data/site";

export default function Whisky() {
  return (
    <section className="bg-[#efe5d2] px-6 py-20 text-[#20231f] md:px-10 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#756b5c]">
              {site.intro.eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-6xl">
              {site.intro.title}
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-lg text-base leading-7 text-[#4d4b45] md:text-lg md:leading-8">
              {site.intro.description}
            </p>

            <div className="mt-8 border-l border-[#20231f]/25 pl-5">
              <p className="text-sm italic text-[#5d594f]">
                {site.intro.link}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-12 md:gap-5">
          <div className="relative aspect-[4/5] overflow-hidden md:col-span-5">
            <Image
              src="/images/food.jpeg"
              alt="Seafood meal on a table"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden md:col-span-4 md:mt-16">
            <Image
              src="/images/drinks.jpeg"
              alt="A few drinks on a table"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden md:col-span-3 md:mt-8">
            <Image
              src="/images/whisky-bar.jpg"
              alt="Whisky bottles behind a warmly lit bar"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}