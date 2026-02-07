# ShiftUp - Electric Car Landing Page

A modern, responsive recreation of the ShiftUp theme header and hero section built with Next.js and Tailwind CSS.

## Features

### Header

- ✅ Transparent background initially
- ✅ Solid background with shadow on scroll
- ✅ Logo aligned left
- ✅ Centered navigation menu
- ✅ "Get Started" CTA button on right
- ✅ Fully responsive with hamburger menu on mobile
- ✅ Full-screen slide menu on mobile
- ✅ Accessible HTML with ARIA labels and focus states

### Hero Section

- ✅ Full viewport height (100vh)
- ✅ Background image with dark overlay
- ✅ Centered large heading and subtitle
- ✅ Two styled CTA buttons (primary & secondary)
- ✅ Smooth fade-in animation on page load
- ✅ Responsive typography and spacing
- ✅ Scroll indicator animation

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Inter & Montserrat fonts

## Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/
│   ├── globals.css       # Global styles & Tailwind imports
│   ├── layout.js         # Root layout with font configuration
│   └── page.js           # Home page
├── components/
│   ├── Header.jsx        # Main header with scroll behavior
│   ├── Hero.jsx          # Hero section with animations
│   └── MobileMenu.jsx    # Full-screen mobile menu
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── next.config.js        # Next.js configuration
```

## Components

### Header Component

- Sticky header with transparent-to-solid transition
- Desktop navigation with hover effects
- Mobile hamburger menu with smooth animations
- Accessible keyboard navigation

### Hero Component

- Full-height hero section
- Background image with overlay
- Fade-in animation on page load
- Two call-to-action buttons
- Scroll indicator

### MobileMenu Component

- Full-screen overlay menu
- Staggered fade-in animations
- Closes on backdrop click or ESC key
- Prevents body scroll when open

## Customization

### Colors

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  primary: '#ff6b35',  // Orange
  secondary: '#1a1a1a', // Dark gray
}
```

### Navigation Links

Edit the `navLinks` array in `components/Header.jsx`:

```js
const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  // Add more links...
];
```

### Hero Content

Modify text and buttons in `components/Hero.jsx`

## Responsive Breakpoints

- **Mobile**: < 1024px (hamburger menu)
- **Desktop**: ≥ 1024px (full navigation)

## Accessibility Features

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Skip to content link ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a recreation of the ShiftUp theme for educational purposes.
