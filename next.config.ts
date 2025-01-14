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
};

export default nextConfig;
