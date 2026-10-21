import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const waitlistSignup = defineType({
  name: "waitlistSignup",
  title: "Waitlist Signup",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({ name: "email", type: "string", title: "Email", validation: (Rule) => Rule.required() }),
    defineField({ name: "company", type: "string", title: "Company" }),
    defineField({ name: "submittedAt", type: "datetime", title: "Submitted at" }),
  ],
});
