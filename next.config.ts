import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // Define el protocolo utilizado
        hostname: "clubmio.ddns.net", // Permite cargar imágenes desde este hostname
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
