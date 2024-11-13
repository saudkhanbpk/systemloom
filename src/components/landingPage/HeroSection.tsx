import Image from 'next/image';
import backgroundImage from "../../../public/assets/landingPage/backgroundImage.png";
import Link from 'next/link';

function HeroSection() {
  const imageUrl = backgroundImage;

  return (
    <div className="relative bg-gray-900 text-white pt-5">
     <div className="absolute inset-0 overflow-hidden">
  {imageUrl ? (
    <Image
      src={imageUrl}
      alt="Background-image"
      fill
      priority 
      className="object-cover opacity-50"
      style={{ objectFit: 'cover' }}
    />
  ) : null}
</div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="text-center">
          <h1 className="font-semibold text-3xl md:text-[57px] leading-tight md:leading-[65px] mb-4 md:mb-6">
            Revolutionizing <span className="text-purple-500">Business</span> Through
            <br className="hidden md:inline" />
            <span className="text-purple-500">Automation</span> and Scalable <span className="text-purple-500">Development</span>
          </h1>
          <p className="font-normal text-base md:text-lg max-w-lg md:max-w-3xl mx-auto mb-6 md:mb-8 leading-7 md:leading-9">
            TechCreator, a U.S.-based organization, doesn't just automate business processes—
            we understand your unique needs and anticipate future challenges. Our vision is to
            empower your growth journey with cutting-edge automation and custom software
            development solutions, driving innovation and success at every stage.
          </p>
         <Link href="/contact">
           <button
              style={{ background: "rgba(255, 255, 255, 0.24)" }}
              className="text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Automate your Business &nbsp;&nbsp; →
           </button>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
