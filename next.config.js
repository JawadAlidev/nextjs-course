/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   MONGO_URI:
  //     "mongodb+srv://jawadalsultani94:pV0nbJUjLl40MlGU@cluster0.gdjcg1d.mongodb.net/products-app?retryWrites=true&w=majority",
  //   // APP_DEV: "http://localhost:3000",
  //   // APP_PROD: "",
  // },
  images: {
    domains: ["images.pexels.com"]
  }
};

module.exports = nextConfig
