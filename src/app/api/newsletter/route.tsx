import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const { email } = payload;
    if (!email) {
      return NextResponse.json(
        { message: "Add Required field" },
        { status: 403 }
      );
    }
    const url = "https://api.brevo.com/v3/contacts";

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ message: "API key missing" }, { status: 500 });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        updateEnabled: false,
        email: email,
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [3],
      }),
    });
    const result = await response.json();
    console.log(result);
    if (result?.code == "duplicate_parameter") {
      return NextResponse.json(
        { message: "Email is already registered." },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { message: "Email registered successfully." },
        { status: 201 }
      );
    }
  } catch (e) {
    console.log(e);
  }
}
