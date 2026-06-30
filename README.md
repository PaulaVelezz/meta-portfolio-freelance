# 🚀 Meta Portfolio Freelance

A premium portfolio & digital studio website built with React, focused on editorial design, smooth animations, performance and scalable architecture.

> **Currently under active development.**

---

## 👋 About

This project is the foundation of my freelance portfolio and future digital studio.

The goal is to create a web experience inspired by studios and modern creative agencies, combining:

- Editorial layouts
- High-end UI/UX
- Motion Design
- Creative Development
- Performance
- Scalable React architecture

Besides showcasing projects, the website is also a playground for experimenting with animations, interactions and modern frontend techniques.

---

# 💻 Tech Stack

- React 19
- Vite
- JavaScript (ES6+)
- TailwindCSS
- React Router DOM
- Framer Motion
- GSAP
- Formik
- Yup
- Google Apps Script (backend / Sheets integration)
- Google reCAPTCHA v3

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-black?style=for-the-badge)
![GSAP](https://img.shields.io/badge/GSAP-Latest-88CE02?style=for-the-badge)
![reCAPTCHA](https://img.shields.io/badge/reCAPTCHA-v3-4285F4?logo=google)
![License](https://img.shields.io/badge/License-Custom-black)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)

---

# ✨ Features

- Premium Landing Page
- Editorial Portfolio
- Animated Page Loader
- Smooth Page Transitions
- Interactive Project Showcase
- Responsive Design
- Multi-step Contact Experience
- Google Sheets integration as lightweight CRM
- Anti-spam protection (honeypot, reCAPTCHA v3, rate limiting)
- Modern reusable component architecture

---

# 🛡️ Security & Anti-Spam

The contact form is connected to a Google Apps Script backend acting as a lightweight CRM (Google Sheets). To keep lead data clean and prevent bot/spam submissions, the pipeline runs three layers of protection, ordered from cheapest to most expensive check:

1. **Honeypot field** — a hidden `_trap` field invisible to real users. Any submission with this field populated is rejected instantly, with zero external calls.
2. **Rate limiting by IP** — using `CacheService`, a maximum of 3 submissions per IP is allowed every 10 minutes, preventing scripted flooding.
3. **Google reCAPTCHA v3** — invisible challenge that scores each submission (0–1). Submissions scoring below `0.5` are rejected.

```text
Request → Honeypot check → Rate limit check → reCAPTCHA verification → Save to Sheet
           (instant, free)   (instant, free)    (external API call)
```

---

# 📁 Project Structure

```text
src/
│
├── assets/
├── components/
├── pages/
├── hooks/
├── services/
├── schemas/
├── utils/
├── router/
└── App.jsx
```

---

# 🚧 Roadmap

- [x] Landing Page
- [x] GSAP Page Loader
- [x] Projects Page
- [x] React Router
- [x] Multi-step Contact Form
- [x] Google Sheets Integration
- [x] Anti-spam protection (honeypot, reCAPTCHA v3, rate limiting)

---

# 📝 Note

> This repository is under active development. Features, architecture and design may change as the project evolves.

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/meta-portfolio-freelance.git
```

Go into the project

```bash
cd meta-portfolio-freelance
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Create a production build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# 📸 Screenshots

Coming soon.

---

# 🌐 Live Demo

Coming soon.

---

# 🎨 Design Principles

This project follows a few core principles:

- Minimal but expressive interfaces
- Editorial typography
- Motion with purpose
- High performance
- Accessible interactions
- Reusable components
- Clean architecture
- Mobile-first development

---

# 📄 License

This project is licensed under the terms described in the **LICENSE.md** file.

---

## 👩‍💻 Author

Designed & developed by **Paula Velez.**

**Frontend Developer • UI Designer • Creative Developer**

- 🌐 GitHub: https://github.com/PaulaVelezz
- 💼 Portfolio: _Coming soon_
- 🤝 Open to freelance projects, company opportunities, and creative collaborations.
