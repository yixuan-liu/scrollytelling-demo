# Scrollytelling Artifact Gallery

An immersive, interactive web experience built with Next.js and Framer Motion. This project creates a "scrollytelling" journey to explore high-resolution historical artifacts through scroll-driven deep zooms, panning cameras, and narrative text reveals.

## ✨ Features

- **Scroll-Driven Narrative:** Utilizes Framer Motion's `useScroll` and `useTransform` to map user scroll progress directly to CSS properties (scale, opacity, translation).
- **Cinematic "Cloaking" Transitions:** Sections seamlessly slide over previous ones using a `-100vh` overlapping margin architecture, creating a physical "stacking" feel.
- **Deep-Zoom Panning:** Specialized `<PanExhibitSection />` components allow the camera to zoom in and pan across high-res images to inspect fine details like collar lace dimensions and button arrangements.
- **Smart Navigation:** Includes interactive, bouncing Heroicon UI overlays that allow users to seamlessly click to the next or previous historical era.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18)
- **Language:** TypeScript
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [@heroicons/react](https://heroicons.com/)

## 🚀 Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
