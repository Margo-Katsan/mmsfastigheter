import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,

  poweredByHeader: false,

  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90, 95, 100],
  },

  async headers() {
    return [
      {
        source: "/:path*",

        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'none'; object-src 'none'; base-uri 'self';",
          },
        ],
      },
    ];
  },
  partialPrefetching: true,

   experimental: {
    serverActions: {
      bodySizeLimit: "8mb",
    },
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
