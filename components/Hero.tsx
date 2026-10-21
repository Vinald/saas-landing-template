import type { SanitySiteSettings } from "@/lib/sanity";

export default function Hero({ settings }: { settings: SanitySiteSettings }) {
  return (
    <section className="texture-grid relative overflow-hidden bg-[var(--color-primary)] px-6 py-28 text-white">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-accent)] opacity-20 blur-3xl" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <span className="rounded-full bg-[var(--color-accent)] px-4 py-1 text-sm font-bold text-zinc-900">
          Now in public beta
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
          {settings.tagline}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#waitlist"
            className="rounded-full bg-[var(--color-accent)] px-8 py-3 text-base font-bold text-zinc-900 shadow-lg hover:brightness-95"
          >
            {settings.ctaLabel}
          </a>
          <a
            href="#features"
            className="rounded-full border-2 border-white/60 px-8 py-3 text-base font-bold hover:bg-white/10"
          >
            See Features
          </a>
        </div>
      </div>
    </section>
  );
}
