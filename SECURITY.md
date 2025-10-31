# Security Policy

## Reporting a Vulnerability

The Moodie team takes security seriously. If you discover a security vulnerability in Moodie, please email us at **pyd773@gmail.com** instead of using the public issue tracker.

Please include the following details in your report:

* **Description**: A clear description of the vulnerability
* **Location**: The file(s) and line number(s) affected
* **Reproduction Steps**: Step-by-step instructions to reproduce the issue
* **Impact**: What could an attacker do with this vulnerability?
* **Suggested Fix**: If you have a suggested fix, please include it

We will acknowledge your email within 48 hours and provide a more detailed response within 5 business days.

## Security Considerations

### API Security

* All API endpoints validate input to prevent injection attacks
* CORS is configured to allow only trusted origins
* Rate limiting should be implemented in production
* API keys and sensitive credentials must be stored in environment variables
* Use HTTPS in production environments

### Data Privacy

* User Reddit usernames are processed but not stored permanently
* Sentiment analysis results are not logged or stored without explicit consent
* No personal data is shared with third parties
* Comply with GDPR and other privacy regulations

### Authentication & Authorization

* Implement proper authentication mechanisms before deploying to production
* Use secure session management
* Implement role-based access control (RBAC) if needed
* Never commit credentials or API keys to the repository

### Dependency Security

* Regularly update dependencies using `npm audit` and `pip audit`
* Review security advisories for all dependencies
* Use lock files (package-lock.json, requirements.txt) to ensure reproducible builds
* Monitor for known vulnerabilities in dependencies

### Docker Security

* Use non-root user execution (already implemented)
* Scan Docker images for vulnerabilities
* Keep base images updated
* Don't run containers with `--privileged` flag
* Use read-only file systems where possible

### Kubernetes Security

* Use Network Policies to restrict traffic
* Implement Pod Security Policies
* Use RBAC for access control
* Enable audit logging
* Use TLS for all communications
* Regularly update Kubernetes cluster

### Environment Variables

Never commit the following to the repository:

* API keys or tokens
* Database credentials
* Private keys
* Passwords
* Sensitive configuration

Use `.env` files (added to `.gitignore`) for local development.

### Code Security Best Practices

* Validate all user inputs
* Use parameterized queries to prevent SQL injection
* Sanitize output to prevent XSS attacks
* Implement CSRF protection
* Use security headers (Content-Security-Policy, X-Frame-Options, etc.)
* Keep dependencies up to date
* Use static code analysis tools
* Perform regular security audits

### Python Security

* Use `bandit` for static security analysis
  ```bash
  pip install bandit
  bandit -r src/
  ```
* Validate all inputs from external sources
* Use `vaderSentiment` from official sources only
* Keep PRAW updated for security patches

### Node.js Security

* Use `npm audit` regularly
  ```bash
  npm audit
  npm audit fix
  ```
* Use `snyk` for vulnerability scanning
  ```bash
  npm install -g snyk
  snyk test
  ```
* Implement helmet.js for security headers
* Validate all incoming requests

### Monitoring & Logging

* Enable Prometheus metrics for monitoring
* Log security-relevant events
* Monitor for suspicious activity
* Set up alerts for security events
* Regularly review logs for anomalies

## Security Checklist for Deployment

Before deploying to production, ensure:

- [ ] All dependencies are up to date
- [ ] No hardcoded credentials in code
- [ ] Environment variables are properly configured
- [ ] HTTPS is enabled
- [ ] CORS is properly configured
- [ ] Rate limiting is implemented
- [ ] Input validation is in place
- [ ] Security headers are configured
- [ ] Docker image is scanned for vulnerabilities
- [ ] Kubernetes security policies are in place
- [ ] Monitoring and logging are enabled
- [ ] Backup and disaster recovery plans are in place
- [ ] Security audit has been performed

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |
| < 1.0   | :x:                |

## Security Updates

Security updates will be released as soon as possible after a vulnerability is confirmed. We recommend:

* Subscribing to security advisories
* Regularly updating dependencies
* Monitoring the GitHub repository for security releases
* Testing updates in a staging environment before production deployment

## Third-Party Security

### Reddit API

* Use official PRAW library only
* Keep PRAW updated
* Review Reddit's API security guidelines
* Respect Reddit's terms of service

### Dependencies

* Review security advisories for all dependencies
* Use `npm audit` and `pip audit` regularly
* Keep lock files updated
* Monitor for deprecated packages

## Responsible Disclosure

We appreciate responsible disclosure of security vulnerabilities. Please:

1. **Do not** publicly disclose the vulnerability until we've had time to fix it
2. **Do not** access or modify data beyond what's necessary to demonstrate the vulnerability
3. **Do not** disrupt service availability
4. **Do** give us reasonable time to fix the issue before public disclosure

## Security Resources

* [OWASP Top 10](https://owasp.org/www-project-top-ten/)
* [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
* [Python Security](https://python.readthedocs.io/en/latest/library/security_warnings.html)
* [Docker Security](https://docs.docker.com/engine/security/)
* [Kubernetes Security](https://kubernetes.io/docs/concepts/security/)

## Questions?

If you have security-related questions, please email **security@moodie.dev** or open a discussion in the repository.

Thank you for helping keep Moodie secure! 🔒

