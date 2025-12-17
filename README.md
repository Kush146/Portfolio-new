# Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and creative design with beautiful animations
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations using Framer Motion
- 🎨 Custom color palette with gradient effects
- 🚀 Optimized for Vercel deployment

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update social media links
   - Modify the description text

2. **About Section** (`components/About.tsx`):
   - Update the about text
   - Modify statistics (projects, experience, etc.)

3. **Skills Section** (`components/Skills.tsx`):
   - Add or remove skills
   - Update skill categories

4. **Projects Section** (`components/Projects.tsx`):
   - Replace with your actual projects
   - Update project links (GitHub and live demos)

5. **Contact Section** (`components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Configure form submission handler

### Color Palette

The color palette can be customized in `tailwind.config.ts`. The current palette includes:
- Primary colors (blue tones)
- Accent colors (purple/pink tones)
- Dark theme colors

## Deployment on Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
└── public/               # Static assets
```

## License

MIT License - feel free to use this project for your own portfolio!



