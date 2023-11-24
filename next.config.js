/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bravaland.com",
        port: "",
        pathname:
          "https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853",
      },
    ],
  },
};

// module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["bravaland.com"],
  },
};
