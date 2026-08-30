import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export const runtime = "nodejs";

const allowedInterests = new Set([
  "Volunteering",
  "Sponsorship or partnership",
  "Youth athletics and mentorship",
  "Events and community drives",
  "Scholarships and education",
  "Something else",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Bots commonly fill fields that are visually hidden from people.
    if (clean(body.website, 200)) {
      return Response.json({ ok: true }, { status: 201 });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 40);
    const interest = clean(body.interest, 100);
    const message = clean(body.message, 4000);

    if (
      name.length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !allowedInterests.has(interest) ||
      message.length < 10
    ) {
      return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const token = process.env.SANITY_API_WRITE_TOKEN;
    if (!token || projectId === "placeholder") {
      console.error("Inquiry storage is not configured: SANITY_API_WRITE_TOKEN is missing.");
      return Response.json({ error: "Inquiry storage is not configured yet." }, { status: 503 });
    }

    const writeClient = createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: false,
    });

    const inquiry = await writeClient.create({
      _type: "inquiry",
      name,
      email,
      ...(phone ? { phone } : {}),
      interest,
      message,
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    return Response.json({ ok: true, id: inquiry._id }, { status: 201 });
  } catch (error) {
    console.error("Unable to save inquiry", error);
    return Response.json({ error: "We could not save your inquiry. Please try again." }, { status: 500 });
  }
}
