import Image from 'next/image';
import squareImage from '../../../public/assets/aboutImages/Group 143725868.png';
import group1 from '../../../public/assets/aboutImages/Mask group.png';
import group2 from '../../../public/assets/aboutImages/Mask group (1).png';
import group3 from '../../../public/assets/aboutImages/Mask group (2).png';

function AboutSection() {
  return (
    <>
      <section className="py-12 md:py-16 md:p-10  mx-auto">
        <div className=" flex  flex-col md:flex-row justify-center gap-12   items-center">
          <div className="flex flex-col sm:flex-row items-center  md:w-1/2 w-full justify-center   gap-4">
            <div className="mb-4 md:mb-0 md:mr-2">
              <Image
                src={group1}
                alt="image1"
                className="w-[250px] h-[260px] md:w-[324px] md:h-[333px] object-cover"
              />
            </div>
            <div>
              <div className="mb-4 md:mb-1">
                <Image
                  src={group2}
                  alt="image2"
                  className="w-[250px] h-[150px] md:w-auto md:h-auto object-cover"
                />
              </div>
              <div>
                <Image
                  src={group3}
                  alt="image3"
                  className="w-[250px] h-[150px] md:w-auto md:h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:w-1/2 w-full">
            <div className="mb-4 md:mb-4  flex justify-center md:justify-start md:ms-44">
              <Image
                src={squareImage}
                alt="about_image"
                width={250}  
    height={260} 
    layout="responsive"  
    className="object-cover"
    sizes="(max-width: 768px) 250px, (min-width: 768px) 324px"
              />
            </div>
            <div className="text-center md:text-left  mx-auto">
              <h1 className="text-[#9A00FF] font-bold text-3xl md:text-[35px] leading-tight md:leading-[55px] mb-4">
                About Us
              </h1>
              <p className=" font-normal text-base md:text-xl leading-7 md:leading-[36px] max-w-full md:max-w-lg">
              TechCreator is a software development company helping businesses scale up their growth Because Your potential customers will find you online. Our team made it happen. Engage them with contemporary, attractive web design and content they were looking for on the search engines. Then, Watch your sales grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
