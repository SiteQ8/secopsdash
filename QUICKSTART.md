# 🚀 Quick Start Guide

Get SecOpsDash up and running in 5 minutes!

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed ([Download](https://nodejs.org/))
- npm 9+ (comes with Node.js)
- Git installed ([Download](https://git-scm.com/))
- A code editor (VS Code recommended)

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/SiteQ8/secopsdash.git
cd secopsdash
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (~2 minutes).

### Step 3: Start Development Server

```bash
npm run dev
```

The app will start at `http://localhost:5173`

### Step 4: Open in Browser

Navigate to `http://localhost:5173` and you'll see the Executive Dashboard!

## 🎉 That's It!

You now have SecOpsDash running with demo data.

## Next Steps

### 1. Explore the Dashboards

Navigate through the sidebar:
- 📊 **Executive Dashboard** - Security overview
- 🌐 **Threat Intelligence** - Global threats
- 🔍 **Vulnerability Management** - CVE tracking
- 📋 **Compliance Center** - Framework status
- 🚨 **Incident Response** - Active incidents

### 2. Try Different Themes

Click the theme toggle in the header:
- 🌙 Dark (default)
- ☀️ Light
- 🎨 Cyberpunk
- 💚 Matrix

### 3. Customize Demo Data

Edit files in `public/demo-data/`:
```bash
public/demo-data/
├── alerts.json          # Security alerts
├── vulnerabilities.json # CVE data
├── incidents.json       # Incidents
├── metrics.json         # Performance metrics
└── compliance.json      # Compliance scores
```

### 4. Build for Production

```bash
npm run build
```

Production files will be in `dist/` folder.

### 5. Deploy

#### Option A: GitHub Pages
```bash
npm run deploy
```

#### Option B: Docker
```bash
docker-compose up
```

#### Option C: Vercel/Netlify
Connect your GitHub repo and deploy with one click.

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run format` | Format code |
| `npm test` | Run tests |

## Troubleshooting

### Port 5173 already in use?

```bash
# Kill process using the port
npx kill-port 5173

# Or specify different port
npm run dev -- --port 3000
```

### Dependencies won't install?

```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### App won't start?

Check that:
- Node.js version is 18+ (`node --version`)
- npm version is 9+ (`npm --version`)
- No errors in console
- Port 5173 is available

### Need more help?

- 💡 [GitHub Discussions](https://github.com/SiteQ8/secopsdash/discussions)
- 📧 Email: Site@hotmail.com

## Development Tips

### Recommended VS Code Extensions

Install these for the best development experience:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

```bash
# Auto-install recommended extensions
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
```

### Hot Reload

Changes are automatically reflected in the browser. No need to restart the dev server!

### Project Structure

```
src/
├── components/     # React components
│   ├── dashboards/ # Dashboard pages
│   ├── widgets/    # Reusable widgets
│   ├── layout/     # Layout components
│   └── common/     # Common UI components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── themes/         # Theme configurations
└── types/          # TypeScript types
```

## What's Next?

1. 📖 Read the [full README](README.md)
2. 🤝 Check [Contributing Guidelines](CONTRIBUTING.md)
3. 🗺️ See the [Roadmap](ROADMAP.md)
4. ❓ Read the [FAQ](FAQ.md)
5. ⭐ Star the repo if you like it!


---

**Welcome to SecOpsDash!** 🛡️

If you found this helpful, please ⭐ star the repo and share with others!

Questions? open a [Discussion](https://github.com/SiteQ8/secopsdash/discussions).
