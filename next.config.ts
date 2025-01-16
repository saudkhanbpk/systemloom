// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'], 
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'], 
  },

  // Define headers for caching
  async headers() {
    return [
      // Cache static media files
      {
        source: '/_next/static/media/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', 
          },
        ],
      },
      // Cache static Next.js assets
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', 
          },
        ],
      },
      // Cache fonts
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', 
          },
        ],
      },
    ];
  }
  
};

module.exports = nextConfig;