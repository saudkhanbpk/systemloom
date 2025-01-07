import Image from "next/image";
import squareImage from "../../../public/assets/aboutImages/Group 143725868.png";
import group1 from "../../../public/assets/homepage/Mask group.webp";
import group2 from "../../../public/assets/homepage/Mask group (1).webp";
import group3 from "../../../public/assets/homepage/Mask group (2).webp";

function AboutSection() {
  return (
    <section className="py-8 md:py-16 md:px-10 xl:px-0 mt-5 mx-auto">
      <div className="flex flex-col md:flex-row  gap-12 items-center">
        {/* Image Section */}
        <div className="flex flex-col sm:flex-row items-center  w-full justify-center gap-4">
          {/* Group1 */}
          <div className="mb-4 md:mb-0 ">
            <Image
              src={group1}
              alt="image1"
              className="w-[290px] h-[180px] md:w-[280px] md:h-[290px] xl:w-[340px] rounded-md object-cover"
            />
          </div>
          {/* Group2 and Group3 */}
          <div>
            <div className="mb-4 md:mb-1">
              <Image
                src={group2}
                alt="image2"
                className="w-[290px] h-[180px] md:w-[280px] md:h-[280px] xl:w-[340px] rounded-md object-cover"
              />
            </div>
            <div>
              <Image
                src={group3}
                alt="image3"
                className="w-[290px] h-[180px] md:w-[280px] md:h-[100px] xl:w-[350px] rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start  w-full relative">
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
          <div className="text-center md:text-left">
            <h2 className="text-[#9A00FF]  font-bold text-3xl md:text-[35px] leading-tight md:leading-[45px] mb-4">
            We Bring Maximum value to your business
            </h2>
            <p className="font-normal text-xl p-2 xl:p-0 md:text-lg leading-7 md:leading-[36px]">
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