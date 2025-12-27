# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing professional projects and technical expertise.

## 🚀 Live Demo

[View Portfolio](https://portfolio-hazel-omega-76.vercel.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Featured Projects](#featured-projects)
- [SEO & Performance](#seo--performance)
- [License](#license)

## 🎯 Overview

This portfolio website serves as a professional showcase of my work as a Front-End Developer specializing in React, JavaScript, and web accessibility. The site features a clean, mobile-first design with smooth navigation, interactive project galleries, and detailed project case studies.

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Dynamic Routing**: React Router v7 with hash link navigation for smooth scrolling
- **Project Showcase**: Detailed portfolio items with image galleries, tech stacks, and live demos
- **Interactive Gallery**: Custom lightbox with zoom, navigation, and keyboard controls
- **SEO Optimized**: Comprehensive meta tags including Open Graph and Twitter Cards
- **Resume Download**: Integrated resume download functionality
- **Professional Sections**:
  - Hero introduction with CTAs
  - Services/expertise overview
  - About me with tech stack categorization
  - Portfolio works with filtering
  - Contact information and social links

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library
- **React Router 7.9.1** - Client-side routing
- **React Router Hash Link 2.4.3** - Smooth scroll navigation
- **React Icons 5.5.0** - Icon components
- **CSS3** - Styling with custom properties and responsive design

### Build Tools
- **Vite 7.1.2** - Build tool and dev server
- **ESLint 9.33.0** - Code linting
- **@vitejs/plugin-react 5.0.0** - React Fast Refresh

### Development
- **Git** - Version control
- **GitHub** - Repository hosting

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Cesar_rea_resume.pdf
├── src/
│   ├── assets/
│   │   ├── icons/          # Custom icon components
│   │   └── img/            # Images and screenshots
│   ├── components/
│   │   ├── AboutMe.jsx     # About section with tech stack
│   │   ├── Body.jsx        # Home page container
│   │   ├── Footer.jsx      # Footer with social links
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Intro.jsx       # Hero section with CTAs
│   │   ├── MyServices.jsx  # Services/expertise section
│   │   ├── MyWorks.jsx     # Portfolio grid
│   │   ├── PageLayout.jsx  # Layout wrapper
│   │   ├── PortfolioItem.jsx # Individual project page
│   │   └── ScrollToTop.jsx # Scroll restoration utility
│   ├── data/
│   │   └── portfolio.json  # Portfolio data (projects & categories)
│   ├── styles/
│   │   ├── base.css        # CSS variables, reset, typography, buttons
│   │   └── components/     # Component-scoped stylesheets
│   │       ├── Header.css
│   │       ├── Intro.css
│   │       ├── MyServices.css
│   │       ├── AboutMe.css
│   │       ├── MyWorks.css
│   │       ├── Footer.css
│   │       └── PortfolioItem.css
│   ├── utils/
│   │   └── portfolioHelpers.js # Data helper functions
│   ├── App.jsx             # Root component with routes
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── CLAUDE.md               # AI coding assistant guidelines
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/IsahiRea/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Data Management

Portfolio projects are managed in `src/data/portfolio.json`. Each project includes:

- **Basic Info**: id, slug, title, subtitle
- **Descriptions**: shortDescription, fullDescription
- **Categorization**: category, tags, status
- **Technical Details**: technologies (frontend, backend, tools)
- **Media**: thumbnail, hero image, screenshots
- **Links**: live demo, GitHub repository
- **Metadata**: date, featured flag, highlights

### Helper Functions

The `src/utils/portfolioHelpers.js` module provides utilities for:
- Getting all/featured projects
- Filtering by category, tag, or status
- Searching projects
- Sorting by date, title, or featured status
- Project validation

## 🎨 Featured Projects

### Travel Agent
Full-stack travel planning application with AI-powered recommendations, processing 10,000+ API calls efficiently through advanced caching with IndexedDB.

**Tech**: React 19, OpenAI API, Amadeus API, OpenWeather API, IndexedDB

### Vanlife
React marketplace for van rentals with secure authentication, host dashboard, and Firebase integration, streamlining rental management with 50% fewer clicks.

**Tech**: React 18, React Router 6, Firebase Firestore, MirageJS

### Mind Map - Learning Tracker
Interactive learning visualization tool with draggable mind map nodes, Supabase backend, and comprehensive testing suite.

**Tech**: React 19, Supabase, React Query, Vitest

## 🔍 SEO & Performance

- Comprehensive meta tags for search engines and social media
- Open Graph protocol for rich social sharing
- Twitter Card optimization
- Mobile-first responsive design
- Lazy-loaded routes for optimal performance
- Semantic HTML structure
- Accessible navigation and content

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📧 Contact

Cesar Rea - [LinkedIn](https://linkedin.com/in/cesar-rea) - [GitHub](https://github.com/IsahiRea)

Portfolio: [https://portfolio-hazel-omega-76.vercel.app/](https://portfolio-hazel-omega-76.vercel.app/)

---

Built with ❤️ using React and Vite
