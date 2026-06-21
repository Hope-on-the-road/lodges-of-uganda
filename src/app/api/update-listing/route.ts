import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.contactName || !data.contactEmail || !data.lodgeName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const photoSection =
      data.photoUrls && data.photoUrls.length > 0
        ? [
            `--- PHOTOS (${data.photoCount} uploaded) ---`,
            ...data.photoUrls.map((url: string, i: number) => `Photo ${i + 1}: ${url}`),
          ].join("\n")
        : `--- PHOTOS ---\n(no photos uploaded)`;

    const summary = [
      `=== LODGE UPDATE SUBMISSION ===`,
      ``,
      `Lodge: ${data.lodgeName}`,
      `Lodge ID: ${data.lodgeId}`,
      `Lodge Slug: ${data.lodgeSlug}`,
      `Region: ${data.lodgeRegion}`,
      `Submitted: ${data.submittedAt}`,
      ``,
      `--- CONTACT (not published) ---`,
      `Name: ${data.contactName}`,
      `Email: ${data.contactEmail}`,
      `Role: ${data.contactRole || "-"}`,
      ``,
      `--- LODGE CONTACT ---`,
      `Lodge Email: ${data.lodgeEmail || "-"}`,
      `Website: ${data.lodgeWebsite || "-"}`,
      `Phone: ${data.lodgePhone || "-"}`,
      `WhatsApp: ${data.lodgeWhatsApp || "-"}`,
      ``,
      `--- DESCRIPTION ---`,
      data.description || "(not provided)",
      ``,
      `--- ROOMS ---`,
      data.roomInfo || "(not provided)",
      ``,
      `--- AMENITIES ---`,
      data.amenities || "(not provided)",
      ``,
      `--- ACTIVITIES ---`,
      data.activities || "(not provided)",
      ``,
      `--- DINING ---`,
      data.dining || "(not provided)",
      ``,
      `--- SPECIAL FEATURES ---`,
      data.specialFeatures || "(not provided)",
      ``,
      `--- SUSTAINABILITY ---`,
      data.sustainability || "(not provided)",
      ``,
      photoSection,
      ``,
      `--- ADDITIONAL MESSAGE ---`,
      data.message || "(not provided)",
    ].join("\n");

    const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY;

    if (WEB3FORMS_KEY) {
      const emailRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Lodge Update: ${data.lodgeName}${data.photoCount > 0 ? ` (${data.photoCount} photos)` : ""}`,
          from_name: `${data.contactName} (${data.lodgeName})`,
          reply_to: data.contactEmail,
          message: summary,
        }),
      });

      if (!emailRes.ok) {
        console.error("Web3Forms error:", await emailRes.text());
        return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
      }
    } else {
      // Development fallback: log to console
      console.log("\n" + summary + "\n");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update listing error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
