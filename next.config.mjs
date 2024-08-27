/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: "incremental",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
