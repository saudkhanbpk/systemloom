import Image from "next/image";
import team1 from "../../../public/assets/homepage/Rectangle 17.webp";
import team2 from "../../../public/assets/homepage/Rectangle 18.webp";
import teemImage3 from "../../../public/assets/homepage/teamimage3.webp";
import projectManagerImage from "../../../public/assets/aboutpage/hamdan.webp";
import CeoImage from "../../../public/assets/aboutpage/ceoimage2.webp";
import AdminOfficerImage from "../../../public/assets/aboutpage/hamdad.webp";
import Link from "next/link";

const TeamScalingSection = () => {
  return (
    <section className="md:py-16 py-2   ">
      <div className=" ">
        {/* section 1 */}
        <div className="flex flex-col items-center gap-6 lg:flex-row mb-10">
          <div className=" mb-8 leading-[44px] mt-5 lg:mb-0">
            <h2 className="text-[28px] font-semibold text-[#9A00FF] mb-4">
              Empowering Your Business with Innovation
            </h2>
            <p className=" mb-4 font-normal text-lg">
              Feeling short of the right expertise to <Link href="/e-commerce" className="cursor-pointer text-blue-600">build your product</Link> ?
            </p>
            <p className=" mb-4 font-normal text-lg">
              We can either take over your entire <Link href="/services/project-management" className="cursor-pointer text-blue-600">development project</Link> or augment
              your team to assist you at any stage of your product development
              cycle.
            </p>

            <div className="border-l-4 border-[#9A00FF] pl-4 mb-6">
              <p className="text-[#9A00FF] italic font-light text-base mb-2">
                "Our team of experts integrates seamlessly with yours, ensuring
                smooth collaboration and timely delivery."
              </p>
            </div>

            <div className="flex items-center">
              <Image
                src={CeoImage}
                alt="ceo-image"
                width={70}
                height={70}
                quality={100}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />

              <div>
                <p className="font-normal text-base">Saud Khan</p>
                <p className="text-sm font-normal text-[#2D3748]">CEO</p>
              </div>
            </div>
          </div>

          <div className=" mx-auto md:mx-0">
            <Image
              src={team1}
              alt="Organizing TecCreator team to offer development services"
              width={300}
              height={100}
              className="  xl:h-[350px] h-[260px] w-[800px] x:w-[800px]  rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

{/* section 2 */}
        <div className="flex flex-col items-center gap-6 lg:flex-row mb-10">
        <div className="  md:mx-0">
            <Image
              src={team2}
              alt="Organizing TecCreator team to offer development services"
              width={300}
              height={100}
              className="xl:h-[350px] h-[260px] w-[800px] xl:w-[1000px] rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className=" mb-8 leading-[44px] mt-5 lg:mb-0">
            <h2 className="text-[28px] font-semibold text-[#9A00FF] mb-4">
              Bringing you the best of the Tech & Digital Eras
            </h2>

            <p className=" mb-4 font-normal text-lg">
              To make your business skyrocket, you must have both the <Link href="/services/web-qa-tester" className="cursor-pointer text-blue-600">quality product</Link> to demonstrate and the optimization to grow. Our company
              aims to help the community in both of them.
            </p>

            <div className="border-l-4 border-[#9A00FF] pl-4 mb-6">
              <p className="text-[#9A00FF] italic font-light text-base mb-2">
                " As we build customized solutions to a person's unique needs."
              </p>
            </div>

            <div className="flex items-center">
              <Image
                src={projectManagerImage}
                alt="ProjectManager-image"
                width={70}
                height={70}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-normal text-base">Hamdan Khan</p>
                <p className="text-sm font-normal text-[#2D3748]">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
        </div>

{/* section 3 */}
        <div className="flex flex-col items-center gap-6 lg:flex-row  ">
          <div className="  leading-[44px]  lg:mb-0 ">
            <h2 className="text-[28px] font-semibold text-[#9A00FF] mb-4">
              What makes us Apart from Others
            </h2>
            <p className="mb-4 font-normal text-lg  ">
              We don’t just deliver services; we work closely with our clients
              to understand their vision and align our strategies to achieve
              their goals. By staying ahead of market trends, we are able to
              provide our clients with cutting-edge software and <Link href="/services/digital-marketing-for-software-companies" className="cursor-pointer text-blue-600">digital marketing</Link> solutions.
            </p>

            <div className="border-l-4 border-[#9A00FF] pl-4 mb-6">
              <p className="text-[#9A00FF] italic font-light text-base mb-2">
                "With us, you don’t just get a service provider—you get a
                partner dedicated to your growth."
              </p>
            </div>

            <div className="flex items-center">
              <Image
                src={AdminOfficerImage}
                alt="AdminOfficer-image"
                width={70}
                height={70}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-normal text-base">Aamad Khan</p>
                <p className="text-sm font-normal text-[#2D3748]">
                  Admin Officer
                </p>
              </div>
            </div>
          </div>
          <div className="w-full  lg:max-w-[600px] mx-auto md:mx-0">
            <Image
              src={teemImage3}
              alt="Organizing TecCreator team to offer development services"
              width={300}
              height={100}
              className="xl:h-[350px] h-[260px] w-[800px] x:w-[800px]  rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamScalingSection;
