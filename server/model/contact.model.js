// model/contact.model.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  uid: { type: String }, // firebase uid (optional)
  fullName: { type: String, required: true, trim: true, maxlength: 100 },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid email"]
  },
  phone: { type: String, trim: true, maxlength: 30 },
  service: { type: String, trim: true, maxlength: 150 },
  healthGoals: { type: String, trim: true, maxlength: 1000 },
  preferredTime: { type: String, trim: true, maxlength: 100 },
  message: { type: String, trim: true, maxlength: 2000 },
  status: { type: String, enum: ["pending", "responded", "archived"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

contactSchema.index({ email: 1, createdAt: -1 });

export const Contact = mongoose.model("Contact", contactSchema);
