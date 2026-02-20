# Rural Farmers NGO - Website

A mobile-responsive website for an NGO dedicated to empowering rural farmers through sustainable agriculture, training, and community support.

## Features

- 🌾 **Responsive Design** - Optimized for mobile, tablet, and desktop viewing
- 🎨 **Modern UI** - Built with React and TailwindCSS
- ⚡ **Fast Performance** - Powered by Vite for optimal build speed
- 📱 **Mobile-First** - Designed primarily for mobile users
- ♿ **Accessible** - Semantic HTML and ARIA labels included

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS 3
- **Icons**: React Icons
- **Language**: JSX

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      - Navigation and header with mobile menu
│   ├── Hero.jsx        - Landing section
│   ├── About.jsx       - About the NGO and mission
│   ├── Services.jsx    - Services offered
│   ├── Statistics.jsx  - Impact statistics
│   ├── GetInvolved.jsx - Call-to-action section
│   ├── Contact.jsx     - Contact form and information
│   └── Footer.jsx      - Footer with links
├── App.jsx             - Main app component
├── main.jsx            - Entry point
└── index.css           - Global styles with Tailwind directives
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Color Scheme

Modify the theme colors in `tailwind.config.js`:
- `primary`: Primary green color (#2d5016)
- `secondary`: Secondary green (#8b9b6b)
- `accent`: Gold accent color (#d4af37)
- `light`: Light background (#f5f5f0)

### Adding Components

Create new components in the `src/components/` directory with `.jsx` extension:

```jsx
export default function NewComponent() {
  return (
    <section className="py-16 md:py-24">
      {/* Your content here */}
    </section>
  )
}
```

Then import and use in `App.jsx`.

### Content Updates

Update text content directly in each component file:
- Hero section messages in `Hero.jsx`
- Services in `Services.jsx`
- Contact information in `Contact.jsx`

## Responsive Design

The site uses TailwindCSS breakpoints:
- Mobile: `max-width: 640px` (default)
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)

Classes like `hidden md:block` and `md:grid-cols-2` handle responsive behavior.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile Optimization

- Mobile-first CSS approach
- Touch-friendly button sizes
- Optimized images and assets
- Fast loading times with Vite

## License

This project is open source and available under the MIT License.

## Contact & Support

For questions or contributions, please reach out to the development team.

---

**Built with ❤️ for rural farmer communities**
