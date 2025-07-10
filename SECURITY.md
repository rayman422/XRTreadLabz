# Security Policy

## Supported Versions

We actively support the latest version of XRTreadLabz website with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

1. **Email**: Send details to security@xrtreadlabz.com
2. **Include**: 
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

### Response Timeline

- **Acknowledgment**: Within 24 hours
- **Initial Assessment**: Within 48 hours
- **Fix Development**: Within 7 days for critical issues
- **Public Disclosure**: After fix deployment (coordinated disclosure)

### Security Measures

Our website implements the following security measures:

#### Content Security Policy (CSP)
- Strict CSP headers prevent XSS attacks
- Only trusted sources are allowed for scripts and styles

#### HTTP Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy for API access control

#### HTTPS & Transport Security
- Strict-Transport-Security (HSTS) enabled
- All connections encrypted with TLS 1.3+
- HTTP redirects to HTTPS

#### Input Validation
- All form inputs are validated client-side and server-side
- Email validation prevents injection attacks
- CSRF protection on all forms

#### Dependencies
- Regular security audits with `npm audit`
- Automated dependency updates
- Minimal dependency footprint

### Scope

This security policy covers:
- XRTreadLabz website (production)
- API endpoints
- Form processing
- External integrations

Out of scope:
- Third-party services (Google Fonts, Font Awesome)
- Development/testing environments
- Social engineering attacks

### Bug Bounty

We currently don't have a formal bug bounty program, but we appreciate responsible disclosure and will acknowledge contributors in our security advisories.

### Contact

For security-related questions or concerns:
- Email: security@xrtreadlabz.com
- PGP Key: Available on request

---

Thank you for helping keep XRTreadLabz secure!