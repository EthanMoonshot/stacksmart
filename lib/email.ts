import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function getFromAddress() {
  return process.env.EMAIL_FROM || "StackSmart <hello@stacksmart.app>";
}

export async function sendProductEmail({
  to,
  subject,
  heading,
  body,
  ctaLabel,
  ctaHref,
}: {
  to: string;
  subject: string;
  heading: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  if (!resend) {
    return { skipped: true, reason: "RESEND_API_KEY not configured" };
  }

  return resend.emails.send({
    from: getFromAddress(),
    to,
    subject,
    html: `
      <div style="font-family: Inter, Arial, sans-serif; background:#020617; color:#e2e8f0; padding:32px;">
        <div style="max-width:560px; margin:0 auto; background:#0f172a; border:1px solid #1e293b; border-radius:16px; padding:32px;">
          <div style="font-size:12px; letter-spacing:0.08em; color:#38bdf8; text-transform:uppercase; font-weight:700; margin-bottom:16px;">StackSmart</div>
          <h1 style="font-size:28px; line-height:1.2; margin:0 0 16px; color:#fff;">${heading}</h1>
          <p style="font-size:16px; line-height:1.7; color:#cbd5e1; margin:0 0 24px;">${body}</p>
          ${ctaLabel && ctaHref ? `<a href="${ctaHref}" style="display:inline-block; background:#0ea5e9; color:#fff; text-decoration:none; padding:12px 18px; border-radius:10px; font-weight:600;">${ctaLabel}</a>` : ""}
          <p style="font-size:13px; line-height:1.6; color:#64748b; margin:24px 0 0;">This is an automated message from StackSmart.</p>
        </div>
      </div>
    `,
  });
}
