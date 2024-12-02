import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Array of service data
const services = [
  {
    title: "Web Development",
    description:
      "TechCreator provides web development services that are all about helping your business stand out in the digital world. We create scalable websites and apps with user-friendly designs, top-notch security, and smooth performance. Whether you’re starting fresh or improving an existing platform, we’ve got you covered with custom solutions, continuous support, and innovative features. From eCommerce to CMS and everything in between, we’re here to bring your vision to life and give you the opportunity to stand out in front of your competitors!",
    image: "/assets/ServiceDetailsImages/webimg.png",
    link: "/services/web-development",
    bgColor: "bg-[#91B9A4AB]",
  },
  {
    title: "App Development",
    description:
      "Mobile apps that work seamlessly across all devices are what we specialize in. Design, coding, integration, and management are all part of our expert mobile app development services. It doesn't matter if you're a startup or a large enterprise, we build feature-rich, visually stunning apps. Our expertise transforms ideas into fully functional apps that boost brand identity, drive results, and help your business thrive online.",
    image: "/assets/ServiceDetailsImages/appimg.png",
    link: "/services/mobile-app-development",
    bgColor: "bg-[#E5DFACAB]",
  },
  {
    title: "UI/UX Designing",
    description:
      "Creating colors that brands need.  In addition to implementing proven systems, our designers undergo meticulous reviews and learn from impactful practices and toolsets.Using modern tools and technologies, our design team turns rudimentary event apps into interactive experiences and builds enterprise software for Fortune 500 companies.A continuous mentoring process ensures our design team is skillful, organized, and able to deliver excellence.",
    image: "/assets/ServiceDetailsImages/uximg.png",
    link: "/services/ui-ux-designing",
    bgColor: "bg-[#E5C2ACAB]",
  },
  {
    title: "DevOps",
    description:
      "Build better software faster. Ensure your organization cultivates an effective culture. Make your customers and employees happy by embracing continuous delivery principles.Accelerate your cloud operations and workloads by minimizing costs, increasing efficiency, and speeding up release management with our DevOps Services. Faster time to market, better throughput, and more resilient systems. Our DevOps Services help drive a culture of “Everything as Code”, creating harmony in cloud operations.",
    image: "/assets/ServiceDetailsImages/QA.png",
    link: "/services/devops",
    bgColor: "bg-[#A1D9D3]",
  },
  {
    title: "Graphic Designing",
    description:
      "Scale your creative content quickly with flat-rate, on-demand graphic design services. Our designers are experienced, vetted, and dedicated to making your life easier. TechCreator’ creatives hail from around the world and bring a comprehensive skill set, ensuring you are matched with the right creatives – quality control included. Our graphic design services cover a wide range of products – brochures, business cards, publications, mailers, posters and billboards – we've designed it all.",
    image: "/assets/ServiceDetailsImages/Designer_working_with_pen_display_Illustration-removebg-preview 1.png",
    link: "/services/graphic-designing",
    bgColor: "bg-[#D4A5A5]",
  },
  {
    title: "Project Management",
    description:
      "TechCreator’s project management services ensure that your projects are executed with precision and efficiency. Our experienced project managers utilize proven methodologies, such as Agile and Waterfall, to plan, execute, and deliver projects on time and within budget. From scope definition and resource allocation to risk management and performance tracking, we focus on achieving successful outcomes while fostering collaboration and transparency. Trust us to bring your projects to fruition seamlessly.",
    image: "/assets/ServiceDetailsImages/management.png",
    link: "/services/project-management",
    bgColor: "bg-[#F5D6A1]",
  },
  {
    title: "SEO & Content Writing",
    description:
      "We help your business or personal brand rank on Google with SEO Services. A successful business cannot ignore the importance of Micro Moments. There are times when people turn to their devices to learn, discover, watch, do, or buy something. Intent-Rich Moments lead to awareness and decision-making.TechCreator SEO Services connects you with experts who research, write, and optimize your website to improve your business's ranking in SERPs.",
    image: "/assets/ServiceDetailsImages/seo1.png",
    link: "/services/seo-content-writing",
    bgColor: "bg-[#B3D9C9]",
  },
  {
    title: "Software Maintenance",
    description:
      "Software Maintenance Service ensures the business value of your original license investment by ensuring you can access the latest software releases, technical support, and add-on products.Maintain your enterprise apps according to your business requirements and effectively resolve issues and bugs; bridge gaps in your IT ecosystem and facilitate massive yet sustainable growthTechCreator offers simplified software maintenance services. Establish a plan for consistent growth, impact customers, and avoid roadblocks.",
    image: "/assets/ServiceDetailsImages/soft.png",
    link: "/services/software-maintenance",
    bgColor: "bg-[#C1B2E3]",
  },
  {
    title: "QA Testing",
    description:
      "At TechCreator Experienced quality assurance specialists deliver secure, high-quality, future-proof solutions that boost your company's confidence.We have ensured the smooth operation of thousands of software solutions over the years with the help of our quality assurance testers.Over the years, we have tested dozens of mobile applications, complex enterprise software for Fortune 500 companies, IoT ecosystems, a blockchain marketplace, and more. In this way, your company gets fail-safe software.",
    image: "/assets/ServiceDetailsImages/qaTesting.png",
    link: "/services/qa-testing",
    bgColor: "bg-[#FFB8B8]",
  },
];


const ServiceCard = () => {
  return (
    <div className="max-w-7xl flex flex-col gap-2 mx-auto my-16">
      {services.map((service, index) => (
        <Link href={service.link} key={index}>
          <div
            className={`flex justify-between md:flex-row flex-col items-center ${service.bgColor} px-4 cursor-pointer  rounded-md`}
          >
            <div className='p-2'>
              <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-700  md:w-[50vw]">
                {service.description}
              </p>
            </div>
            <div>
              <Image
                src={service.image}
                alt={`${service.title}_Image`}
                width={300}
                height={300}
                className="md:w-[32vw] md:h-[320px]  object-contain"
              />
            </div>
          </div>
         </Link>
      ))}
    </div>
  );
};

export default ServiceCard;
