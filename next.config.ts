// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'], 
//   },
// };

// module.exports = nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps catch errors during development
  images: {
    domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'], 
  },
  async headers() {
    return [
      {
        // Apply caching headers for all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  generateBuildId: async () => {
    // Return a unique build ID based on the current timestamp
    return `build-${new Date().getTime()}`;
  },
};

export default nextConfig;
