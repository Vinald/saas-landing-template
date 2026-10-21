import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "productName", type: "string", title: "Product Name", validation: (Rule) => Rule.required() }),
    defineField({ name: "tagline", type: "text", title: "Tagline", rows: 2 }),
    defineField({ name: "ctaLabel", type: "string", title: "Primary CTA label" }),
  ],
});
