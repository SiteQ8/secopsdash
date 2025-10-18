# Frequently Asked Questions (FAQ)

## General Questions

### What is SecOpsDash?

SecOpsDash is a free, open-source security operations dashboard designed for SOC analysts, security managers, and cybersecurity teams. It provides beautiful visualizations of security metrics, threat intelligence, vulnerabilities, compliance status, and incident response data.

### Is SecOpsDash really free?

Yes! SecOpsDash is 100% free and open source under the MIT license. You can use it, modify it, and distribute it for any purpose, including commercial use.

### Who should use SecOpsDash?

- **SOC Analysts** - Monitor security operations
- **Security Managers** - Track team performance
- **CISOs** - Executive security dashboards
- **Security Consultants** - Demonstrate capabilities
- **Students** - Learn cybersecurity concepts
- **Small Businesses** - Without budget for expensive SIEM

### Does it work with real data?

Currently, SecOpsDash v1.0 includes realistic demo data. Version 1.1 (Q1 2026) will add SIEM integrations for Splunk, ELK, Azure Sentinel, and QRadar. See our [Roadmap](ROADMAP.md) for details.

## Installation & Setup

### What are the system requirements?

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- 2GB RAM minimum
- 500MB disk space

### How do I install SecOpsDash?

```bash
git clone https://github.com/SiteQ8/secopsdash.git
cd secopsdash
npm install
npm run dev
```

See the [README](README.md) for detailed instructions.

### Can I deploy it to production?

Yes! SecOpsDash supports multiple deployment options:
- **GitHub Pages** - Free hosting
- **Docker** - Containerized deployment
- **Vercel/Netlify** - One-click deployment
- **Self-hosted** - nginx/Apache

### Does it work offline?

Yes, SecOpsDash works offline with demo data. For real-time data sources, you'll need internet connectivity.

## Features & Functionality

### What dashboards are included?

1. **Executive Dashboard** - Security posture overview
2. **Threat Intelligence** - Global threats and IOCs
3. **Vulnerability Management** - CVE tracking
4. **Compliance Center** - CBK, PCI DSS, CIS, ISO 27001
5. **Incident Response** - Active incidents tracking

### Can I customize the dashboards?

Yes! SecOpsDash is highly customizable:
- Multiple themes (Dark, Light, Cyberpunk, Matrix)
- Plugin system for custom widgets
- Dashboard layout customization (coming in v1.2)
- Custom data sources (coming in v1.1)

### What data sources does it support?

**v1.0 (Current):**
- JSON demo data files

**v1.1 (Q1 2026):**
- Splunk Enterprise/Cloud
- Elastic Stack (ELK)
- Azure Sentinel
- QRadar
- Generic REST APIs
- CSV/JSON imports

### Does it support mobile devices?

Yes! SecOpsDash is fully responsive and optimized for:
- iOS (iPhone/iPad)
- Android phones and tablets
- Touch-friendly controls
- Mobile-optimized charts

### Can I export reports?

Yes, SecOpsDash supports:
- PDF export (current)
- CSV export (current)
- Scheduled reports (coming in v1.2)
- Custom report templates (coming in v1.2)

## Security & Privacy

### Is my data secure?

Yes! SecOpsDash prioritizes security:
- No telemetry or tracking
- No data sent to external servers
- All data stays on your infrastructure
- Open source code (audit yourself)
- Security headers enabled
- Regular security updates

### Do you collect any data?

**No.** SecOpsDash does not collect, store, or transmit any user data. Everything runs locally in your browser or on your server.

### How do I report a security vulnerability?

Please email security issues to **Site@hotmail.com** with "SecOpsDash Security Vulnerability" in the subject. See our [Security Policy](SECURITY.md) for details.

### Is it compliant with regulations?

SecOpsDash is designed to be compliance-friendly:
- GDPR compliant (no data collection)
- SOC 2 friendly architecture
- Tracks CBK framework compliance
- Supports PCI DSS monitoring
- ISO 27001 compliance tracking

## Technical Questions

### What technologies does it use?

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Build**: Vite
- **Routing**: React Router

### Can I use it with my existing SIEM?

Yes! Version 1.1 (Q1 2026) will add SIEM connectors. Until then, you can:
- Export data from your SIEM to JSON
- Use the CSV import feature
- Wait for official integrations

### Does it require a database?

No! SecOpsDash v1.0 is a static web application that runs in the browser. For production deployments with real-time data (v1.1+), you can optionally use a database.

### Can I run it behind a firewall?

Yes! SecOpsDash can run completely offline behind a firewall with no external dependencies for the demo data version.

### What browsers are supported?

- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with ES6+ support

## Customization

### How do I add custom themes?

See the [Theme Customization Guide](docs/themes.md). You can:
- Modify existing themes
- Create new color schemes
- Add custom CSS
- Share themes with community

### Can I build custom widgets?

Yes! SecOpsDash has a plugin system. See the [Plugin Development Guide](docs/plugins.md) to:
- Create custom widgets
- Extend functionality
- Share plugins with community

### How do I change the demo data?

Edit the JSON files in `public/demo-data/`:
- `alerts.json` - Security alerts
- `vulnerabilities.json` - CVE data
- `incidents.json` - Incident data
- `metrics.json` - Performance metrics
- `compliance.json` - Compliance scores

### Can I white-label it?

Yes! Under the MIT license, you can:
- Remove SecOpsDash branding
- Add your own logo
- Customize colors and styling
- Deploy as your own product

(We'd appreciate attribution, but it's not required!)

## Community & Support

### How do I get help?

- 💡 **GitHub Discussions**: Ask questions
- 📧 **Email**: Site@hotmail.com
- 🐛 **Issues**: Report bugs on GitHub

### How can I contribute?

See [CONTRIBUTING.md](CONTRIBUTING.md) for:
- Code contributions
- Bug reports
- Feature suggestions
- Documentation improvements
- Community support

### Is there a community?

Yes! Join us:
- **GitHub Discussions**: Q&A and ideas
- **LinkedIn**: Updates and articles

### Can I sponsor the project?

Yes! We accept sponsorships via:
- [GitHub Sponsors](https://github.com/sponsors/SiteQ8)
- Direct contact for enterprise sponsorships

All funds go toward development, hosting, and community support.

## Licensing & Legal

### What license does it use?

MIT License - the most permissive open source license. See [LICENSE](LICENSE) for full text.

### Can I use it commercially?

Yes! The MIT license allows commercial use without restrictions.

### Do I need to give attribution?

Not required by the license, but greatly appreciated! A link back to the project helps it grow.

### Can I sell it?

Yes, you can sell SecOpsDash or services built on it. However, users can also get it free from our GitHub repo.

### What about trademark?

"SecOpsDash" is not a registered trademark. You're free to use it, but please don't create confusion about the official project.

## Troubleshooting

### The app won't start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Charts aren't rendering

Check your browser console for errors. Make sure you're using a modern browser with JavaScript enabled.

### Deployment failed

Ensure:
- Node version is 18+
- All dependencies installed (`npm ci`)
- Build completed successfully (`npm run build`)
- dist/ folder exists

### Docker container won't start

```bash
# Check logs
docker logs secopsdash

# Rebuild image
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Need more help?

Visit our [GitHub Discussions](https://github.com/SiteQ8/secopsdash/discussions).

## Future Plans

### When will [feature] be released?

Check our [Roadmap](ROADMAP.md) for planned features and timelines. Dates are estimates and may change.

### Can I request a feature?

Yes! Open a [feature request](https://github.com/SiteQ8/secopsdash/issues/new?template=feature_request.md) on GitHub.

### Will there be a paid version?

No paid version is planned. SecOpsDash will always be free and open source. We may offer optional:
- Premium plugins (community marketplace)
- Enterprise support contracts
- Consulting services
- Training workshops

### How can I stay updated?

- ⭐ Star the GitHub repo
- 👀 Watch the repo for releases
- 📧 Subscribe to our newsletter (coming soon)

---

## Still have questions?

- 💡 [Open a Discussion](https://github.com/SiteQ8/secopsdash/discussions)
- 📧 Email: site@hotmail.com

**We're here to help!** 🛡️
