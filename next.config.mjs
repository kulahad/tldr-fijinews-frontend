/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.fijivillage.com",
        port: "",
        pathname: "/news_images/**",
      },
    ],
  },
};

export default nextConfig;
