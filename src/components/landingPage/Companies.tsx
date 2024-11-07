import React from "react";
import Image from "next/image"; 
import CommonButton from "../common/Button"; 
import company1 from "../../../public/assets/companies/image 182.png";
import company2 from "../../../public/assets/companies/image 152.png";
import company3 from "../../../public/assets/companies/image 150.png";
import company4 from "../../../public/assets/companies/image 181.png";
import company5 from "../../../public/assets/companies/image 149.png";
import company6 from "../../../public/assets/companies/Group 40.png";
import company7 from "../../../public/assets/companies/Rectangle 21848.png";

const Companies = () => {
  return (
    <React.Fragment>
      <div className="bg-[#FFFFFF] h-auto py-5 px-4 md:px-10 md:mb-0 border mb-8">
        <div className="flex flex-wrap justify-between items-center gap-7 md:gap-0 mx-auto">
          <div className="flex justify-center items-center mb-2 mx-auto sm:mx-0">
            <Image src={company1} alt="Company 1" width={140} height={45} />
          </div>
          <div className="flex justify-center items-center mb-2 mx-auto sm:mx-0">
            <Image src={company2} alt="Company 2" width={140} height={45} />
          </div>
          <div className="flex justify-center items-center mb-2 mx-auto sm:mx-0">
            <Image src={company3} alt="Company 3" width={140} height={45} />
          </div>
          <div className="flex justify-center items-center mb-2 mx-auto sm:mx-0">
            <Image src={company4} alt="Company 4" width={140} height={45} />
          </div>
          <div className="flex justify-center items-center mb-2 mx-auto sm:mx-0">
            <Image src={company5} alt="Company 5" width={140} height={45} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Companies;

export const CTASection = () => {
  return (
    <section className="py-16 ">
      <div className="bg-[#FFFFFF] mx-auto w-[95%] h-auto lg:h-[300px]">
        <div className="flex flex-col  md:flex-row justify-around">
          <div className="md:w-1/2 mb-8 md:mb-0 px-6 py-16 leading-10">
            <h2 className="text-2xl font-inter md:text-2xl font-semibold mb-4 leading-10 text-center md:text-left">
              "Looking for top developers and designers? Let's build something great together. Get in touch today!"
            </h2>
            <div className="flex justify-center md:justify-start">
              <div className="relative md:left-8">
                <div>
                  <Image src={company6} alt="button_image" width={123.83} height={191} />
                </div>
                <div className="absolute top-16 -right-[52px]">
                  <CommonButton
                    title="Hire Top Developers"
                    className="bg-[#9A00FF] text-white font-semibold py-3 px-6 rounded-[5px] w-[220px]"
                    handleClick={() => console.log("")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <Image
              src={company7}
              alt="Team working together"
              width={500} 
              height={380}
              className="w-full rounded-lg shadow-lg h-[380px] lg:h-[330px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
