/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bit.ly",
        // for security reasons, should aim to be as specific as possible here
      },
    ],
    // this is where we add 1 or more domains where we're allowed to serve images...
    // this is for security reasons otherwise anyone could take advantage of the endpoint that...
    // next.js exposes for seerving optimized images
  },
};

module.exports = nextConfig;
