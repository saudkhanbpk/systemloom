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
            <div className="mb-4 md:mb-4 flex justify-center md:justify-start md:ms-44">
              <Image
                src={squareImage}
                alt="about_image"
                className="w-[150px] h-[150px] md:w-[196.88px] md:h-[196.18px] rotate-[-9.96deg] object-cover"
              />
            </div>
            <div className="text-center md:text-left  mx-auto">
              <h1 className="text-[#9A00FF] font-bold text-3xl md:text-[35px] leading-tight md:leading-[55px] mb-4">
                About Us
              </h1>
              <p className="text-[#3F3F3F] font-normal text-base md:text-xl leading-7 md:leading-[36px] max-w-full md:max-w-lg">
                Concept Softworks is a software company, we develop custom-built
                software for clients - covering everything from financial
                institutions & medical companies all the way to tech companies
                and government organizations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
