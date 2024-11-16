/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'], // Add Cloudinary domain here
  },
};

module.exports = nextConfig;
