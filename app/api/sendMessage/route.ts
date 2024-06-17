import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Define the type for the request body
interface RequestBody {
  email: string;
  message: string;
  name: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email, message, name } = (await request.json()) as RequestBody;

    console.log("NODEMAILER_EMAIL:", process.env.NODEMAILER_EMAIL);
    console.log("NODEMAILER_PW:", process.env.NODEMAILER_PW);

    if (!process.env.NODEMAILER_EMAIL || !process.env.NODEMAILER_PW) {
      throw new Error("Missing environment variables for Nodemailer");
    }

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
      secure: true,
    });

    const mailOption = {
      from: process.env.NODEMAILER_EMAIL,
      to: "tomfraczekdev@gmail.com",
      subject: "EMAIL SENT FROM YOUR WEBSITE",
      html: `
        <h3>Hello Tomek</h3>
        <p>You have received a new contact form submission with the following details:</p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Message: ${message}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error); // Log the error details
    return NextResponse.json(
      { message: "Failed to Send Email", error: error.message }, // Include the error message in the response
      { status: 500 }
    );
  }
}
