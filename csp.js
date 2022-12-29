// For information on Content Security Policy see https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
// By default, Google, YouTube, Vimeo, Instagram, and Stripe APIs are allowed

const policies = {
  "default-src": ["'self'"],
  "media-src": [
    "'self'",
    "http://localhost:8000",
    // add any domains that this site will serve media from, such as a CMS or CDN
    // example: "https://your-cms.com",
  ],
  "img-src": [
    "'self'",
    "data:",
    // add any domains that this site will serve media from, such as a CMS or CDN
    // example: "https://your-cms.com"
    "http://localhost:8000",
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
  ],
  "font-src": [
    "'self'",
  ],
  "frame-src": [
    "'self'",
  ],
  "script-src": [
    "'self'",
    "'unsafe-eval'",
    "'unsafe-inline'",
  ],
  "connect-src": [
    "'self'",
    "ws://localhost:3000",
    "http://localhost:8000",
    // add any domains that this site will connect to, such as a CMS
    // example: "https://your-cms.com
  ],
  "object-src": [
    "'self'",
    "data:"
  ],
};

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(" ")}`;
    }
    return "";
  })
  .join("; ");
