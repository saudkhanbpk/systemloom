import Image, { StaticImageData } from "next/image";
import productDesignImage from "../../../public/assets/relatedServices/Frame 7.png";
import appDesignImage from "../../../public/assets/relatedServices/Frame 7 (1).png";
import webDesignImage from "../../../public/assets/relatedServices/Frame 7 (2).png";
import developmentDesignImage from "../../../public/assets/relatedServices/Frame 7 (3).png";
import illustrationDesignImage from "../../../public/assets/relatedServices/Frame 7 (4).png";
import motionDesignImage from "../../../public/assets/relatedServices/Frame 7 (5).png";

type Service = {
  title: string;
  description: string;
  icon: StaticImageData; // Updated type for icon
};

const RelatedServices: React.FC = () => {
  const services: Service[] = [
    {
      title: "Product Design",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: productDesignImage,
    },
    {
      title: "App Design",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: appDesignImage,
    },
    {
      title: "Web Design",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: webDesignImage,
    },
    {
      title: "Development",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: developmentDesignImage,
    },
    {
      title: "Illustration",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: illustrationDesignImage,
    },
    {
      title: "Motion",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      icon: motionDesignImage,
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
      <h2 className="text-2xl font-semibold text-center mb-12 sm:mb-16 md:mb-20 ">
        Related Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-6 bg-white w-full max-w-[350px] h-[240px] rounded-tr-[48px] border-[2px] border-[#6D6D6D] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute -top-10 left-6 p-3 rounded-lg">
              <Image
                src={service.icon}
                alt={service.title}
                width={70}
                height={70}
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]"
              />
            </div>
            <div className="mt-8 sm:mt-12">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
