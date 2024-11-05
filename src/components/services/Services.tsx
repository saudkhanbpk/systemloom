import Link from 'next/link';
import ServiceCard from '../constant/ServiceCard';
import Image from 'next/image';
import backgroundImage from "../../../public/assets/aboutImages/servicesBgImage.jpeg"

interface Service {
  id: number;
  title: string;
  des: string;
  image: string;
  link?: string; // Make link optional since some services may not have it
}

const ServicesSec = () => {
  const servicesArr: Service[] = [
    {
      id: 1,
      title: "Web Design & Development",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image: "/assets/landingPage/Code_perspective_matte.png",
      link: "/services/web-development"
    },
    {
      id: 2,
      title: "Mobile App Development",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image: "/assets/landingPage/Code_perspective_matte.png",
      link: "/services/mobile-app-development"
    },
    {
      id: 3,
      title: "Devops",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image: "/assets/landingPage/Code_perspective_matte.png",
       link: "/services/devops"
    },
    {
      id: 4,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image: "/assets/landingPage/Code_perspective_matte.png",
       link: "/services/web-development"
    },
    {
      id: 5,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image: "/assets/landingPage/Code_perspective_matte.png",
       link: "/services/web-development"
    },
    {
      id: 6,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image: "/assets/landingPage/Code_perspective_matte.png",
       link: "/services/web-development"
    },
    {
      id: 7,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image: "/assets/landingPage/Code_perspective_matte.png",
       link: "/services/web-development"
    },
    {
      id: 8,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image: "/assets/landingPage/Code_perspective_matte.png",
       link: "/services/web-development"
    },
    {
      id: 9,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image: "/assets/landingPage/Code_perspective_matte.png",
       link: "/services/web-development"
    },
  ];

  return (
    <div>
      <div>
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={backgroundImage}
              alt="Background"
              className="w-full h-auto opacity-15"
            />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mt-10">
              <h1 className="font-semibold text-[40px] md:text-[57px] leading-[50px] md:leading-[65px] mb-6">
                Our Services
              </h1>
              <p className="font-normal text-[16px] md:text-[18px] max-w-3xl mx-auto leading-6 md:leading-9">
                TechCreator offers top-notch web and mobile app development services to help businesses bring their ideas to life. Our experienced team of developers creates custom apps that are tailored to meet our clients' specific needs. We use the latest technologies and industry best practices to ensure that our apps are scalable, secure, and easy to use. Whether you need a simple mobile app or a complex web application, TechCreator has the expertise to deliver high-quality solutions that exceed your expectations. Contact us today to learn more about our web and mobile app development services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 mt-10 mx-auto flex flex-wrap justify-center  md:gap-24 gap-4 w-full px-4 sm:px-6 md:px-10 py-10">
        {
          servicesArr.map((item) => (
            <Link href={item.link || "#"} key={item.id}>
              <ServiceCard
                description={item.des}
                title={item.title}
                icon={item.image}
                style={true}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default ServicesSec;
