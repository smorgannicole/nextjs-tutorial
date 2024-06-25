// creating api endpoint for sending emails
// in a real application however, there wouldn't be an endpoint for sending emails...
// instead it would be part of business ops- ex...
// someone submits an order and recieves an automated email

import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
// Resend is a class so we have to create an instance of it
const resend = new Resend(process.env.RESEND_API_KEY);
// we're passing our API key

export async function POST(request: NextRequest) {
  await resend.emails.send({
    from: "domain email here",
    // this email has to be from a domain you own (can't use gmail, yahoo, etc)...
    // would need to configure domain in resend then add the email here
    to: "smorgannicole@gmail.com",
    subject: "subject",
    react: <WelcomeTemplate name="Morgan" />,
    // should be set to the react component that represents the email template
  });

  return NextResponse.json({});
}
