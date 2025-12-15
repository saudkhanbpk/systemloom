import React from "react";
import Image from "next/image";
import Link from "next/link";
// import companyImage from "../../../public/assets/aboutpage/teamimage.png";

const Overview: React.FC = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* LEFT: Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[#302f2f] font-inter text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            About System Loom
          </h2>

          <p className="text-[16px] md:text-[18px] text-gray-700 font-inter leading-7 md:leading-8 font-bold">
            System Loom is where innovation meets smart craftsmanship. We use modern technology
            and clear creative thinking to build digital solutions that are intelligent, scalable, and impactful.
          </p>

          <p className="text-[16px] md:text-[18px] text-gray-700 font-inter leading-7 md:leading-8 mt-6">
            From <span className="font-bold">AI-based tools</span> to{" "}
            <span className="font-bold">well-designed apps and websites</span>, and{" "}
            <span className="font-bold">marketing strategies that deliver real results</span>,
            our team works as your complete digital partner.
            <br />
            Guided by our tagline —
            <span className="font-bold"> Weaving Intelligent Systems for the Future </span> —
            we treat every project like a unique digital design, bringing together the right mix of{" "}
            <span className="font-bold">design, development, and strategy</span>.
          </p>

          <p className="text-[16px] md:text-[18px] text-gray-700 font-inter leading-7 md:leading-8 mt-6">
            We don’t just build digital products —
            <br />
            <span className="font-bold">
              We create digital experiences that help brands grow and move forward.
            </span>
          </p>
        </div>

        {/* RIGHT: Image / Logo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg lg:max-w-xl h-[360px] md:h-[420px] lg:h-[580px]">

            <Image
              // src={companyImage}
              src="/assets/aboutpage/aboutheroimage.png" // or your logo
              alt="System Loom Team"
              fill
              className="object-contain scale-110 md:scale-125 rounded-xl"

              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Overview;
