# Takt Website

The official website for Takt - your fire-fighting squad for every hair-on-fire production moment. Takt is a purpose-built AI retrieval engine for production teams, turning every input into output and delivering perfect, accurate, relevant information at your fingertips.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd takt-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website locally.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── HeroSection.jsx # Main hero area with demo video
│   ├── ThreePanelDemo.jsx # Interactive demo section
│   ├── CallToAction.jsx # CTA section
│   └── ...
├── constants/          # Brand constants and configuration
├── styles/            # CSS and styling files
└── assets/           # Images and static assets
```

## 🎨 Brand Guidelines

This website follows Takt's brand guidelines:

- **Colors**: Takt Orange (#E16809), Takt Green (#3E553C), Canvas Cream (#F7F3E9)
- **Typography**: Poppins font family
- **Design**: Warm, approachable, with curved edges and generous spacing
- **Voice**: Friendly, professional, and conversational

See `brand-guideline/brand-guideline.md` for complete brand documentation.

## 🛠️ Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Typed** - Typing animation effects
- **ESLint** - Code linting and quality

## 📦 Deployment

The website is configured for deployment on Azure Static Web Apps. See `AZURE_SETUP_GUIDE.md` for detailed deployment instructions.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🤝 Contributing

1. Follow the existing code style and component structure
2. Ensure all changes align with Takt's brand guidelines
3. Test locally before submitting changes
4. Run `npm run lint` to check for code quality issues

## 📄 License

This project is proprietary to Takt.
