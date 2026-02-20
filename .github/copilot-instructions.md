# Copilot Instructions for Rural Farmers NGO Website

## Project Overview

This is a React + Vite + TailwindCSS website for a farming NGO. The project is mobile-first and fully responsive.

## Key Features

- Mobile-responsive design
- React 18 with JSX components
- TailwindCSS for styling
- Vite for fast development
- React Icons for UI icons

## Project Structure

```
Rural-Farmers/
├── src/
│   ├── components/      # Reusable React components
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # TailwindCSS configuration
├── vite.config.js      # Vite configuration
└── postcss.config.js   # PostCSS configuration
```

## Development Workflow

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Customization Guide

### Update Colors
Edit `tailwind.config.js` to change the color scheme:
- `primary`: Main brand color
- `secondary`: Secondary brand color
- `accent`: Highlight color
- `light`: Light background

### Add New Components
1. Create a new `.jsx` file in `src/components/`
2. Import React
3. Export a functional component
4. Import and add to `App.jsx`

### Modify Content
Update text directly in component files:
- Hero section: `Hero.jsx`
- About section: `About.jsx`
- Services: `Services.jsx`
- Contact info: `Contact.jsx`

## Important Notes

- All components must use `.jsx` extension
- Mobile-first CSS approach
- Use TailwindCSS utilities instead of custom CSS
- React Icons are available for UI elements
- The site automatically opens at localhost:3000 during development

## Installation

If you need to reinstall dependencies:
```bash
npm install
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Keep components small and focused
- Use React.memo for expensive components
- Lazy load images
- Minimize TailwindCSS build by using only used utilities

---

**Website Purpose**: Empower rural farmers through education, sustainable practices, and community support.
