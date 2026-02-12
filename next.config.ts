import type { NextConfig } from "next";

// =============================================================================
// Configuração do Next.js - Portal 2909
// =============================================================================

const nextConfig: NextConfig = {
  // Otimização de imagens
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Headers de segurança e cache
  async headers() {
    return [
      {
        // Assets estáticos - cache longo
        source: "/:path*.(ico|png|jpg|jpeg|svg|webp|avif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Páginas - sem cache
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
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Compressão
  compress: true,

  // Logging de build
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
