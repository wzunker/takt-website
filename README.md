# Takt Company Website

Welcome to the official Takt company website repository. This project hosts our company website at [taktconnect.com](https://taktconnect.com).

## About Takt

Takt is named after "takt time"—the pace of production needed to meet customer demand. In German, takt also means beat, rhythm, or measure. We aspire to be the heartbeat of reliable, efficient, and sustainable manufacturing.

## Project Overview

This website is built using modern web technologies and deployed on Azure Static Web Apps for optimal performance and reliability.

### Tech Stack
- **Frontend**: React with Vite
- **Styling**: TailwindCSS with Takt brand colors
- **Hosting**: Azure Static Web Apps
- **CI/CD**: GitHub Actions
- **Domain**: Custom domain with SSL

### Brand Colors
- Takt Orange: `#E16809`
- Takt Green: `#3E553C`
- Iron Grey: `#322E2D`
- Canvas Cream: `#F7F3E9`

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/[username]/takt-website.git
cd takt-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
takt-website/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── styles/            # CSS and styling
│   └── App.jsx            # Main app component
├── public/                # Static assets
├── tasks/                 # Project management and checklists
└── brand-guideline/       # Brand guidelines and assets
```

## Deployment

The website is automatically deployed to Azure Static Web Apps when changes are pushed to the `main` branch. The deployment process is handled by GitHub Actions.

- **Production**: [taktconnect.com](https://taktconnect.com)
- **Staging**: Provided by Azure Static Web Apps

## Brand Guidelines

This project follows the Takt brand guidelines located in `/brand-guideline/brand-guideline.md`. Key principles:

- **Font**: Poppins (friendly, trustworthy, modern)
- **Colors**: Warm, sustainable palette
- **Design**: Curved edges, generous white space, warm feel
- **Voice**: Friendly, professional, conversational

## Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Test locally
4. Create a pull request to `develop`
5. After review, merge to `main` for deployment

## Infrastructure

This project uses Azure Static Web Apps for hosting with the following benefits:
- Global CDN distribution
- Automatic SSL certificates
- GitHub integration for CI/CD
- Scalable serverless functions (when needed)

For detailed infrastructure setup, see `/tasks/00_website_infrastructure/infrastructure_checklist.md`.

## License

© 2025 Takt. All rights reserved.

## Contact

For questions about this website or Takt:
- Website: [taktconnect.com](https://taktconnect.com)
- Repository issues: Use GitHub Issues for technical questions
