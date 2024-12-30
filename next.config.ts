/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'], 
  },
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'], 
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/sitemap_index.xml',
//         destination: '/api/sitemap_index', 
//       },
//       {
//         source: '/sitemap.xml',
//         destination: '/api/sitemap', 
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
