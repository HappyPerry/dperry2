import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "string",
      description: 'Display date (e.g. "Summer 2024", "December 2024")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "type",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Community", value: "Community" },
          { title: "Athletics", value: "Athletics" },
          { title: "Memorial", value: "Memorial" },
          { title: "Arts", value: "Arts" },
        ],
      },
      initialValue: "Community",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
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
      title: "title",
      subtitle: "date",
    },
  },
});
