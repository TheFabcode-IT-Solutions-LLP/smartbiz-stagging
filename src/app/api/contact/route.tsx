import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const industry = formData.get("industry") as string;
    const website = formData.get("website") as string;
    const services = formData.getAll("services") as string[]; // for checkboxes/multiselect
    const projectDescription = formData.get("projectDescription") as string;
    const preferredCallTime = formData.get("preferredCallTime") as string;
    const estimatedBudget = formData.get("estimatedBudget") as string;
    const hearAboutUs = formData.get("hearAboutUs") as string;
    const hearAboutUsOther = formData.get("hearAboutUsOther") as string;
    const consent = formData.get("consent");
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    if (!name || !email || !consent) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const formattedServices = services?.length ? services.join(", ") : "N/A";

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Industry:</strong> ${industry || "N/A"}</p>
      <p><strong>Website:</strong> ${website || "N/A"}</p>
      <p><strong>Services Interested:</strong> ${formattedServices}</p>
      <p><strong>Project Description:</strong><br/>${projectDescription || "N/A"}</p>
      <p><strong>Preferred Call Time:</strong> ${preferredCallTime || "N/A"}</p>
      <p><strong>Estimated Budget:</strong> ${estimatedBudget || "N/A"}</p>
      <p><strong>Heard About Us:</strong> ${hearAboutUs}</p>
      ${hearAboutUs === "Other"
        ? `<p><strong>Other (Specify):</strong> ${hearAboutUsOther || "N/A"}</p>`
        : ""
      }
      <p><strong>Additional Message:</strong><br/>${message || "N/A"}</p>
    `;


    //attachment for file saving
    const attachments = [];

    if (file && file.name) {
      const buffer = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "hello@smartbizgenie.com",
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      text: projectDescription,
      html: htmlContent,
      attachments,
    });

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
