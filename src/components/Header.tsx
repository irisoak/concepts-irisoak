import Link from "next/link";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="text-base font-medium tracking-wide text-white">
          Willow & Gray
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#menu"
            className="text-sm text-white/80 transition hover:text-white"
          >
            {site.navigation.menu}
          </a>

          <a
            href="#about"
            className="text-sm text-white/80 transition hover:text-white"
          >
            {site.navigation.about}
          </a>

          <a
            href="#visit"
          >
            {site.navigation.visit}
          </a>
        </nav>

        <a
          href="#visit"
          className="rounded-full border border-white/40 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
        >
          {site.cta.secondary}
        </a>
      </div>
    </header>
  );
}