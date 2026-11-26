import { redirectRules } from "./lib/site-routes.mjs";

const isProd = process.env.NODE_ENV === "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  // Google Tag Manager (loaded in app/layout.tsx) was missing here, so the
  // browser blocked gtm.js and no analytics tag ever ran in production.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  // https: — images on pages created in the ERP can live on any HTTPS host.
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self' blob: data: https:",
  // ERP "video" sections embed YouTube / Vimeo only (ids parsed server-side).
  // GTM: the <noscript> fallback iframe.
  "frame-src 'self' https://www.youtube-nocookie.com https://player.vimeo.com https://www.googletagmanager.com",
  // GTM / GA4 hit endpoints.
  "connect-src 'self' https://crm.clickmasters.pk https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
  isProd ? "upgrade-insecure-requests" : "",
]
  .filter(Boolean)
  .join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // The site uses none of these browser features.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig = {
  // Don't advertise the framework in an X-Powered-By header.
  poweredByHeader: false,
  async redirects() {
    return redirectRules();
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  allowedDevOrigins: [
    "192.168.88.62",
    "192.168.88.39", // 👈 Add your network IP here
    "localhost",
    "127.0.0.1",
    // Add more as needed
    "192.168.88.*", // 👈 Or allow all on this subnet
  ],
  images: {
    // 1080–1920 added for full-width hero photos (next/image) on desktop;
    // phones still pick the 640–828 candidates.
    deviceSizes: [640, 750, 828, 1080, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    formats: ["image/webp"],
    qualities: [60, 75],
  },
};

export default nextConfig;
