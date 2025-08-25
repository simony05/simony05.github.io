# Simon Yan Portfolio - React Version

This is a React.js refactor of Simon Yan's portfolio website, originally built with vanilla HTML, CSS, and JavaScript.

## Features

- **Modern React Architecture**: Built with functional components and hooks
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Component-Based Structure**: Modular components for easy maintenance
- **Interactive Elements**: Video modals, smooth scrolling, and hover effects
- **Mobile Navigation**: Hamburger menu for mobile devices

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Profile.js         # Hero section
│   ├── About.js           # About section with skills
│   ├── Projects.js        # Projects showcase
│   ├── Contact.js         # Contact information
│   └── Footer.js          # Footer navigation
├── App.js                 # Main app component
├── index.js               # React entry point
└── index.css              # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This will create a `build` folder with optimized production files.

## Assets

Make sure all your image assets are in the `public/assets/` folder:
- profile.png
- brainwave.png
- worldlybites.png
- winecalculator.png
- raspberry pi.png
- python.png
- c-.png
- js.png
- physics.png
- tensorflow.png
- email.png
- linkedin.png
- github.png
- simonresume.pdf

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with responsive design
- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic HTML structure

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The app can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3

## Original vs React Version

This React version maintains the exact same visual design and functionality as the original HTML version while providing:

- Better code organization
- Reusable components
- Easier maintenance
- Modern development workflow
- Better performance optimization
- Enhanced developer experience
