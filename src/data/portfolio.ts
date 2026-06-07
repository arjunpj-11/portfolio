export type Skill = {
  name: string
  level: string
  description: string
}

export type Experience = {
  type: string
  title: string
  subtitle: string
  period: string
  description: string
  tags: readonly string[]
}

export type Project = {
  title: string
  category: string
  description: string
  stack: string
  github?: string
  live?: string
  socialPreviewImage?: string
  socialPreviewAlt?: string
  accent: string
}

export const portfolioData = {
  profile: {
    name: 'Arjun PJ',
    role: 'Full Stack Developer',
    headline:
      'MERN Stack Developer building production-grade full-stack applications with clean architecture, backend systems, and AI-powered features.',
    linkedin: 'https://linkedin.com/in/arjun-pj',
    github: 'https://github.com/arjunpj-11',
    email: 'arjunpj11@gmail.com',
    location: 'Kerala, India',
    available: true,
    stats: [
      { value: '5+', label: 'Projects' },
      { value: '1+', label: 'Year building' },
    ],
  },
  skills: [
    {
      name: 'Backend Architecture',
      level: 'Production focused',
      description:
        'Express, TypeScript, clean architecture, REST APIs, session auth, MVC and modular service design.',
    },
    {
      name: 'Frontend Engineering',
      level: 'React focused',
      description:
        'React, TypeScript, Tailwind CSS, Three.js, Next.js, responsive UI and reusable components.',
    },
    {
      name: 'Database & Cache',
      level: 'Practical systems',
      description:
        'MongoDB, Redis, schema design, session storage and performance-aware data access patterns.',
    },
    {
      name: 'Realtime & Jobs',
      level: 'System features',
      description:
        'Socket.io, BullMQ and event-driven workflows for interactive, real-time full-stack apps.',
    },
    {
      name: 'AI Integration',
      level: 'Product features',
      description:
        'LLM APIs, Groq/Gemini workflows, prompt engineering, roadmap-based learning and AI-powered user tools.',
    },
    {
      name: '3D & WebGL',
      level: 'Creative engineering',
      description:
        'Three.js, WebGL, 3D web development and immersive virtual world experiences.',
    },
    {
      name: 'Payments & Auth',
      level: 'Integration depth',
      description:
        'Razorpay payment flows, session auth, OAuth and secure full-stack user management.',
    },
  ] as Skill[],
  techTags: [
    'Node.js',
    'Express',
    'TypeScript',
    'React',
    'Next.js',
    'MongoDB',
    'Redis',
    'BullMQ',
    'Socket.io',
    'Three.js',
    'WebGL',
    'Tailwind CSS',
    'Razorpay',
    'Piston',
    'Groq / Gemini',
    'Turborepo',
    'REST APIs',
    'GitHub',
  ],
  experiences: [
    {
      type: 'Training · Full Stack Development',
      title: 'Brototype',
      subtitle: 'MERN Stack Development Student · Ernakulam, Kerala',
      period: 'Sep 2024 – Present',
      description:
        'Intensive full-stack developer apprenticeship. Built a production-grade e-commerce platform with Razorpay, coupon system, wallet and admin analytics. Currently building Imminiq — an AI-powered learning platform with personalized roadmaps, real-time code execution, clean architecture backend, and hardened auth (OAuth, 2FA, refresh-token rotation). Wrote 37 automated tests covering auth flows, security middleware and token rotation.',
      tags: [
        'Clean Architecture',
        'Turborepo',
        'Socket.io',
        'BullMQ',
        'Groq / Gemini / Cerebras',
        'Vitest',
        'Supertest',
        'OAuth',
        '2FA',
        'Razorpay',
      ],
    },
    {
      type: 'Education · Computer Science',
      title: 'Sree Sankara English Medium School',
      subtitle: 'Plus Two · Computer Science Specialization',
      period: 'Jun 2021 – Mar 2023',
      description:
        'Developed a strong foundation in algorithms, logic and mathematics. This analytical mindset directly drives how I approach system design, backend architecture and structured problem-solving.',
      tags: ['Algorithms', 'Mathematics', 'Logic & Reasoning', 'Computer Science'],
    },
  ] as Experience[],
  projects: [
    {
      title: 'Imminiq',
      category: 'AI Learning Platform',
      description:
        'A production-grade AI-powered learning platform with personalized roadmaps, lesson-based AI chat, in-browser code execution, activity heatmaps, progress tracking, and hardened auth — OAuth, 2FA, refresh-token rotation, CSRF protection and security audit logging.',
      stack: 'React · TypeScript · Express · MongoDB · Redis · BullMQ · Socket.io',
      github: 'https://github.com/arjunpj-11/Imminiq',
      socialPreviewImage: '/project-previews/Imminiq.png',
      socialPreviewAlt: 'Imminiq GitHub social preview',
      accent: '01',
    },
    {
      title: 'AI Study Tracker',
      category: 'AI Learning Tool',
      description:
        'An AI-powered study and interview prep platform with structured roadmaps, AI-generated explanations, context-based doubt solving, mock MCQ tests and progress tracking across JavaScript, React, TypeScript, DSA and modern web dev topics.',
      stack: 'React · Vite · TypeScript',
      github: 'https://github.com/arjunpj-11/Mernstack-Tracker',
      socialPreviewImage: '/project-previews/interviewtracker.png',
      socialPreviewAlt: 'AI Study Tracker GitHub social preview',
      accent: '02',
    },
    {
      title: 'Grand V1',
      category: '3D Virtual World Platform',
      description:
        'A full-stack browser-based virtual world where cities, buildings and products are backend-managed and rendered in real time. Built as a proof-of-concept metaverse foundation with a data-driven 3D mall environment.',
      stack: 'Next.js · Three.js · Express · MongoDB',
      github: 'https://github.com/arjunpj-11/GrandMall-virtualWorld',
      socialPreviewImage: '/project-previews/grand.png',
      socialPreviewAlt: 'Grand V1 GitHub social preview',
      accent: '03',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack App',
      description:
        'A complete e-commerce platform covering the full shopping lifecycle — cart, orders, payments, coupons, wallet, and a full admin dashboard with sales analytics, product management and order oversight.',
      stack: 'Node.js · Express · MongoDB · EJS',
      github: 'https://github.com/arjunpj-11/Arni',
      socialPreviewImage: '/project-previews/Arni.png',
      socialPreviewAlt: 'E-Commerce Platform GitHub social preview',
      accent: '04',
    },
    {
      title: 'Session Group Manager',
      category: 'Productivity Tool',
      description:
        'Restructures communication sessions by splitting students into groups of three with dedicated Google Meet links — giving each person ~15 minutes of active speaking time. No-login user experience with one-click group publishing for admins.',
      stack: 'React · Vite · Node.js · Express · MongoDB',
      github: 'https://github.com/arjunpj-11/StudyCircle',
      socialPreviewImage: '/project-previews/studycircle.png',
      socialPreviewAlt: 'Session Group Manager GitHub social preview',
      accent: '05',
    },
  ] as Project[],
} as const
