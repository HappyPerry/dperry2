import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      description: 'Small text above the headline (e.g. "University of Virginia • #41")',
      initialValue: "University of Virginia • #41",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline Line 1",
      type: "string",
      description: 'First part of headline (e.g. "The")',
      initialValue: "The",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline Line 2",
      type: "string",
      description: 'Second part of headline (e.g. "D\'Sean Perry")',
      initialValue: "D'Sean Perry",
    }),
    defineField({
      name: "headlineLine3",
      title: "Headline Line 3",
      type: "string",
      description: 'Third part of headline (e.g. "Foundation")',
      initialValue: "Foundation",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      description: "The italic subtitle text below the headline",
      initialValue:
        "Honoring a life of leadership, love, artistic expression, and athletic dedication.",
    }),
    defineField({
      name: "ctaPrimaryText",
      title: "Primary Button Text",
      type: "string",
      initialValue: "Honor His Legacy",
    }),
    defineField({
      name: "ctaPrimaryLink",
      title: "Primary Button Link",
      type: "string",
      initialValue: "#about",
    }),
    defineField({
      name: "ctaSecondaryText",
      title: "Secondary Button Text",
      type: "string",
      initialValue: "Support the Foundation",
    }),
    defineField({
      name: "ctaSecondaryLink",
      title: "Secondary Button Link",
      type: "string",
      initialValue: "#donate",
    }),
    defineField({
      name: "sideQuote",
      title: "Side Quote (Desktop)",
      type: "text",
      rows: 3,
      description: "The quote that appears on the right side on desktop",
      initialValue:
        "D'Sean's legacy lives on — a force of positivity, artistic creation, and community empowerment for young athletes.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Portrait Image",
      type: "image",
      options: { hotspot: true },
      description: "The main portrait image of D'Sean Perry",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hero Section" };
    },
  },
});
