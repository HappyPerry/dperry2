import { defineField, defineType } from "sanity";

export default defineType({
  name: "scholarshipSection",
  title: "Scholarship & Initiatives",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Text",
      type: "string",
      initialValue: "Our Initiatives",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline Line 1",
      type: "string",
      initialValue: "Investing in",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline Line 2 (Accent Color)",
      type: "string",
      initialValue: "Tomorrow's Leaders",
    }),

    // Bike Drive Initiative
    defineField({
      name: "bikeDriveBadge",
      title: "Bike Drive Badge",
      type: "string",
      initialValue: "Annual Signature Initiative",
    }),
    defineField({
      name: "bikeDriveTitle",
      title: "Bike Drive Title",
      type: "string",
      initialValue: "D'Sean Perry's Annual Bike Drive",
    }),
    defineField({
      name: "bikeDriveDescription",
      title: "Bike Drive Description",
      type: "text",
      rows: 4,
      initialValue:
        "Fulfilling D'Sean's personal dream of giving back to his community, the annual D'Sean Emir Perry Bike Drive provides hundreds of bicycles, helmets, and locks to local children every December. Hosted at the Second Baptist Church in Richmond Heights (Miami, FL), this signature event continues D'Sean's legacy of spreading joy, community safety, and opportunities for young kids.",
    }),

    // Scholarship Initiative
    defineField({
      name: "scholarshipBadge",
      title: "Scholarship Badge",
      type: "string",
      initialValue: "Educational Empowerment",
    }),
    defineField({
      name: "scholarshipTitle",
      title: "Scholarship Title",
      type: "string",
      initialValue: "The D'Sean Perry Memorial Scholarship",
    }),
    defineField({
      name: "scholarshipDescription",
      title: "Scholarship Description",
      type: "text",
      rows: 4,
      initialValue:
        "Awarding academic grants to high school seniors and college student-athletes who demonstrate exceptional commitment to leadership, creative expression, academic rigor, and community service.",
    }),
    defineField({
      name: "criteriaList",
      title: "Scholarship Criteria List",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "High school senior or undergraduate student-athlete",
        "Minimum 3.0 cumulative GPA",
        "Demonstrated involvement in arts, athletics, or community leadership",
        "Submission of personal essay on community impact",
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Scholarship & Initiatives" };
    },
  },
});
