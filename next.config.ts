/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'],
  },

  async redirects() {
    return [
      {
        source: "/services/app-development",
        destination: "/services/mobile-app-development-company",
        permanent: true, 
      },
      {
        source: "/e-commerce-projects",
        destination: "/e-commerce",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/qa-testing",
        destination: "/services/web-qa-tester",
        permanent: true,
      },
      {
        source: "/services/graphic-designing",
        destination: "/services/affordable-graphic-design-services",
        permanent: true,
      },
      {
        source: "/services/software-maintenance",
        destination: "/services/software-maintenance-services",
        permanent: true,
      },
      {
        source: "/services/ui-ux-designing",
        destination: "/services/ui-ux-design-agency",
        permanent: true,
      },
      {
        source: "/services/seo-content-writing",
        destination: "/services/seo-services-for-small-business",
        permanent: true,
      },
      {
        source: "/services/sqa",
        destination: "/services/web-qa-tester",
        permanent: true,
      },
      {
        source: "/services/ui-ux-design",
        destination: "/services/ui-ux-design-agency",
        permanent: true,
      },
      {
        source: "/blog/blogDetail/best-practices-for-seo-in-2024:-boost-your-rankings-like-a-pro",
        destination: "/",
        permanent: true, 
      },
      {
        source: "/blog/blogDetail/mastering-remote-collaboration-with-async-video-tools",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/blogDetail/exploring-the-impact-of-asynchronous-communication-on-productivity",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['s3-alpha-sig.figma.com', 'res.cloudinary.com'], 
//   },

//   // Define headers for caching
//   async headers() {
//     return [
//       // Cache static media files
//       {
//         source: '/_next/static/media/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000', 
//           },
//         ],
//       },
//       // Cache static Next.js assets
//       {
//         source: '/_next/static/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000', 
//           },
//         ],
//       },
//       // Cache fonts
//       {
//         source: '/fonts/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000', 
//           },
//         ],
//       },
//     ];
//   }
  
// };

// module.exports = nextConfig;