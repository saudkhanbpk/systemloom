import CommonButton from "../common/Button";
import HeroSection_BG from "../../../public/assets/contactImages/Frame 5061.png";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import Image from "next/image";

function ContactUs() {
  return (
    <div className="relative text-white">
      <div className="absolute inset-0 overflow-hidden bg-gray-900">
        <Image
          src={HeroSection_BG}
          alt="Background"
          className="w-full h-full object-cover  opacity-25"
        />
      </div>
      <div className="relative max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <form className="flex flex-wrap justify-around items-start gap-10 mt-20">
          <div className="max-w-lg">
            <h1 className="font-inter font-semibold text-3xl sm:text-4xl text-white leading-snug">
              Let's talk with us
            </h1>
            <p className="mt-4 font-inter font-light text-lg text-white">
              Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
            </p>
            <div className="mt-8">
              <p className="flex gap-2 items-start">
                <MapPin color="#A445B8" />
                <span>1055 Arthur Ave, Elk Groot, New Palmas South Carolina.</span>
              </p>
            </div>
            <div className="mt-4">
              <p className="flex gap-2 items-center">
                <PhoneCall color="#A445B8" />
                <span>+1 234 678 9108 99</span>
              </p>
            </div>
            <div className="mt-4">
              <p className="flex gap-2 items-center">
                <Mail color="#A445B8" />
                <span>Contact@moralizer.com</span>
              </p>
            </div>
          </div>

          <div className="w-full sm:w-[565px] bg-white rounded-lg shadow-lg p-6 sm:p-10 mt-10 sm:mt-0">
            <div className="flex flex-col sm:flex-row sm:gap-5 mb-4">
              <input
                placeholder="First name*"
                type="text"
                className="w-full sm:w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-3 text-black focus:border-purple-700 focus:outline-none mb-4 sm:mb-0"
              />
              <input
                placeholder="Last name*"
                type="text"
                className="w-full sm:w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-3 text-black focus:border-purple-700 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Email*"
                type="email"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-black focus:border-purple-700 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Phone Number*"
                type="tel"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-black focus:border-purple-700 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message..."
                rows={4}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-black focus:border-purple-700 focus:outline-none"
              />
            </div>
            <div>
              <CommonButton
                handleClick={() => console.log("message sent")}
                title="Send Message"
                className="bg-purple-700 text-white w-full h-12 rounded-full transition duration-200 hover:bg-purple-800 focus:outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
