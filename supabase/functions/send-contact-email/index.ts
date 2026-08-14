import { serve } from "https://deno.land/std/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const body = await req.json();

  const { name, email, subject, message } = body;

  await resend.emails.send({

    from: "GMH Website <onboarding@resend.dev>",

    to: "malkimaryia1@gmail.com",

    subject: `New Contact Form: ${subject}`,

    html: `
      <h2>New Contact Form Submission</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Subject:</strong> ${subject}</p>

      <p>${message}</p>
    `,

  });

 return new Response("ok", {
  headers: corsHeaders,
});

});
