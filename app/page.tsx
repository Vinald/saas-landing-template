import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import WaitlistForm from "@/components/WaitlistForm";
import { getSiteSettings, getFeatures, getPricingPlans, getFaqItems } from "@/lib/sanity";

export default async function Home() {
  const [settings, features, plans, faqItems] = await Promise.all([
    getSiteSettings(),
    getFeatures(),
    getPricingPlans(),
    getFaqItems(),
  ]);

  return (
    <>
      <Hero settings={settings} />
      <FeatureGrid features={features} />
      <PricingTable plans={plans} />
      <FAQAccordion items={faqItems} />
      <WaitlistForm settings={settings} />
    </>
  );
}
