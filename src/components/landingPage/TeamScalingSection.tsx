import Image from 'next/image';
import team1 from "../../../public/assets/landingPage/Rectangle 17.png"
import person1 from "../../../public/assets/landingPage/Ellipse 185.png"
import team2 from "../../../public/assets/landingPage/Rectangle 18.png"


const TeamScalingSection = () => {
  return (
    <section className="py-16 md:p-16 ">
      <div className="mx-10 ">
        <div className="flex flex-col lg:flex-row mb-10">
        <div className=" mb-8 leading-[44px] mt-5 lg:mb-0">
  <h2 className="text-[28px] font-semibold text-purple-600 mb-4">
    Unlock your potential with the right team
  </h2>
  <p className=" mb-4 font-normal text-lg">
    Finding the right team members can be a game-changer. We help you find passionate individuals who share your vision and will grow with your company.
  </p>
  <p className=" mb-4 font-normal text-lg">
    With our <span className="text-purple-600 font-semibold">strategic approach</span>, we ensure your team can meet objectives and scale effectively.
  </p>

  <div className="border-l-4 border-purple-600 pl-4 mb-6">
    <p className="text-[#9A00FF] italic font-light text-base mb-2">
      "Working with Simform has been a transformative experience. They helped us not only find the right people but also optimize our workflows."
    </p>
  </div>

  <div className="flex items-center">
    <Image
      src={person1}
      alt="ceo-image"
      width={700}
      height={450}
      className="w-10 h-10 rounded-full mr-3 object-cover"
    />
    <div>
      <p className="font-normal text-base">Jane Smith</p>
      <p className="text-sm font-normal text-[#718096]">Co-Founder & CEO</p>
    </div>
  </div>
</div>

          <div className="w-full max-w-[600px]  h-[350] mx-auto md:mx-0">
            <Image
              src={team1}
              alt="Team meeting"
              width={700}
              height={450}
              className="w-full h-[350px] rounded-lg shadow-lg object-cover"
            />
          </div>

        </div>

        <div className="flex flex-col gap-10 lg:flex-row mb-10">
          <div className="w-full max-w-[600px] h-[350] mx-auto md:mx-0">
            <Image
              src={team2}
              alt="Team meeting"
              width={700}
              height={450}
              className="w-full h-[350px] rounded-lg shadow-lg object-cover"
            />
          </div>


          <div className=" mb-8 leading-[44px] mt-5 lg:mb-0">
  <h2 className="text-[28px] font-semibold text-purple-600 mb-4">
    Scale your business with the right team
  </h2>
  <p className=" mb-4 font-normal text-lg">
    Building a high-performance team is crucial for scaling. We connect you with talented individuals who align with your business goals and culture.
  </p>
  <p className=" mb-4 font-normal text-lg">
    Our <span className="text-purple-600 font-semibold">flexible staffing solutions</span> allow you to scale efficiently while managing costs.
  </p>

  <div className="border-l-4 border-purple-600 pl-4 mb-6">
    <p className="text-[#9A00FF] italic font-light text-base mb-2">
      "The team at Simform quickly identified gaps in our processes, and together we expanded the solution to include new features."
    </p>
  </div>

  <div className="flex items-center">
    <img
      src="https://www.shutterstock.com/image-photo/smiling-successful-business-woman-office-260nw-1117963214.jpg"
      alt="ceo-image"
      width={700}
      height={450}
      className="w-10 h-10 rounded-full mr-3 object-cover"
    />
    <div>
      <p className="font-normal text-base">Zara</p>
      <p className="text-sm font-normal text-[#718096]">CEO</p>
    </div>
  </div>
</div>

        </div>
        <div className="flex flex-col lg:flex-row">
          <div className=" mb-8 leading-[44px] mt-5 lg:mb-0">
            <h2 className="text-[28px] font-semibold text-purple-600 mb-4">
              Build the right team to scale
            </h2>
            <p className=" mb-4 font-normal text-lg">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with
              you long term (not the case with freelancers
            </p>
            <p className=" mb-4 font-normal text-lg">
              Our <span className="text-purple-600 font-semibold">delivery model</span> helps you cut costs and deliver within
              budget.
            </p>

            <div className="border-l-4 border-purple-600 pl-4 mb-6">
              <p className="text-[#9A00FF] italic font-light text-base  mb-2">
                "Simform is a quick to identify larger problem with the
                Software so we decided to expand our scope to build
                new modules"
              </p>
            </div>

            <div className="flex items-center">
              <Image
                src="/assets/Teamimages/saudkhan.jpg"
                alt="ceo-image"
                width={700}
              height={450}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-normal text-base ">Saud khan</p>
                <p className="text-sm font-normal text-[#718096]">CEO</p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[600px] h-{350px} mx-auto md:mx-0">
            <Image
              src={team1}
              alt="Team meeting"
              width={700}
              height={450}
              className="w-full h-[350px] rounded-lg shadow-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamScalingSection;