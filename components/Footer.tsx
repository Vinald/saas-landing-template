import type { SanitySiteSettings } from "@/lib/sanity";

export default function Footer({ settings }: { settings: SanitySiteSettings }) {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 text-zinc-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:justify-between">
        <p className="font-bold text-white">{settings.productName}</p>
        <p className="text-zinc-400">{settings.tagline}</p>
      </div>
      <p className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-500">
        {settings.productName}. All rights reserved.
      </p>
    </footer>
  );
}
