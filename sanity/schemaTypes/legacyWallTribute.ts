import { defineField, defineType } from "sanity";

export default defineType({
  name: "legacyWallTribute",
  title: "Legacy Wall Tributes",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote / Tribute Text",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author / Relationship",
      type: "string",
      description: 'e.g. "Teammate", "Professor", "Coach", "Family", "Friend"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Affiliation",
      type: "string",
      description: 'e.g. "UVA Football", "The Perry Family", "Miami Community"',
      validation: (Rule) => Rule.required(),
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
      title: "author",
      subtitle: "quote",
    },
  },
});
