import { defineField, defineType } from "sanity";

export default defineType({
  name: "inquiry",
  title: "Inquiry",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "email", title: "Email", type: "string", validation: (rule) => rule.required().email() }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({
      name: "interest",
      title: "Area of Interest",
      type: "string",
      options: {
        list: [
          "Volunteering",
          "Sponsorship or partnership",
          "Youth athletics and mentorship",
          "Events and community drives",
          "Scholarships and education",
          "Something else",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "message", title: "Message", type: "text", rows: 6, validation: (rule) => rule.required() }),
    defineField({ name: "submittedAt", title: "Submitted At", type: "datetime", readOnly: true }),
    defineField({
      name: "status",
      title: "Follow-up Status",
      type: "string",
      initialValue: "new",
      options: {
        layout: "radio",
        list: [
          { title: "New", value: "new" },
          { title: "In Progress", value: "inProgress" },
          { title: "Contacted", value: "contacted" },
          { title: "Closed", value: "closed" },
        ],
      },
    }),
    defineField({ name: "internalNotes", title: "Internal Notes", type: "text", rows: 4 }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "interest", submittedAt: "submittedAt", status: "status" },
    prepare({ title, subtitle, submittedAt, status }) {
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString() : "No date";
      return { title, subtitle: `${subtitle || "General inquiry"} · ${status || "new"} · ${date}` };
    },
  },
});
