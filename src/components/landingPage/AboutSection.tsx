import Image from "next/image";
import squareImage from "../../../public/assets/aboutImages/Group 143725868.png";
import group1 from "../../../public/assets/homepage/Mask group.webp";
import group2 from "../../../public/assets/homepage/Mask group (1).webp";
import group3 from "../../../public/assets/homepage/Mask group (2).webp";
import Link from "next/link";

function AboutSection() {
  return (
    <section className="py-8 md:py-16 mt-5 mx-auto">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      {/* Image Section */}
      <div className="flex flex-col sm:flex-row items-center w-full justify-center gap-4">
        {/* Group1 */}
        <div className="mb-4 md:mb-0">
          <Image
            src={group1}
            alt="image1"
            width={290}
            height={180}
            className="rounded-md object-cover max-w-full h-auto"
          />
        </div>
  
        {/* Group2 and Group3 */}
        <div className="flex flex-col gap-4">
          <Image
            src={group2}
            alt="image2"
            width={290}
            height={180}
            className="w-full md:w-[280px] xl:w-[350px] rounded-md object-cover"
          />
          <Image
            src={group3}
            alt="image3"
            width={290}
            height={180}
            className="w-full md:w-[280px] xl:w-[350px] rounded-md object-cover"
          />
        </div>
      </div>
  
      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start w-full relative">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-[#9A00FF] font-bold text-3xl md:text-[35px] leading-tight md:leading-[45px] mb-4">
            We Bring Maximum value to your business
          </h2>
          <p className="font-normal text-xl p-2 xl:p-0 md:text-lg leading-7 md:leading-[36px]">
  TechCreator is a <Link href="/services/web-development" className="cursor-pointer text-blue-600">software development company</Link> dedicated to helping businesses scale their growth. We ensure your potential customers can find you online. Our team makes it happen by creating contemporary, attractive <Link href="/services/ui-ux-design-agency" className="cursor-pointer text-blue-600">web designs</Link>  and delivering the content your audience is searching for. Let us help you engage your customers and watch your <Link href="/services/digital-marketing-for-software-companies" className="cursor-pointer text-blue-600">sales grow</Link>.
</p>

        </div>
      </div>
    </div>
  </section>
  
  );
}

export default AboutSection;