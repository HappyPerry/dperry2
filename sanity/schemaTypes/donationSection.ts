import { defineField, defineType } from "sanity";

export default defineType({
  name: "donationSection",
  title: "Donation Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "Support the Mission",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline Line 1",
      type: "string",
      initialValue: "Continue His",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline Line 2 (Accent Color)",
      type: "string",
      initialValue: "Legacy",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      initialValue:
        "Every contribution helps us carry forward D'Sean's vision — empowering young athletes, supporting students, and strengthening the communities he loved.",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      description: "The background image for the donation section",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Donation Section" };
    },
  },
});
