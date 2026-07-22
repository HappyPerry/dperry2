import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "About D'Sean",
    }),
    defineField({
      name: "headline",
      title: "Headline Line 1",
      type: "string",
      initialValue: "More Than an",
    }),
    defineField({
      name: "headlineAccent",
      title: "Headline Accent Word",
      type: "string",
      initialValue: "Athlete",
    }),
    defineField({
      name: "paragraph1",
      title: "Story Paragraph 1",
      type: "text",
      rows: 4,
      initialValue:
        "Born and raised in Miami, Florida, D'Sean Perry was a force of nature — on the field, in the studio, and in every life he touched. A standout at Gulliver Prep and a linebacker for the University of Virginia (#41), D'Sean embodied strength, intellect, artistic passion, and unfailing warmth.",
    }),
    defineField({
      name: "paragraph2",
      title: "Story Paragraph 2",
      type: "text",
      rows: 4,
      initialValue:
        "Beyond his football talent, D'Sean was an accomplished studio art major, a poet, and a community mentor who believed in using his platform to uplift others. His life continues to inspire thousands to lead with love, purpose, and creative expression.",
    }),
    defineField({
      name: "essayQuote",
      title: "Essay Quote (In His Own Words)",
      type: "text",
      rows: 3,
      initialValue:
        "Whatever I do in the future, I will make sure that whoever has helped me become successful will receive something in return. All I want to do is make my family and the city I'm from proud.",
    }),
    defineField({
      name: "essayQuoteSource",
      title: "Essay Quote Source",
      type: "string",
      initialValue: "D'Sean Perry, High School English Essay",
    }),
    defineField({
      name: "parentsTribute",
      title: "Parents' Tribute",
      type: "text",
      rows: 3,
      initialValue:
        "D'Sean was a loving, giving, caring, God-fearing young man who made his family proud. Football and art was his passion, but the love that he had for his family, friends, and community was proven time and time again...",
    }),
    defineField({
      name: "coachTribute",
      title: "Coach's Tribute",
      type: "text",
      rows: 3,
      initialValue:
        "D'Sean was a delightful, respectful, hard-working person who was one of the best overall young men our communities had to offer. He had a fierce competitive nature, but he was kind and had a strong faith.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Section" };
    },
  },
});
