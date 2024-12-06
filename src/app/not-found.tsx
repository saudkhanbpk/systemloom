import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 px-4">
      {/* 404 Header */}
      <h1 className="text-7xl font-extrabold text-[#9A00FF] mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-center max-w-lg mb-8">
        Sorry, the page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
      </p>

      {/* Go Back Home Button */}
      <Link
        href="/"
        className="px-8 py-3 bg-[#9A00FF] text-white text-lg font-medium rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition-transform transform hover:scale-105"
      >
        Go Back Home
      </Link>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-purple-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
    </div>
  );
};

export default Custom404;
