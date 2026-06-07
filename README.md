<div align="center">

# Arjun PJ — Developer Portfolio

A modern, animated developer portfolio built with **React**, **TypeScript**, and **Vite**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://arjunpj.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-arjunpj--11-181717?style=for-the-badge&logo=github)](https://github.com/arjunpj-11)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-arjun--pj-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/arjun-pj)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

- 🎬 Animated greeting / loading screen
- 🧭 Responsive sticky navigation
- 🦸 Hero section with profile photo and social links
- 🛠 Skills and technology showcase
- 📅 Experience timeline
- 🗂 Project cards with GitHub social preview image support
- 📬 Contact section
- 🖱 Custom cursor and interactive UI effects
- 🌊 Smooth scroll-reveal animations
- 📱 Fully responsive design
- ⚡ Vercel-ready deployment config

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| CSS | Styling & animations |
| Lucide React | Icon library |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── project-previews/       # Social preview images for project cards
│       └── README.md
├── src/
│   ├── assets/
│   │   └── profile.jpeg        # Your profile photo
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Loader.tsx          # Animated loading screen
│   │   ├── Nav.tsx             # Responsive navigation
│   │   └── UIEffects.tsx       # Custom cursor & scroll effects
│   ├── data/
│   │   └── portfolio.ts        # ✏️ All your portfolio content lives here
│   ├── lib/
│   │   └── api.ts
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/arjunpj-11/arjun-portfolio.git
cd arjun-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |

---

## ✏️ Customization

Almost all portfolio content is managed from a single file:

```
src/data/portfolio.ts
```

You can update:

- Name, role, headline, and location
- Email and social links (GitHub, LinkedIn)
- Skills and tech stack
- Experience timeline entries
- Projects (title, description, links, preview images)

### 🖼 Adding Project Preview Images

Place your preview images in:

```
public/project-previews/
```

Then reference them in `src/data/portfolio.ts`:

```ts
{
  title: 'Imminiq',
  socialPreviewImage: '/project-previews/Imminiq.png',
  socialPreviewAlt: 'Imminiq GitHub social preview',
  // ...other fields
}
```

---

## 🌐 Deployment

This project is pre-configured for **Vercel** deployment via `vercel.json`.

### Steps

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Select **Vite** as the framework preset
4. Deploy

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |

---

## 📌 Repository Description

> Modern React + TypeScript developer portfolio built with Vite, featuring animated loading, smooth UI effects, responsive sections, project showcases with social preview images, and JAMstack static portfolio data.

---

## 🧑‍💻 Author

**Arjun PJ**

- GitHub: [@arjunpj-11](https://github.com/arjunpj-11)
- LinkedIn: [arjun-pj](https://linkedin.com/in/arjun-pj)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
