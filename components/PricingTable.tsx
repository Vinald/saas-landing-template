import type { SanityPricingPlan } from "@/lib/sanity";

export default function PricingTable({ plans }: { plans: SanityPricingPlan[] }) {
  if (plans.length === 0) return null;

  return (
    <section id="pricing" className="bg-[var(--color-accent-light)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold text-zinc-900">Simple, transparent pricing</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className={`flex flex-col rounded-2xl bg-white p-8 shadow-sm ${
                plan.highlighted ? "border-2 border-[var(--color-primary)] shadow-lg" : "border border-zinc-200"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 w-fit rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-zinc-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>
              <p className="mt-6 text-3xl font-extrabold text-zinc-900">{plan.price}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-zinc-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-0.5 text-[var(--color-accent)]">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-bold ${
                  plan.highlighted
                    ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                    : "border border-zinc-300 text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
