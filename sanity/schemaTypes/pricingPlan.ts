import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({ name: "name", type: "string", title: "Plan name", validation: (Rule) => Rule.required() }),
    defineField({ name: "price", type: "string", title: "Price label" }),
    defineField({ name: "description", type: "string", title: "Short description" }),
    defineField({
      name: "features",
      type: "array",
      title: "Included features",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "highlighted", type: "boolean", title: "Highlighted plan" }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
  orderings: [{ name: "orderAsc", title: "Display order", by: [{ field: "order", direction: "asc" }] }],
});
