import CommonButton from "../common/Button";
import HeroSection_BG from "../../../public/assets/contactImages/Frame 5061.png";
import { MapPin } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Mail } from "lucide-react";
import Image from "next/image";

function ContactUs() {
  return (
    <>
      <div className="relative bg-gray-900 text-white h-[700px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={HeroSection_BG}
            alt="Background"
            className="w-full opacity-25"
          />
        </div>
        <div className="relative max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <form className="flex justify-around">
            <div>
              <h1 className="font-inter font-semibold text-[32px] text-[#FFFFFF] leading-6">
                Let's talk with us
              </h1>
              <p className="w-[360px] font-inter font-light text-[20px] mt-2">
                Questions, comments, or suggestions? Simply fill in the form and
                we’ll be in touch shortly.
              </p>
              <div className="mt-10">
                <p className="flex gap-2">
                  <MapPin color="#A445B8" />
                  1055 Arthur ave Elk Groot, 67. <br />
                  New Palmas South Carolina.
                </p>
              </div>
              <div className="mt-2">
                <p className="flex gap-2">
                  <PhoneCall color="#A445B8" />
                  +1 234 678 9108 99
                </p>
              </div>
              <div className="mt-2">
                <p className="flex gap-2">
                  <Mail color="#A445B8" />
                  Contact@moralizer.com
                </p>
              </div>
            </div>

            <div className="w-[565px] h-[535px] rounded-[10px] border-[1px] border-[#BDBDBD] shadow-[#0000001A] p-[50px] bg-[#FFFFFF]">
              <div className="flex justify-between items-center gap-5">
                <div>
                  <input
                    placeholder="First name*"
                    type="text"
                    className="
                   rounded-[10px] border-[1px] border-[#828282] bg-[#F9F9F9] p-2 text-[black] focus:border-[#9A00FF]  focus:outline-none transition duration-200"
                  />
                </div>
                <div>
                  <input
                    placeholder="Last name*"
                    type="text"
                    className="
                   rounded-[10px] border-[1px] border-[#828282] bg-[#F9F9F9] p-2 text-[black] focus:border-[#9A00FF]  focus:outline-none transition duration-200"
                  />
                </div>
              </div>
              <div className="mt-4">
                <input
                  placeholder="Email*"
                  type="text"
                  className="w-full
                   rounded-[10px] border-[1px] border-[#828282] bg-[#F9F9F9] p-2 text-[black] focus:border-[#9A00FF]  focus:outline-none transition duration-200"
                />
              </div>
              <div className="mt-4">
                <input
                  placeholder="Phone Number*"
                  type="text"
                  className="w-full
                   rounded-[10px] border-[1px] border-[#828282] bg-[#F9F9F9] p-2 text-[black] focus:border-[#9A00FF]  focus:outline-none transition duration-200"
                />
              </div>
              <div className="mt-4">
                <textarea
                  placeholder="Your Message..."
                  cols={6}
                  rows={6}
                  className="w-full
                   rounded-[10px] border-[1px] border-[#828282] bg-[#F9F9F9] p-2 text-[black]"
                />
              </div>
              <div className="mt-10">
                <CommonButton
                  handleClick={() => console.log("message sent")}
                  title="Send Message"
                  className="bg-[#9A00FF] w-full h-[40px] rounded-[24px] border-[1px] border-[#9A00FF] focus:border-[#9A00FF]  focus:outline-none transition duration-200"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
