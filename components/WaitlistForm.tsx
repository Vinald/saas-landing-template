"use client";

import { useState } from "react";
import type { SanitySiteSettings } from "@/lib/sanity";

type Status = "idle" | "sending" | "sent" | "error";

export default function WaitlistForm({ settings }: { settings: SanitySiteSettings }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="bg-zinc-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-extrabold">Join the {settings.productName} waitlist</h2>
        <p className="mt-3 text-zinc-400">Be first in line when we open up new accounts.</p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="flex-1 rounded-full border border-zinc-700 bg-zinc-800 px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-[var(--color-accent)] focus:outline-none"
          />
          <input name="company" type="text" placeholder="Company (optional)" className="hidden" />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-bold text-zinc-900 hover:brightness-95 disabled:opacity-60"
          >
            {status === "sending" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
        {status === "sent" && <p className="mt-4 text-sm font-medium text-lime-400">You are on the list, we will be in touch.</p>}
        {status === "error" && <p className="mt-4 text-sm font-medium text-red-400">Something went wrong, please try again.</p>}
      </div>
    </section>
  );
}
