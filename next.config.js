/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@react-three/postprocessing"],
  // images: {
  //   domains: ["cdn.sanity.io"],
  //   loader: "custom",
  // },
};

module.exports = nextConfig;
