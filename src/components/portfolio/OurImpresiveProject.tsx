import Image from "next/image";
import React from "react";
import healthcareImage from "../../../public/assets/portfoliopage/healthcare.webp";
import restaurantImage from "../../../public/assets/portfoliopage/restaurant.webp";
import realstateImage from "../../../public/assets/portfoliopage/realstate.webp";
import ecommerceImage from "../../../public/assets/portfoliopage/eccommerce.webp";
import HospitalityImage from "../../../public/assets/portfoliopage/hospitality.webp";
import greenEnergyImage from "../../../public/assets/portfoliopage/greenenergy.webp";
import Link from "next/link";

const OurImpressiveProject = () => {
  return (
    <div className="">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mt-16 font-bold">
          Our <span className="text-[#9A00FF]">Impressive</span> Projects
        </h2>
        <p className="text-gray-500 mt-4 text-base">
          Explore some of our outstanding projects that demonstrate innovation
          and excellence.
        </p>
      </div>

      {/* Project Section */}
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8 ">
        {/* Card Component */}
        {[
          { image: healthcareImage, title: "Healthcare", link: "/healthcare" },
          { image: restaurantImage, title: "Restaurant", link: "/restaurants" },
          { image: realstateImage, title: "Real Estate", link: "/real-estate" },
          { image: ecommerceImage, title: "E-commerce", link: "/e-commerce" },
          { image: HospitalityImage, title: "Hospitality", link: "/hospitality" },
          { image: greenEnergyImage, title: "Green Energy", link: "/green-energy" },
        ].map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg  "
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
            <Link href={project.link}>
              <h2 className="absolute bottom-0 left-0 right-0 text-center text-white font-semibold text-lg md:text-2xl bg-[#726767]/70 hover:bg-[#9A00FF]/90 transition-all duration-300 cursor-pointer px-6 py-6">
                {project.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurImpressiveProject;
