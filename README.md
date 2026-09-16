# HealthQ.Fit 🌿

> **Clinical Nutrition Platform by Dr. Arun Sharma**  
> Personalized meal plans · AI health coaching · Diabetes & weight management · Progress tracking

![Stack](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![Stack](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js) ![Stack](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb) ![Stack](https://img.shields.io/badge/Firebase-Auth-FFCA28?logo=firebase) ![Stack](https://img.shields.io/badge/Groq-AI-FF6B35) ![Stack](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss)

---

## 🔗 Live URLs (Quick Access)

- 🌍 **Frontend Website (Vercel):** [https://health-q-fit.vercel.app/](https://health-q-fit.vercel.app/)
- ⚙️ **Backend API Server (Render):** [https://healthq-fit.onrender.com/](https://healthq-fit.onrender.com/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)

---

## 🌟 Overview

HealthQ.Fit is a full-stack SaaS nutrition platform built for Dr. Arun Sharma's clinical nutrition practice. It allows patients to:

- Browse services and book consultations online
- Sign in with Google and access a personalized dashboard
- Track daily habits, nutrition goals, and weight progress
- Get AI-generated meal plans powered by Groq (LLaMA 3.3)
- Chat with an AI health assistant in real time

---

## 🛠 Tech Stack

### Frontend (`/client`)
| Technology | Purpose |
|-----------|---------|
| React 19 + Vite 7 | UI framework & build tool |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations & transitions |
| React Router v7 | Client-side routing |
| Firebase Auth | Google OAuth sign-in |
| Lucide React | Icon library |

### Backend (`/server`)
| Technology | Purpose |
|-----------|---------|
| Node.js + Express 5 | REST API server |
| MongoDB Atlas + Mongoose | Database & ODM |
| Firebase Admin SDK | Server-side token verification |
| Groq SDK (LLaMA 3.3) | AI meal plans & chatbot |
| Nodemailer + Gmail SMTP | Consultation confirmation emails |
| dotenv | Environment variable management |

---

## 📁 Project Structure

```
HealthQ.Fit/
├── client/                      # React frontend (Vite)
│   ├── public/
│   │   └── logo.jpeg            # Brand logo
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Sticky navbar with dark mode & auth
│   │   │   ├── Footer.jsx       # Footer with links & contact info
│   │   │   ├── AIChatbot.jsx    # Floating AI chat widget
│   │   │   ├── MealRecommendation.jsx  # AI meal plan generator
│   │   │   ├── Hero3D.jsx       # Animated hero visual
│   │   │   ├── Views.jsx        # Scrolling testimonial marquee
│   │   │   ├── PrivateRoute.jsx # Auth guard for protected pages
│   │   │   └── ScrollToTop.jsx  # Scroll reset on route change
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── About.jsx        # Dr. Arun's bio & qualifications
│   │   │   ├── Services.jsx     # Service offerings
│   │   │   ├── Testimonials.jsx # Patient success stories
│   │   │   ├── Blog.jsx         # Health articles listing
│   │   │   ├── BlogPost.jsx     # Individual blog post
│   │   │   ├── Contact.jsx      # Consultation booking form
│   │   │   ├── Login.jsx        # Google sign-in
│   │   │   ├── Signup.jsx       # Account creation
│   │   │   ├── Dashboard.jsx    # User dashboard (protected)
│   │   │   ├── MyPlans.jsx      # Nutrition plans (protected)
│   │   │   ├── Progress.jsx     # Weight & habit tracking (protected)
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   ├── TermsOfService.jsx
│   │   │   └── CookiePolicy.jsx
│   │   ├── contexts/
│   │   │   ├── AuthContext.jsx  # Firebase auth state
│   │   │   └── ThemeContext.jsx # Dark / light mode
│   │   ├── firebase/
│   │   │   └── config.js        # Firebase client initialization
│   │   ├── App.jsx              # Routes definition
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Global styles + Tailwind + tokens
│   ├── .env                     # Frontend env vars (VITE_*)
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                      # Express backend (Node.js)
│   ├── controller/
│   │   ├── ai.controller.js     # Groq AI chat endpoint
│   │   └── contact.controller.js # Contact form + email sender
│   ├── middleware/
│   │   └── auth.middleware.js   # Firebase token verification
│   ├── model/
│   │   └── contact.model.js     # MongoDB contact schema
│   ├── routes/
│   │   ├── ai.route.js          # POST /api/v1/ai/chat
│   │   └── contact.route.js     # POST /api/v1/contact/submit
│   ├── index.js                 # Express app entry point
│   ├── .env                     # Backend secrets (never commit!)
│   └── package.json
│
└── README.md                    # ← You are here
```

---

## ✨ Features

### Public Pages
- **Home** — Hero section, doctor branding, services, testimonial marquee, CTA
- **About** — Dr. Arun Sharma's qualifications, background, and philosophy
- **Services** — Detailed breakdown of all nutrition programs offered
- **Testimonials** — Filterable patient success stories with before/after
- **Blog** — Health articles with individual post pages
- **Contact** — Consultation booking form (saves to DB + sends confirmation email)

### Authenticated Pages (Google Sign-In required)
- **Dashboard** — Personalized greeting, daily habit tracker, weekly progress, AI meal generator
- **My Plans** — View active/upcoming/locked nutrition plans with meal details
- **Progress** — Weight tracking chart, calorie/hydration/activity bars, milestone timeline

### Platform Features
- 🌙 **Dark / Light mode** toggle (persists via localStorage)
- 🤖 **AI Chatbot** — floating widget powered by Groq/LLaMA, available on all pages
- 🥗 **AI Meal Planner** — generates custom 1-day meal plans based on goals & diet type
- 📧 **Email confirmations** — Nodemailer sends styled HTML email to user + admin on form submit
- 🔒 **Protected routes** — Firebase ID tokens verified server-side on contact form submission

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9
- A MongoDB Atlas account
- A Firebase project (for Google Auth)
- A Groq API key (free at [console.groq.com](https://console.groq.com))

### 1. Clone the repo
```bash
git clone https://github.com/Kushagra-Bajpei/HealthQ.Fit.git
cd HealthQ.Fit
```

### 2. Start the Backend
```bash
cd server
npm install
npm run dev          # Starts on http://localhost:5000
```

### 3. Start the Frontend
```bash
cd client
npm install
npm run dev          # Starts on http://localhost:5173
```

---

## 🔐 Environment Variables

### `client/.env`
```env
VITE_API_URL=http://localhost:5000

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### `server/.env`
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/healthqfit?retryWrites=true&w=majority&appName=Cluster0

EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16char_app_password   # Gmail App Password (no spaces)

GROQ_API_KEY=gsk_your_groq_key
FIREBASE_SERVICE_ACCOUNT={"type":"service_account",...}   # Paste full JSON as single line
```

> ⚠️ **Never commit `.env` files to Git.** Both are already in `.gitignore`.

---

## 📡 API Reference

Base URL: `http://localhost:5000`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/` | None | Health check — shows DB status |
| `POST` | `/api/v1/contact/submit` | Firebase Token | Submit consultation form |
| `POST` | `/api/v1/ai/chat` | None | AI chatbot message |
| `GET` | `/api/v1/auth/test` | Firebase Token | Verify token (dev only) |

### POST `/api/v1/contact/submit`
**Headers:** `Authorization: Bearer <firebaseIdToken>`  
**Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "service": "Weight Management",
  "healthGoals": "Lose 10kg in 3 months",
  "preferredTime": "10:00 AM - 11:00 AM",
  "message": "Looking forward to the consultation"
}
```

### POST `/api/v1/ai/chat`
**Body:**
```json
{
  "prompt": "Give me a vegetarian meal plan for weight loss"
}
```

---

## 🌐 Deployment

| Part | Platform | Notes |
|------|----------|-------|
| Frontend | **Vercel** | Set `VITE_*` env vars in Vercel dashboard |
| Backend | **Render** | Set all `server/.env` vars in Render environment |
| Database | **MongoDB Atlas** | Free M0 tier — whitelist `0.0.0.0/0` for Render |
| Auth | **Firebase** | Add production domain to Firebase authorized domains |

**For production**, update `client/.env`:
```env
VITE_API_URL=https://your-render-backend.onrender.com
```

And add your Render backend URL to the `allowedOrigins` array in `server/index.js`.

---

## 👨‍⚕️ About Dr. Arun Sharma

Clinical Nutritionist & Lifestyle Disease Expert with a background in Civil Engineering (BHEL Haridwar). Combines analytical precision with evidence-based nutrition science to help patients prevent and reverse lifestyle diseases.

📍 Khurram Nagar, Lucknow, Uttar Pradesh, India  
📧 Dr.Arunsharma@gmail.com  
🕐 Mon–Sat: 9AM – 6PM

---

*Built with ❤️ by the HealthQ.Fit team*
