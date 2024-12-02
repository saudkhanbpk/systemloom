import ServiceCard from "../constant/ServiceCard";
import Image from "next/image";
import backgroundImage from "../../../public/assets/aboutImages/servicesBgImage.jpeg";
import Head from "next/head";

const ServicesSec = () => {
  return (
    <div>
      <Head>
        <title>From Software and App Development to Digital Marketing and SEO all at TechCreator</title>
        <meta
          name="description"
          content="TechCreator offers expert services in software development, app creation, digital marketing, and SEO to boost your business success. We provide all-in-one solutions for your business."
        />
      </Head>
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={backgroundImage}
            alt="Background"
            className="w-full h-auto opacity-15"
          />
        </div>
        <div className="relative max-w-[1440px] mx-auto h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center justify-center">
          <div className="text-center mt-10">
            <h1 className="font-semibold text-[40px] md:text-[57px] leading-[50px] md:leading-[65px] mb-6">
              Our Services
            </h1>
            <p className="font-normal text-[16px] md:text-[18px] mx-auto leading-6 md:leading-9">
            At TechCreator we’ll help transform your day-to-day processes with our customized Service solutions. Whether it’s revamping your Web or Mobile App or creating a new product, we’ve got your back! Our teams are integrated because your marketing strategies are interconnected. Whether it's Web documents, workflow software Testing, or Designing Web, our teams enjoy a unique experience.
            </p>
          </div>
        </div>
      </div>
      <ServiceCard />
    </div>
  );
};

export default ServicesSec;
