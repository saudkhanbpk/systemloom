import Link from 'next/link';

function HeroSection() {
  return (
    <div className="relative bg-gray-900 text-white md:pt-5 pt-16 ">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-25"
        >
          <source src="/assets/landingPage/backgroundVideo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto md:px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="text-center">
          <h1 className="font-semibold text-3xl md:text-[57px] leading-tight md:leading-[65px] mb-6 md:mb-8">
            Develop your <span className="text-[#7A4AFF]">Business</span>
            <br className="hidden md:inline" />
            <span> to Accelerate Growth</span>
          </h1>
          <p className="font-normal text-base md:text-xl max-w-lg md:max-w-3xl mx-auto mb-6 md:mb-10 leading-7 md:leading-9 text-gray-300">
            We're inspired by new technology and have dedicated our careers to exploring and harnessing it. We are in the business of solving problems. Entrepreneurs empower us to turn ideas into lightning-fast solutions that revolutionize industries.
          </p>
          <Link href="/contact">
            <button
              style={{ background: "rgba(255, 255, 255, 0.24)" }}
              className="text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Automate your Business &nbsp;&nbsp;→
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;