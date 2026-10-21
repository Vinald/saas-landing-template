import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const feature = defineType({
  name: "feature",
  title: "Feature",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", type: "text", title: "Description", rows: 3 }),
    defineField({
      name: "icon",
      type: "string",
      title: "Icon",
      options: {
        list: [
          { title: "Bolt", value: "bolt" },
          { title: "Chart", value: "chart" },
          { title: "Shield", value: "shield" },
          { title: "Puzzle", value: "puzzle" },
        ],
      },
    }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
  orderings: [{ name: "orderAsc", title: "Display order", by: [{ field: "order", direction: "asc" }] }],
});
