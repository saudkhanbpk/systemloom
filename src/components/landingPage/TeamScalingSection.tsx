"use client";
import Image from "next/image";
import team1 from "../../../public/assets/landingPage/Rectangle 17.png";
import team2 from "../../../public/assets/landingPage/Rectangle 18.png";
import teemImage3 from "../../../public/assets/landingPage/team3.avif";
import projectManagerImage from "../../../public/assets/Teamimages/hamdan.jpg";
import CeoImage from "../../../public/assets/Teamimages/ceoimage2.jpg";
import AdminOfficerImage from "../../../public/assets/Teamimages/hamdad.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const imageHoverVariants = {
  hover: { scale: 1.05, transition: { duration: 0.5 } },
};

const TeamScalingSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.section className="py-16 md:p-16"  ref={ref}>
      <div className="md:mx-10 px-2">
        {/* First Section */}
        <div
          className="flex flex-col lg:flex-row mb-10"
          
        >
          <motion.div
            className="mb-8 leading-[44px] mt-5 lg:mb-0"
            variants={slideInVariants}
            initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -150 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          
            
          >
            <h2 className="text-[28px] font-semibold text-[#9A00FF] mb-4">
              Empowering Your Business with Innovation
            </h2>
            <p className="mb-4 font-normal text-lg">
              Feeling short of the right expertise to build your product?
            </p>
            <p className="mb-4 font-normal text-lg">
              We can either take over your entire development project or augment
              your team to assist you at any stage of your product development
              cycle.
            </p>
            <div className="border-l-4 border-[#9A00FF] pl-4 mb-6">
              <p className="text-[#9A00FF] italic font-light text-base mb-2">
                "Our team of experts integrates seamlessly with yours, ensuring
                smooth collaboration and timely delivery."
              </p>
            </div>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              
            >
              <Image
                src={CeoImage}
                alt="ceo-image"
                width={850}
                height={850}
                className="w-12 h-12 rounded-full mr-3 object-fill"
              />
              <div>
                <p className="font-normal text-base">Saud Khan</p>
                <p className="text-sm font-normal text-[#718096]">CEO</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:max-w-[600px] mx-auto md:mx-0"
            variants={imageHoverVariants}
            whileHover="hover"
            ref={ref} 
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 150 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={team1}
              alt="Organizing TecCreator team to offer development services"
              width={700}
              height={450}
              className="w-full md:w-[120vw] h-[350px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>

        {/* Second Section */}
        <div
          className="flex flex-col gap-10 lg:flex-row mb-10"
        >
          <motion.div
            className="w-full mx-auto md:mx-0"
            variants={imageHoverVariants}
            whileHover="hover"
            ref={ref} 
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 150 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={team2}
              alt="Bringing Tech and Marketing together"
              width={700}
              height={450}
              className="w-full md:w-[120vw] h-[350px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="mb-8 leading-[44px] mt-5 lg:mb-0"
            variants={slideInVariants}
            initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -150 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-[28px] font-semibold text-[#9A00FF] mb-4">
              Bringing you the best of the Tech & Digital Eras
            </h2>
            <p className="mb-4 font-normal text-lg">
              To make your business skyrocket, you must have both the quality
              product to demonstrate and the optimization to grow. Our company
              aims to help the community in both of them.
            </p>
            <div className="border-l-4 border-[#9A00FF] pl-4 mb-6">
              <p className="text-[#9A00FF] italic font-light text-base mb-2">
                "As we build customized solutions to a person's unique needs."
              </p>
            </div>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            
            >
              <Image
                src={projectManagerImage}
                alt="ProjectManager-image"
                width={850}
                height={850}
                className="w-12 h-12 rounded-full mr-3 object-fill"
              />
              <div>
                <p className="font-normal text-base">Hamdan Khan</p>
                <p className="text-sm font-normal text-[#718096]">
                  Project Manager
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Third Section */}
        <div
          className="flex flex-col lg:flex-row"
        >
          <motion.div
            className="mb-8 leading-[44px] mt-5 lg:mb-0"
            variants={slideInVariants}
            initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -150 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="text-[28px] font-semibold text-[#9A00FF] mb-4">
              What makes us Apart from Others
            </h2>
            <p className="mb-4 font-normal text-lg">
              We don’t just deliver services; we work closely with our clients
              to understand their vision and align our strategies to achieve
              their goals. By staying ahead of market trends, we are able to
              provide our clients with cutting-edge software and digital
              marketing solutions.
            </p>
            <div className="border-l-4 border-purple-600 pl-4 mb-6">
              <p className="text-[#9A00FF] italic font-light text-base mb-2">
                "With us, you don’t just get a service provider—you get a
                partner dedicated to your growth."
              </p>
            </div>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={AdminOfficerImage}
                alt="AdminOfficer-image"
                width={850}
                height={850}
                className="w-10 h-10 rounded-full mr-3 object-fill"
              />
              <div>
                <p className="font-normal text-base">Aamad Khan</p>
                <p className="text-sm font-normal text-[#718096]">
                  Admin Officer
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="mx-auto md:mx-0"
            variants={imageHoverVariants}
            whileHover="hover"
            ref={ref} 
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 150 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={teemImage3}
              alt="Top developers and designers at TechCreator"
              width={700}
              height={450}
              className="w-full md:w-[120vw] h-[350px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TeamScalingSection;
