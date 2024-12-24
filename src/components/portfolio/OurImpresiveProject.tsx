import Image from "next/image";
import React from "react";
import healthcareImage from "../../../public/assets/portfolioImages/healthcare.png";
import restaurantImage from "../../../public/assets/portfolioImages/restaurant.png";
import realstateImage from "../../../public/assets/portfolioImages/realstate.png";
import ecommerceImage from "../../../public/assets/portfolioImages/eccommerce.png";
import HospitalityImage from "../../../public/assets/portfolioImages/hospitality.png";
import greenEnergyImage from "../../../public/assets/portfolioImages/greenenergy.png";
import Link from "next/link";

const OurImpressiveProject = () => {
  return (
    <div className="my-20 px-4">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Our <span className="text-[#9A00FF]">Impressive</span> Projects
        </h2>
        <p className="text-gray-500 mt-4">
          Explore some of our outstanding projects that demonstrate innovation
          and excellence.
        </p>
      </div>

      {/* Project Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-4 lg:gap-8 max-w-7xl  mx-auto">
        {/* Card Component */}
        {[
          { image: healthcareImage, title: "Healthcare",link: "/healthcare-projects", },
          {
            image: restaurantImage,
            title: "Restaurant",
            link: "/restaurants-projects",
          },
          { image: realstateImage, title: "Real Estate", link: "/real-estate-projects", },
          { image: ecommerceImage, title: "E-commerce", link: "/e-commerce-projects", },
          {
            image: HospitalityImage,
            title: "Hospitality",
            link: "/hospitality-projects",
          },
          { image: greenEnergyImage, title: "Green Energy", link: "/green-energy-projects", },
        ].map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg w-full sm:w-[480px] md:w-[420px] lg:w-[380px]"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={`${project.title} Project`}
              width={400}
              height={400}
              className="transition-transform duration-300 w-full ease-in-out group-hover:scale-110"
            />
            {/* Title with Background */}
            {project.link ? (
              <Link href={project.link}>
                <h2 className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg md:text-2xl bg-[#726767]/70 hover:bg-[#9A00FF]/90 transition-all duration-300 cursor-pointer px-6 py-6">
                  {project.title}
                </h2>
              </Link>
            ) : (
              <h2 className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg md:text-2xl bg-[#726767]/70 hover:bg-[#9A00FF]/90 transition-all duration-300 cursor-pointer px-6 py-6">
                {project.title}
              </h2>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurImpressiveProject;
