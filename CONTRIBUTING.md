# Contributing to Moodie

First off, thank you for considering contributing to Moodie! It's people like you that make Moodie such a great tool for understanding digital mental health.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem** in as many details as possible
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**
* **Include your environment details** (OS, Node version, Python version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and the expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the JavaScript/Python styleguides
* Include appropriate test cases
* End all files with a newline
* Avoid platform-dependent code

## Development Setup

### Prerequisites

* Node.js (v18.0.0 or higher)
* npm (v8.0.0 or higher)
* Python (v3.11 or higher)
* Git

### Setting Up Your Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Moodie.git
   cd Moodie
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/puneeth072003/Moodie.git
   ```

3. **Install Backend Dependencies**
   ```bash
   npm install
   ```

4. **Install Python Dependencies**
   ```bash
   pip install praw vaderSentiment
   ```

5. **Install Frontend Dependencies**
   ```bash
   cd Frontend
   npm install
   cd ..
   ```

6. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Application

**Terminal 1 - Backend:**
```bash
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm run dev
```

### Running Tests

```bash
npm test
```

### Building for Production

**Backend:**
```bash
npm run build
```

**Frontend:**
```bash
cd Frontend
npm run build
```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
  * 🎨 `:art:` when improving the format/structure of the code
  * 🐛 `:bug:` when fixing a bug
  * ✨ `:sparkles:` when introducing a new feature
  * 📚 `:books:` when writing docs
  * 🚀 `:rocket:` when improving performance
  * ✅ `:white_check_mark:` when adding tests
  * 🔒 `:lock:` when dealing with security
  * ⬆️ `:arrow_up:` when upgrading dependencies
  * ⬇️ `:arrow_down:` when downgrading dependencies

### JavaScript Styleguide

* Use semicolons
* Use 2 spaces for indentation
* Use `const` by default, `let` if you need to reassign
* Use arrow functions `=>` instead of the `function` keyword
* Use template literals for string interpolation
* Use meaningful variable names

### Python Styleguide

* Follow PEP 8 guidelines
* Use 4 spaces for indentation
* Use meaningful variable names
* Add docstrings to functions and classes
* Use type hints where applicable

## Testing

* Write tests for new features
* Ensure all tests pass before submitting a PR
* Aim for at least 80% code coverage
* Use descriptive test names

### Test Structure

```javascript
describe('Feature Name', () => {
  it('should do something specific', () => {
    // Arrange
    // Act
    // Assert
  });
});
```

## Documentation

* Update README.md if you change functionality
* Add comments for complex logic
* Update API documentation if you modify endpoints
* Include examples for new features

## Additional Notes

### Issue and Pull Request Labels

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested
* `wontfix` - This will not be worked on

## Recognition

Contributors will be recognized in:
* The project README
* Release notes
* GitHub contributors page

## Questions?

Feel free to open an issue with the label `question` or reach out to the maintainers.

Thank you for contributing to Moodie! 🎉

