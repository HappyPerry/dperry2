import { defineField, defineType } from "sanity";

export default defineType({
  name: "missionSection",
  title: "Mission Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "Our Mission",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline Line 1",
      type: "string",
      initialValue: "Continuing What",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline Line 2 (Accent Color)",
      type: "string",
      initialValue: "D'Sean Started",
    }),
    defineField({
      name: "missionQuote",
      title: "Main Mission Quote",
      type: "text",
      rows: 3,
      initialValue:
        "The D'Sean Perry Foundation empowers youth through athletics, education, and community — carrying forward the spirit of a young man who believed everyone deserved a chance to shine.",
    }),
    defineField({
      name: "pillars",
      title: "Mission Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Pillar Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Pillar Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      initialValue: [
        {
          title: "Youth Athletics",
          description:
            "Free football camps and sports mentorship programs empowering young athletes in Miami and beyond to pursue their dreams through discipline, teamwork, and perseverance.",
        },
        {
          title: "Education",
          description:
            "Scholarship programs for student-athletes who embody D'Sean's spirit of academic excellence, artistic passion, and dedication to personal growth.",
        },
        {
          title: "Community",
          description:
            "Holiday bike drives, outreach events, and initiatives that carry forward D'Sean's natural gift for bringing people together and lifting up his community.",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Mission Section" };
    },
  },
});
