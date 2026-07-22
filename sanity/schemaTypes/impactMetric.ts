import { defineField, defineType } from "sanity";

export default defineType({
  name: "impactMetric",
  title: "Impact Metrics",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: 'e.g. "Youth Impacted", "Scholarships Awarded"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Number Value",
      type: "number",
      description: "The numeric value to animate to (e.g. 500)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "suffix",
      title: "Suffix",
      type: "string",
      description: 'e.g. "+" to display "500+"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Short description below the label",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "value",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `${subtitle}`,
      };
    },
  },
});
