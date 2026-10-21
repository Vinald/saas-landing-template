import type { SanityFeature } from "@/lib/sanity";
import { iconMap } from "@/components/icons";

const accents = ["bg-indigo-100 text-[var(--color-primary)]", "bg-lime-100 text-lime-700"];

export default function FeatureGrid({ features }: { features: SanityFeature[] }) {
  if (features.length === 0) return null;

  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold text-zinc-900">Everything you need to automate work</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-zinc-600">
          Built for teams who want results, not another tool to babysit.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature._id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accents[index % accents.length]}`}>
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-4 text-lg font-bold text-zinc-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
