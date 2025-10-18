<div align="center">

# 🛡️ SecOpsDash

### Open-Source Security Operations Dashboard
**Your SOC Command Center - Beautiful, Fast, and Free**

[![GitHub stars](https://img.shields.io/github/stars/SiteQ8/secopsdash?style=social)](https://github.com/SiteQ8/secopsdash)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/SiteQ8)

[🚀 Live Demo](https://secopsdash.3li.info) • [📖 Documentation](https://github.com/SiteQ8/secopsdash/wiki) • [💬 Discord](https://discord.gg/secopsdash) • [🐦 Twitter](https://twitter.com/secopsdash)

</div>

---

## 🎯 What is SecOpsDash?

**SecOpsDash** is a beautiful, modern, and **completely free** security operations dashboard designed for SOC analysts, security professionals, and cybersecurity teams. Think of it as "Grafana for Security Teams" but simpler, more focused, and with a stunning UI that doesn't make your eyes bleed.

### Why SecOpsDash?

✅ **Beautiful by Design** - Dark mode, cyberpunk themes, and glassmorphism UI that security professionals actually want to use  
✅ **Works Out of the Box** - Includes realistic demo data and attack scenarios  
✅ **Mobile Responsive** - Monitor security on-the-go from any device  
✅ **Blazing Fast** - Loads in under 2 seconds, real-time updates  
✅ **Privacy First** - No telemetry, no data collection, fully open source  
✅ **Easy to Customize** - Plugin architecture and theme system  
✅ **MENA/Kuwait Ready** - Built-in CBK compliance tracking and Arabic support  

---

## ✨ Key Features

### 📊 **Multiple Dashboards**
- **Executive Dashboard** - High-level security posture and KPIs
- **Threat Intelligence** - Real-time threat feeds and IOC tracking
- **Vulnerability Management** - CVE tracking and patch management
- **Compliance Center** - CBK, PCI DSS, CIS Controls, ISO 27001
- **Incident Response** - Active incidents and team performance

### 🎨 **Stunning UI/UX**
- 🌙 **Dark Mode by Default** (security people love dark mode)
- 🌈 **Multiple Themes** - Dark, Light, Cyberpunk, Matrix
- ✨ **Smooth Animations** - Framer Motion powered transitions
- 📱 **Fully Responsive** - Desktop, tablet, and mobile optimized
- 🎭 **Glassmorphism Design** - Modern blur effects and gradients

### ⚡ **Real-Time Features**
- 🚨 Live alerts feed with severity-based coloring
- 📈 Animated metrics and counters
- 🌐 Interactive threat map
- 🔔 Real-time notifications
- ⏱️ Auto-refresh capabilities

### 🔌 **Extensibility**
- Plugin system for custom widgets
- Theme customization
- API integration ready
- Export to PDF/CSV
- Multi-language support (EN/AR)

---

## 📸 Screenshots

<div align="center">

### Executive Dashboard (Dark Theme)
![Executive Dashboard](public/screenshots/executive-dark.png)

### Threat Intelligence (Cyberpunk Theme)
![Threat Intelligence](public/screenshots/threat-intel-cyberpunk.png)

### Vulnerability Management
![Vulnerability Management](public/screenshots/vuln-management.png)

### Mobile View
<img src="public/screenshots/mobile.png" width="300" alt="Mobile View">

</div>

---

## 🚀 Quick Start

### Option 1: Run Locally (Recommended for Development)

```bash
# Clone the repository
git clone https://github.com/SiteQ8/secopsdash.git
cd secopsdash

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Option 2: Deploy to GitHub Pages

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Option 3: Run with Docker

```bash
# Pull and run the Docker image
docker run -p 3000:80 siteq8/secopsdash:latest

# Or use docker-compose
docker-compose up
```

---

## 🎨 Themes

SecOpsDash comes with multiple built-in themes. Switch between them using the theme toggle in the header.

| Theme | Description | Preview |
|-------|-------------|---------|
| **Dark** | Default slate theme | ![Dark](public/screenshots/theme-dark-thumb.png) |
| **Light** | Clean white theme | ![Light](public/screenshots/theme-light-thumb.png) |
| **Cyberpunk** | Neon pink/cyan theme | ![Cyberpunk](public/screenshots/theme-cyberpunk-thumb.png) |
| **Matrix** | Green terminal theme | ![Matrix](public/screenshots/theme-matrix-thumb.png) |

---

## 📊 Demo Data

SecOpsDash includes **realistic demo data** that tells a coherent security story:

🎭 **The Scenario:**
- A ransomware attack is detected and being investigated
- Multiple brute force attempts from a specific region
- Vulnerability patching is in progress
- Compliance scores are improving over time
- SOC team is responding effectively with good MTTR/MTTD

All demo data is stored in `public/demo-data/` as JSON files and can be easily customized.

---

## 🛠️ Tech Stack

Built with modern web technologies:

- ⚛️ **React 18** + **TypeScript** - Type-safe component development
- 🎨 **Tailwind CSS** - Utility-first styling
- 📊 **Recharts** - Beautiful, responsive charts
- ✨ **Framer Motion** - Smooth animations
- 🚦 **React Router** - Client-side routing
- 🌐 **Vite** - Lightning-fast build tool

---

## 🔌 Plugin System

Extend SecOpsDash with custom widgets and integrations:

```typescript
// Example plugin structure
import { Plugin } from '@secopsdash/types';

export const MyCustomWidget: Plugin = {
  name: 'custom-widget',
  version: '1.0.0',
  component: CustomWidgetComponent,
  config: {
    refreshInterval: 60000,
    dataSource: 'api.example.com'
  }
};
```

See [Plugin Development Guide](docs/plugins.md) for details.

---

## 🌍 Internationalization

SecOpsDash supports multiple languages:

- 🇬🇧 English (default)
- 🇰🇼 Arabic (العربية)

To add a new language, see [i18n Guide](docs/i18n.md).

---

## 📖 Documentation

- [Getting Started](docs/getting-started.md)
- [Configuration Guide](docs/configuration.md)
- [Plugin Development](docs/plugins.md)
- [Theme Customization](docs/themes.md)
- [API Reference](docs/api-reference.md)
- [Deployment Guide](docs/deployment.md)

---

## 🤝 Contributing

We love contributions! SecOpsDash is built by the community, for the community.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Good First Issues

Looking for a place to start? Check out our [good first issues](https://github.com/SiteQ8/secopsdash/labels/good%20first%20issue).

---

## 🗺️ Roadmap

### v1.0 (Current)
- [x] Executive Dashboard
- [x] Threat Intelligence Dashboard
- [x] Vulnerability Management
- [x] Compliance Center
- [x] Multiple themes
- [x] Mobile responsive

### v1.1 (Q1 2026)
- [ ] SIEM integration (Splunk, ELK, Sentinel)
- [ ] Real-time data feeds
- [ ] Advanced plugin marketplace
- [ ] Custom alerting rules
- [ ] User authentication

### v2.0 (Q2 2026)
- [ ] Multi-tenant support
- [ ] AI-powered threat detection
- [ ] Advanced analytics
- [ ] Mobile app (iOS/Android)
- [ ] Dark web monitoring

See full [ROADMAP.md](ROADMAP.md) for details.

---

## 💰 Sponsorship

SecOpsDash is **100% free and open source**. If you find it useful, consider:

- ⭐ **Starring this repository** (it really helps!)
- 💬 **Spreading the word** on social media
- 🐛 **Reporting bugs** and suggesting features
- 💝 **Sponsoring the project** on [GitHub Sponsors](https://github.com/sponsors/SiteQ8)

All sponsorship funds go toward:
- 🛠️ Development and maintenance
- 📚 Documentation and tutorials
- 🔒 Security audits
- 🌐 Hosting and infrastructure

---

## 📜 License

SecOpsDash is **MIT licensed**. You are free to use, modify, and distribute this project for any purpose, including commercial use.

```
MIT License

Copyright (c) 2025 Ali Al-Mutairi (SiteQ8)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

See [LICENSE](LICENSE) for the full text.

---

## 🙏 Acknowledgments

Built with ❤️ by security professionals, for security professionals.

Special thanks to:
- The amazing open-source community
- [TailAdmin](https://github.com/TailAdmin) for the admin template inspiration
- All our [contributors](https://github.com/SiteQ8/secopsdash/graphs/contributors)
- Kuwait cybersecurity community

---

## 🔗 Links

- 🌐 **Website:** [secopsdash.3li.info](https://secopsdash.3li.info)
- 📖 **Documentation:** [docs.secopsdash.io](https://docs.secopsdash.io)
- 💬 **Discord:** [Join our community](https://discord.gg/secopsdash)
- 🐦 **Twitter:** [@secopsdash](https://twitter.com/secopsdash)
- 📧 **Email:** ali@3li.info
- 🌍 **Author:** [Ali Al-Mutairi](https://3li.info) | [LinkedIn](https://linkedin.com/in/sitedali)

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=SiteQ8/secopsdash&type=Date)](https://star-history.com/#SiteQ8/secopsdash&Date)

---

<div align="center">

### Show Your Support

If SecOpsDash helps you in your security operations, please consider:

⭐ **Starring this repository**  
🐦 **Sharing on social media**  
💝 **Becoming a sponsor**

**Made with ❤️ in Kuwait 🇰🇼**

</div>