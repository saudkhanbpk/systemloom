import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Array of service data
const services = [
  {
    title: "Web Development",
    description:
      "TechCreator provides professional web development services tailored to meet the unique needs of your business. Our team specializes in building modern, responsive, and highly functional websites that deliver exceptional user experiences. Whether you're looking for a sleek portfolio, a dynamic e-commerce platform, or a robust enterprise solution, we utilize the latest technologies to ensure scalability, security, and performance. Partner with us to transform your online presence and achieve your digital goals.",
    image: "/assets/ServiceDetailsImages/webimg.png",
    link: "/services/web-development",
    bgColor: "bg-[#91B9A4AB]",
  },
  {
    title: "App Development",
    description:
      "At TechCreator, we excel in developing cutting-edge mobile applications that cater to diverse industries and user needs. Our app development services cover Android, iOS, and cross-platform solutions, ensuring seamless performance across all devices. From ideation and UI/UX design to deployment and maintenance, we work closely with clients to craft apps that are intuitive, secure, and feature-rich. Let us bring your app idea to life and help you connect with users like never before.",
    image: "/assets/ServiceDetailsImages/appimg.png",
    link: "/services/mobile-app-development",
    bgColor: "bg-[#E5DFACAB]",
  },
  {
    title: "UI/UX Designing",
    description:
      "TechCreator specializes in creating visually stunning and user-centered designs that enhance usability and engagement. Our UI/UX design services focus on understanding user behavior and crafting interfaces that are not only aesthetically pleasing but also highly functional. We design responsive and accessible interfaces for websites, mobile apps, and software, ensuring an enjoyable experience across all devices. Collaborate with us to achieve designs that captivate and delight your audience.",
    image: "/assets/ServiceDetailsImages/uximg.png",
    link: "/services/ui-ux-designing",
    bgColor: "bg-[#E5C2ACAB]",
  },
  {
    title: "DevOps",
    description:
      "TechCreator provides comprehensive DevOps solutions to streamline your software development and IT operations. Our services include infrastructure automation, CI/CD pipelines, cloud integration, and monitoring, aimed at enhancing efficiency and collaboration. By adopting DevOps best practices, we help businesses achieve faster software delivery, improved reliability, and seamless scalability. Let us optimize your workflows to ensure a high-performing, secure, and agile development environment.",
    image: "/assets/ServiceDetailsImages/QA.png",
    link: "/services/devops",
    bgColor: "bg-[#A1D9D3]",
  },
  {
    title: "Graphic Designing",
    description:
      "At TechCreator, our graphic design services are all about transforming ideas into impactful visuals. We offer a wide range of design solutions, including logos, brochures, websites, and social media graphics, tailored to reflect your brand identity. Our creative team works meticulously to produce designs that are not only eye-catching but also communicate your message effectively. Elevate your brand’s visual appeal with our innovative graphic design expertise.",
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
      "TechCreator provides expert SEO and content writing services to enhance your online visibility and drive organic traffic. Our team crafts keyword-optimized, high-quality content tailored to resonate with your audience and improve search engine rankings. From website copy and blog posts to product descriptions and marketing materials, we ensure your content is engaging, informative, and aligned with your brand voice. Boost your digital presence and connect with your audience effectively.",
    image: "/assets/ServiceDetailsImages/seo1.png",
    link: "/services/seo-content-writing",
    bgColor: "bg-[#B3D9C9]",
  },
  {
    title: "Software Maintenance",
    description:
      "TechCreator offers reliable software maintenance services to ensure your applications remain functional, secure, and up-to-date. Our services include regular updates, performance optimization, security patches, and issue resolution to minimize downtime and enhance user satisfaction. We provide proactive monitoring and support to address potential problems before they escalate, ensuring your software operates smoothly and efficiently over time.",
    image: "/assets/ServiceDetailsImages/soft.png",
    link: "/services/software-maintenance",
    bgColor: "bg-[#C1B2E3]",
  },
  {
    title: "QA Testing",
    description:
      "Ensure the quality and reliability of your software with TechCreator’s QA testing services. Our team conducts comprehensive manual and automated testing to identify bugs, improve functionality, and optimize performance. From unit testing and integration testing to user acceptance testing, we ensure your software meets the highest quality standards before deployment. Let us help you deliver flawless and user-friendly applications to your audience.",
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
