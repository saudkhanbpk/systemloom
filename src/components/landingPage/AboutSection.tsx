import Image from "next/image";
import squareImage from "../../../public/assets/aboutImages/Group 143725868.png";
import group1 from "../../../public/assets/aboutImages/Mask group.png";
import group2 from "../../../public/assets/aboutImages/Mask group (1).png";
import group3 from "../../../public/assets/aboutImages/Mask group (2).png";

function AboutSection() {
  return (
    <section className="py-12 md:py-16 md:p-10 mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
        {/* Image Section */}
        <div className="flex flex-col sm:flex-row items-center md:w-1/2 w-full justify-center gap-4">
          {/* Group1 */}
          <div className="mb-4 md:mb-0 md:mr-2">
            <Image
              src={group1}
              alt="image1"
              className="w-[290px] h-[180px] md:w-[280px] md:h-[290px] rounded-md object-cover"
            />
          </div>
          {/* Group2 and Group3 */}
          <div>
            <div className="mb-4 md:mb-1">
              <Image
                src={group2}
                alt="image2"
                className="w-[290px] h-[180px] md:w-[280px] md:h-[280px] rounded-md object-cover"
              />
            </div>
            <div>
              <Image
                src={group3}
                alt="image3"
                className="w-[290px] h-[180px] md:w-[280px] md:h-[100px] rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 w-full relative">
          {/* Image aligned to the right */}
          {/* <div className="absolute -top-20 hide-at-970 right-52 transform translate-x-3">
            <Image
              src={squareImage}
              alt="about_image"
              width={150}
              height={150}
              layout="responsive"
              className="object-cover"
              sizes="(max-width: 768px) 150px, (min-width: 548px) 150px, (min-width: 1024px) 300px"
            />
          </div> */}

          {/* Text Content */}
          <div className="text-center md:text-left mx-auto">
            <h2 className="text-[#9A00FF]  font-bold text-3xl md:text-[35px] leading-tight md:leading-[45px] mb-4">
            We Bring Maximum value to your business
            </h2>
            <p className="font-normal text-xl p-2 md:text-lg leading-7 md:leading-[36px]">
              TechCreator is a software development company helping businesses
              scale up their growth. Your potential customers will find you
              online. Our team made it happen. Engage them with contemporary,
              attractive web design and content they were looking for on the
              search engines. Then, watch your sales grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

// "use client"
// import Image from "next/image";
// import squareImage from "../../../public/assets/aboutImages/Group 143725868.png";
// import group1 from "../../../public/assets/aboutImages/Mask group.png";
// import group2 from "../../../public/assets/aboutImages/Mask group (1).png";
// import group3 from "../../../public/assets/aboutImages/Mask group (2).png";
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer'; 

// function AboutSection() {
  
//   const { ref, inView } = useInView({
//     triggerOnce: false,   
//     threshold: 0.3,      
//   });

//   return (
//     <section className="py-12 md:py-16 md:p-10 mx-auto">
//       <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
//         {/* Image Section */}
//         <motion.div
//           ref={ref} 
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className="flex flex-col sm:flex-row items-center md:w-1/2 w-full justify-center gap-4"
//         >
//           {/* Group1 */}
//           <div className="mb-4 md:mb-0 md:mr-2">
//             <Image
//               src={group1}
//               alt="image1"
//               className="w-[290px] h-[180px] md:w-[280px] md:h-[290px] rounded-md object-cover"
//             />
//           </div>
//           {/* Group2 and Group3 */}
//           <div>
//             <div className="mb-4 md:mb-1">
//               <Image
//                 src={group2}
//                 alt="image2"
//                 className="w-[290px] h-[180px] md:w-[280px] md:h-[280px] rounded-md object-cover"
//               />
//             </div>
//             <div>
//               <Image
//                 src={group3}
//                 alt="image3"
//                 className="w-[290px] h-[180px] md:w-[280px] md:h-[100px] rounded-md object-cover"
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Text Section */}
//         <motion.div
//           ref={ref} 
//           initial={{ opacity: 0, y: 150 }}
//           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 150 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className="flex flex-col items-center md:items-start md:w-1/2 w-full relative"
//         >
//           {/* Text Content */}
//           <div className="text-center md:text-left mx-auto">
//             <h1 className="text-[#9A00FF] font-bold text-3xl md:text-[35px] leading-tight md:leading-[45px] mb-4">
//               We Bring Maximum value to your business
//             </h1>
//             <p className="font-normal text-xl p-2 md:text-lg leading-7 md:leading-[36px]">
//               TechCreator is a software development company helping businesses
//               scale up their growth. Your potential customers will find you
//               online. Our team made it happen. Engage them with contemporary,
//               attractive web design and content they were looking for on the
//               search engines. Then, watch your sales grow.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;


