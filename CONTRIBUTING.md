# Contributing to SecOpsDash

First off, thank you for considering contributing to SecOpsDash! 🎉

It's people like you that make SecOpsDash such a great tool for the security community.

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🎯 How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Use the bug report template and include:**
- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node version)
- Any error messages or console output

### Suggesting Enhancements 💡

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- List any alternatives you've considered
- Include mockups or examples if applicable

### Pull Requests 🚀

We actively welcome your pull requests! Here's the process:

1. **Fork the repository** and create your branch from `main`
2. **Name your branch** descriptively (e.g., `feature/dark-web-monitoring` or `fix/alert-rendering-bug`)
3. **Make your changes** following our code style guidelines
4. **Test thoroughly** - ensure your changes don't break existing functionality
5. **Update documentation** if you're changing functionality
6. **Write clear commit messages** following conventional commits format
7. **Submit your pull request** with a comprehensive description

#### Pull Request Guidelines:

- Fill in the PR template completely
- Link related issues
- Include screenshots for UI changes
- Ensure all tests pass
- Update the CHANGELOG.md if applicable
- Keep PRs focused - one feature/fix per PR

## 🏗️ Development Setup

### Prerequisites

- Node.js 18+ and npm 9+
- Git
- A code editor (VS Code recommended)

### Local Development

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/secopsdash.git
cd secopsdash

# Add upstream remote
git remote add upstream https://github.com/SiteQ8/secopsdash.git

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Project Structure

```
secopsdash/
├── src/
│   ├── components/     # React components
│   │   ├── dashboards/ # Dashboard pages
│   │   ├── widgets/    # Reusable widgets
│   │   ├── layout/     # Layout components
│   │   └── common/     # Common UI components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── themes/         # Theme configurations
│   ├── types/          # TypeScript type definitions
│   └── App.tsx         # Main app component
├── public/
│   ├── demo-data/      # JSON demo data files
│   └── screenshots/    # Project screenshots
└── docs/               # Documentation
```

## 🎨 Code Style Guidelines

### TypeScript/React

- Use TypeScript for all new files
- Use functional components with hooks (no class components)
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Use ES6+ features (arrow functions, destructuring, etc.)

**Example:**

```typescript
/**
 * Formats a security alert for display
 * @param alert - The raw alert object
 * @returns Formatted alert with severity color
 */
export const formatAlert = (alert: Alert): FormattedAlert => {
  return {
    ...alert,
    severityColor: getSeverityColor(alert.severity),
    formattedTime: formatTimestamp(alert.timestamp),
  };
};
```

### CSS/Tailwind

- Use Tailwind utility classes wherever possible
- Follow mobile-first responsive design
- Use semantic class names for custom CSS
- Group related Tailwind classes together

**Example:**

```tsx
<div className="flex flex-col gap-4 p-6 bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
  {/* Content */}
</div>
```

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```
feat(dashboard): add real-time threat map widget

fix(alerts): resolve sorting issue in alerts feed

docs(readme): update installation instructions

style(components): format code with prettier

refactor(hooks): optimize useDemoData hook performance

test(utils): add unit tests for data formatting functions

chore(deps): update dependencies to latest versions
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write tests for all new features
- Test edge cases and error conditions
- Use descriptive test names
- Follow the AAA pattern (Arrange, Act, Assert)

**Example:**

```typescript
describe('formatAlert', () => {
  it('should format critical alerts with red color', () => {
    // Arrange
    const alert: Alert = {
      id: 'ALT-001',
      severity: 'critical',
      title: 'Test Alert',
      timestamp: '2025-10-18T14:00:00Z',
    };

    // Act
    const result = formatAlert(alert);

    // Assert
    expect(result.severityColor).toBe('#DC2626');
    expect(result.formattedTime).toBeDefined();
  });
});
```

## 📝 Documentation

### Code Documentation

- Add JSDoc comments for functions and complex logic
- Document component props with TypeScript interfaces
- Include usage examples in component documentation

### User Documentation

- Update relevant docs in the `docs/` folder
- Add examples and screenshots where helpful
- Keep language clear and accessible

## 🏷️ Good First Issues

New to the project? Look for issues labeled `good first issue`:

These are typically:
- Well-defined and scoped
- Require minimal context
- Have clear acceptance criteria
- Perfect for getting familiar with the codebase

## 🎯 Areas We Need Help

### High Priority:
- 🔌 Plugin system implementation
- 🌐 Internationalization (more languages)
- 📱 Mobile app development
- 🔗 SIEM integrations (Splunk, ELK, Sentinel)
- 📊 Additional widgets and dashboards

### Medium Priority:
- 🎨 New themes and customization options
- 📈 Performance optimizations
- 🧪 Test coverage improvements
- 📚 Documentation and tutorials
- 🐛 Bug fixes and polish

### Community:
- 💬 Answering questions in Discord
- 📝 Writing blog posts and tutorials
- 🎥 Creating video content
- 🌍 Translations
- 🎤 Speaking about SecOpsDash

## 🔄 Review Process

1. **Automated Checks**: All PRs must pass CI/CD checks
2. **Code Review**: At least one maintainer will review your PR
3. **Testing**: Changes will be tested in a staging environment
4. **Merge**: Once approved, your PR will be merged!

**Review Timeline:**
- Initial response: Within 24-48 hours
- Full review: Within 1 week
- Merge: As soon as approved

## 🏆 Recognition

Contributors are recognized in several ways:

- Listed in [CONTRIBUTORS.md](CONTRIBUTORS.md)
- Mentioned in release notes
- Special role in Discord server
- Featured in social media shoutouts
- Priority support for your issues

## 💬 Getting Help

Need help with your contribution?

- 💬 **Discord**: Join our [Discord server](https://discord.gg/secopsdash)
- 📧 **Email**: ali@3li.info
- 💡 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Create an issue for bugs or problems

## 🎉 Your First Contribution

Never contributed to open source before? Here's a quick guide:

1. **Find an issue** labeled `good first issue`
2. **Comment** on the issue to let others know you're working on it
3. **Fork** the repository
4. **Create a branch** for your changes
5. **Make your changes** following our guidelines
6. **Test** your changes thoroughly
7. **Submit a PR** with a clear description
8. **Respond** to review feedback
9. **Celebrate** when your PR is merged! 🎊

## 📜 License

By contributing to SecOpsDash, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## 🙏 Thank You!

Your contributions make SecOpsDash better for everyone. Whether it's:
- 🐛 Fixing a bug
- ✨ Adding a feature
- 📚 Improving documentation
- 💬 Helping in Discord
- ⭐ Starring the repo
- 🐦 Sharing on social media

**Every contribution matters!** Thank you for being part of the SecOpsDash community! 🛡️

---

<div align="center">

**Ready to contribute? Pick an issue and let's build something amazing together!** 🚀

Made with ❤️ by the SecOpsDash community

</div>