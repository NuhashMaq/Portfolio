# Mashfiq Naushad - Portfolio Website

A modern, highly animated portfolio website built with React, TypeScript, and Tailwind CSS, featuring Figma-style animations and interactions.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Advanced Animations**: Framer Motion powered animations with parallax scrolling
- **Interactive Elements**: 3D card flips, hover effects, and micro-interactions  
- **Responsive Design**: Optimized for all screen sizes and devices
- **Performance Optimized**: Lazy loading, optimized images, and smooth animations
- **Accessible**: WCAG compliant with proper contrast ratios and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion + React Scroll Parallax
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Projects gallery
│   ├── Certifications.tsx # 3D flip cards
│   ├── Experience.tsx   # Timeline
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer section
│   └── ParticleBackground.tsx # Animated particles
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: #1E90FF (Dodger Blue)
- **Accent**: #4B6CB7 (Electric Indigo) 
- **Background**: #111218 (Dark Gray)
- **Text**: #FAFBFF (Off White)

### Typography
- **Headings**: Poppins (Bold, Tracking Tight)
- **Body**: Inter (Regular, Medium)
- **Code**: JetBrains Mono

### Animations
- **Page Transitions**: Fade + Slide + Stagger
- **Scroll Effects**: Parallax with Locomotive Scroll
- **Hover States**: Lift + Glow + Scale
- **Loading States**: Skeleton + Shimmer

## 📧 Contact

- **Email**: mashfiq.cse.ruet@gmail.com
- **Phone**: +880 1780875544
- **Location**: Bangladesh

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Images from Pexels (stock photos)
- Icons from Lucide React
- Animations powered by Framer Motion