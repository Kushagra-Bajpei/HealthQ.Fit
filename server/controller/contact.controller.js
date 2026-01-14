// import { Contact } from "../model/contact.model.js";
// import nodemailer from "nodemailer";

// export const sendMessage = async (req, res) => {
//   try {
//     const {
//       fullName,
//       email,
//       phone = "",
//       service = "",
//       healthGoals = "",
//       preferredTime = "",
//       message = ""
//     } = req.body || {};

//     if (!fullName || !email) {
//       return res.status(400).json({ error: "fullName and email are required" });
//     }

//     // ✅ Save data to MongoDB
//     const doc = new Contact({
//       uid: req.user?.uid || null,
//       fullName,
//       email,
//       phone,
//       service,
//       healthGoals,
//       preferredTime,
//       message
//     });

//     await doc.save();

//     // ✅ Setup Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // ✅ Email content
//     const mailOptions = {
//       from: `"Health N Hacks" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Consultation Confirmation - Health N Hacks",
//       html: `
//         <div style="font-family: Arial, sans-serif; color: #333;">
//           <h2>Hi ${fullName},</h2>
//           <p>Thank you for booking a consultation with <b>Health N Hacks</b> 💚</p>
//           <p>Here are your booking details:</p>
//           <ul>
//             <li><b>Service:</b> ${service}</li>
//             <li><b>Preferred Time:</b> ${preferredTime}</li>
//           </ul>
//           <p>We’ll contact you soon to confirm your appointment!</p>
//           <br/>
//           <hr/>
//           <p style="font-size: 14px;">Warm regards,<br/>Team <b>Health N Hacks</b></p>
//         </div>
//       `,
//     };

//     // ✅ Send confirmation email
//     await transporter.sendMail(mailOptions);

//     return res.status(201).json({
//       success: true,
//       message: "Form submitted successfully. Confirmation email sent.",
//     });
//   } catch (err) {
//     console.error("sendMessage error:", err);
//     return res
//       .status(500)
//       .json({ error: "Server error. Please try again later." });
//   }
// };


import { Contact } from "../model/contact.model.js";
import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone = "",
      service = "",
      healthGoals = "",
      preferredTime = "",
      message = ""
    } = req.body || {};

    if (!fullName || !email) {
      return res.status(400).json({
        error: "fullName and email are required",
      });
    }

    // ✅ 1. Save to DB FIRST
    const contact = await Contact.create({
      uid: req.user?.uid || null,
      fullName,
      email,
      phone,
      service,
      healthGoals,
      preferredTime,
      message,
      status: "pending",
    });

    // ✅ 2. Respond to frontend IMMEDIATELY
    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: contact,
    });

    // ✅ 3. Send email AFTER response (NON-BLOCKING)
    (async () => {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.verify();

        await transporter.sendMail({
          from: `"Health N Hacks" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Consultation Confirmation - Health N Hacks",
          html: `
            <h2>Hi ${fullName}, 👋</h2>
            <p>Your consultation request has been received.</p>
            <hr/>
            <ul>
              <li><b>Email:</b> ${email}</li>
              <li><b>Phone:</b> ${phone || "N/A"}</li>
              <li><b>Service:</b> ${service || "N/A"}</li>
              <li><b>Health Goals:</b> ${healthGoals || "N/A"}</li>
              <li><b>Preferred Time:</b> ${preferredTime || "N/A"}</li>
              <li><b>Message:</b> ${message || "N/A"}</li>
            </ul>
            <p>We will contact you shortly.</p>
          `,
        });

        console.log("✅ Email sent to:", email);
      } catch (err) {
        console.error("❌ Email error (ignored):", err.message);
      }
    })();

  } catch (err) {
    console.error("❌ sendMessage error:", err);
    return res.status(500).json({
      error: "Server error. Please try again later.",
    });
  }
};
