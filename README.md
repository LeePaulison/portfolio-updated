# Portfolio — Updated

A modern, fast, and accessible developer portfolio powered by **Next.js 15**, **Tailwind CSS v4**, and **MDX content pages**. Designed to showcase projects, skills, and contact information with a clean UI and dark mode support.

## 🚀 Tech Stack

- **Next.js 15** with App Router and SSR
- **Tailwind CSS v4** (custom ShadCN-inspired theming)
- **MDX** for project page content
- **ShadCN UI** components
- **Dark Mode** with `class` strategy
- **EmailJS + reCAPTCHA v2** contact form
- **Fully responsive**, WCAG/508a-conscious design

## ✨ Features

- **Projects** loaded from MDX frontmatter (title, date, description, tags)
- **Project detail pages** at `/projects/[slug]`
- **Custom prose styling** compatible with Tailwind v4 (no plugin required)
- **Contact page** using EmailJS + spam-protected by Google reCAPTCHA
- **Theme-aware typography** and layout using OKLCH colors
- **Performance-conscious** layout with minimal JavaScript overhead

## 📂 Project Structure

```
/
├─ app/
│  ├─ page.jsx            # Home page
│  ├─ contact/            # Contact form page
│  ├─ projects/           # Projects index (optional) and slug pages
│
├─ components/
│  ├─ ProjectsTeaser.jsx  # Home teaser for recent projects
│  ├─ ContactForm.jsx     # Controlled form with EmailJS/reCAPTCHA
│
├─ content/
│  └─ projects/           # MDX project files with frontmatter
│
├─ lib/
│  ├─ get-mdx-page.js     # Loads MDX content and frontmatter
│  └─ mdx-utils.js        # Static param generator + frontmatter utilities
│
├─ public/
│  └─ assets/             # Logos, favicons, social thumbnails
│
├─ styles/
│  └─ globals.css         # Tailwind layer + prose styles
```

## 🛠️ Setup

1. **Install dependencies**

```bash
npm install
```

2. **Set up `.env.local`**

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

3. **Run the dev server**

```bash
npm run dev
```

---

## 📝 Writing New Projects

Create a new `.mdx` file in `/content/projects`:

```mdx
---
title: Project Name
description: One-liner for teaser view
date: 2025-06-15
tags: [Next.js, Tailwind, MDX]
---

# Project Name

Full content written in markdown, with headings, lists, and code blocks.

## Features

- Dynamic project routing
- Custom prose rendering
```

---

## 📤 Deployment

This project is Vercel-ready.

```bash
vercel deploy
```

Or use your preferred Next.js hosting platform with environment variable support.

---

## 📸 Screenshots

> _Add screenshots here of the home page, projects teaser, and an open MDX project page._

---

## 📄 License

MIT — [your name](https://github.com/your-handle)

---

## 🙏 Credits

- [ShadCN UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Next.js](https://nextjs.org)
