import { Contact } from "../model/contact.model.js";
import nodemailer from "nodemailer";

// ──────────────────────────────────────────────
// Create a reusable transporter (singleton)
// Uses explicit SMTP config instead of the "service" shorthand,
// which is more reliable in nodemailer v7.
// ──────────────────────────────────────────────
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,          // TLS (STARTTLS) — most reliable for Gmail
    secure: false,      // must be false for port 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Must be a Gmail App Password (16-char, no spaces)
    },
    tls: {
      rejectUnauthorized: false, // Prevents TLS cert issues in some environments
    },
  });
};

export const sendMessage = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone = "",
      service = "",
      healthGoals = "",
      preferredTime = "",
      message = "",
    } = req.body || {};

    // ── Validation ──────────────────────────────
    if (!fullName || !email) {
      return res.status(400).json({ error: "fullName and email are required" });
    }

    // ── 1. Save contact to MongoDB ───────────────
    const doc = new Contact({
      uid: req.user?.uid || null,
      fullName,
      email,
      phone,
      service,
      healthGoals,
      preferredTime,
      message,
    });

    await doc.save();
    console.log(`✅ Contact saved: ${fullName} <${email}>`);

    // ── 2. Send confirmation email (non-blocking) ─
    // We respond with success even if email fails — data is already saved.
    let emailSent = false;
    let emailError = null;

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = createTransporter();

        // ── Email to the USER (confirmation) ─────
        const userMailOptions = {
          from: `"HealthQ.Fit | Dr. Arun Sharma" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "✅ Consultation Request Received — HealthQ.Fit",
          html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; color: #1f2937; background: #f9fafb; padding: 0;">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #16a34a, #059669); padding: 32px 40px; border-radius: 12px 12px 0 0; text-align: center;">
                <h1 style="color: #fff; font-size: 26px; margin: 0; letter-spacing: -0.5px;">HealthQ<span style="color: #bbf7d0;">.Fit</span></h1>
                <p style="color: #d1fae5; font-size: 14px; margin: 6px 0 0;">Clinical Nutrition by Dr. Arun Sharma</p>
              </div>

              <!-- Body -->
              <div style="background: #ffffff; padding: 40px; border: 1px solid #e5e7eb; border-top: none;">
                <h2 style="font-size: 22px; margin: 0 0 16px; color: #111827;">Hi ${fullName}! 👋</h2>
                <p style="font-size: 16px; line-height: 1.7; color: #374151; margin: 0 0 20px;">
                  Thank you for booking a consultation with <strong>Dr. Arun Sharma</strong>. 
                  We've received your request and will reach out within <strong>24 hours</strong> to confirm your appointment.
                </p>

                <!-- Booking Details Card -->
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 20px 24px; margin: 24px 0;">
                  <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #15803d; margin: 0 0 16px;">📋 Your Booking Details</h3>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                      <td style="padding: 6px 0; color: #6b7280; width: 140px;">Service</td>
                      <td style="padding: 6px 0; font-weight: 600; color: #111827;">${service || "General Consultation"}</td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #6b7280;">Preferred Time</td>
                      <td style="padding: 6px 0; font-weight: 600; color: #111827;">${preferredTime || "To be confirmed"}</td>
                    </tr>
                    ${phone ? `<tr><td style="padding: 6px 0; color: #6b7280;">Phone</td><td style="padding: 6px 0; font-weight: 600; color: #111827;">${phone}</td></tr>` : ""}
                    ${healthGoals ? `<tr><td style="padding: 6px 0; color: #6b7280; vertical-align: top;">Health Goals</td><td style="padding: 6px 0; color: #374151;">${healthGoals}</td></tr>` : ""}
                  </table>
                </div>

                <p style="font-size: 14px; color: #6b7280; line-height: 1.6; margin: 0 0 24px;">
                  If you have any urgent questions, feel free to reach us at 
                  <a href="mailto:${process.env.EMAIL_USER}" style="color: #16a34a; text-decoration: none; font-weight: 600;">${process.env.EMAIL_USER}</a>
                </p>

                <!-- CTA Button -->
                <div style="text-align: center; margin: 28px 0 0;">
                  <a href="https://healthq.fit" 
                     style="background: #16a34a; color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 15px; display: inline-block; letter-spacing: 0.02em;">
                    Visit HealthQ.Fit
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="background: #f9fafb; padding: 20px 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
                <p style="font-size: 12px; color: #9ca3af; margin: 0;">
                  © ${new Date().getFullYear()} HealthQ.Fit · Khurram Nagar, Lucknow, UP, India<br/>
                  This email was sent because you submitted a consultation request on HealthQ.Fit.
                </p>
              </div>
            </div>
          `,
        };

        // ── Notification email to ADMIN ───────────
        const adminMailOptions = {
          from: `"HealthQ.Fit Contact Form" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          subject: `🔔 New Consultation Request — ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #1f2937; padding: 24px; background: #f9fafb; border-radius: 10px;">
              <h2 style="color: #16a34a; margin: 0 0 20px;">New Consultation Request</h2>
              <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
                <tr style="background: #f0fdf4;"><td style="padding: 12px 16px; font-weight: bold; width: 140px; color: #374151;">Name</td><td style="padding: 12px 16px;">${fullName}</td></tr>
                <tr><td style="padding: 12px 16px; font-weight: bold; color: #374151; border-top: 1px solid #f3f4f6;">Email</td><td style="padding: 12px 16px; border-top: 1px solid #f3f4f6;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr style="background: #f9fafb;"><td style="padding: 12px 16px; font-weight: bold; color: #374151; border-top: 1px solid #f3f4f6;">Phone</td><td style="padding: 12px 16px; border-top: 1px solid #f3f4f6;">${phone || "—"}</td></tr>
                <tr><td style="padding: 12px 16px; font-weight: bold; color: #374151; border-top: 1px solid #f3f4f6;">Service</td><td style="padding: 12px 16px; border-top: 1px solid #f3f4f6;">${service || "—"}</td></tr>
                <tr style="background: #f9fafb;"><td style="padding: 12px 16px; font-weight: bold; color: #374151; border-top: 1px solid #f3f4f6;">Preferred Time</td><td style="padding: 12px 16px; border-top: 1px solid #f3f4f6;">${preferredTime || "—"}</td></tr>
                <tr><td style="padding: 12px 16px; font-weight: bold; color: #374151; border-top: 1px solid #f3f4f6; vertical-align: top;">Health Goals</td><td style="padding: 12px 16px; border-top: 1px solid #f3f4f6;">${healthGoals || "—"}</td></tr>
                <tr style="background: #f9fafb;"><td style="padding: 12px 16px; font-weight: bold; color: #374151; border-top: 1px solid #f3f4f6; vertical-align: top;">Message</td><td style="padding: 12px 16px; border-top: 1px solid #f3f4f6;">${message || "—"}</td></tr>
              </table>
              <p style="font-size: 12px; color: #9ca3af; margin-top: 16px;">Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
            </div>
          `,
        };

        // Send both emails concurrently
        await Promise.all([
          transporter.sendMail(userMailOptions),
          transporter.sendMail(adminMailOptions),
        ]);

        emailSent = true;
        console.log(`✅ Confirmation email sent to ${email}`);
        console.log(`✅ Admin notification sent to ${process.env.EMAIL_USER}`);
      } catch (emailErr) {
        // Non-fatal — data is already saved, just log the failure
        emailError = emailErr.message;
        console.error("⚠️ Email send failed (non-fatal):", emailErr.message);
        if (emailErr.code === "EAUTH") {
          console.error("→ EAUTH: Gmail App Password is invalid or expired. Re-generate it at myaccount.google.com/apppasswords");
        }
      }
    } else {
      console.warn("⚠️ EMAIL_USER or EMAIL_PASS not set — skipping email.");
    }

    return res.status(201).json({
      success: true,
      message: emailSent
        ? "Consultation request received. Confirmation email sent!"
        : "Consultation request received and saved. Email notification is temporarily unavailable.",
      emailSent,
      ...(emailError && process.env.NODE_ENV === "development" ? { emailError } : {}),
    });
  } catch (err) {
    console.error("sendMessage error:", err);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
};
