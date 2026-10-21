import { cache } from "react";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "rtb83dsn";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-01",
  useCdn: true,
});

export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export type SanitySiteSettings = {
  productName: string;
  tagline: string;
  ctaLabel: string;
};

export type SanityFeature = {
  _id: string;
  title: string;
  description: string;
  icon: string;
};

export type SanityPricingPlan = {
  _id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
};

export type SanityFaqItem = {
  _id: string;
  question: string;
  answer: string;
};

const fallbackSiteSettings: SanitySiteSettings = {
  productName: "Your Product",
  tagline: "Add a tagline in Sanity Studio to replace this placeholder.",
  ctaLabel: "Get Started",
};

export const getSiteSettings = cache(async (): Promise<SanitySiteSettings> => {
  const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
  return data ?? fallbackSiteSettings;
});

export const getFeatures = cache(async (): Promise<SanityFeature[]> => {
  return sanityClient.fetch(`*[_type == "feature"] | order(order asc)`);
});

export const getPricingPlans = cache(async (): Promise<SanityPricingPlan[]> => {
  return sanityClient.fetch(`*[_type == "pricingPlan"] | order(order asc)`);
});

export const getFaqItems = cache(async (): Promise<SanityFaqItem[]> => {
  return sanityClient.fetch(`*[_type == "faqItem"] | order(order asc)`);
});

export async function createWaitlistSignup(email: string, company?: string) {
  return sanityWriteClient.create({
    _type: "waitlistSignup",
    email,
    company: company || undefined,
    submittedAt: new Date().toISOString(),
  });
}
