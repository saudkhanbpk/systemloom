// components/PricingCards.tsx
import Image from 'next/image';
import backgroundImage from "../../../public/assets/pricingPage/backgroundImage.jpeg"

import React, { useState } from 'react';

interface Plan {
  name: string;
  price: number;
  features: string[];
}

const PricingCards: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const plans: Plan[] = [
    {
      name: 'BASIC',
      price: isYearly ? 180 : 15,
      features: [
        'Personalized Workout',
        'Exercise Form Correction',
        'Lifestyle Plan',
      ],
    },
    {
      name: 'STANDARD',
      price: isYearly ? 120 : 10,
      features: [
        'Personalized Workout',
        'Exercise Form Correction',
        'Lifestyle Plan',
        'Personalized Program',
      ],
    },
    {
      name: 'PREMIUM',
      price: isYearly ? 84 : 7,
      features: [
        'Personalized Workout',
        'Exercise Form Correction',
        'Lifestyle Plan',
        'Personalized Program',
        '8 12 Weeks Plan',
      ],
    },
  ];

  return (
    <div className="relative bg-gray-900 text-white h-auto md:h-[420px] px-4">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="sm:px-6 py-24 md:py-32 relative max-w-[1440px] mx-auto container">
        <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-4 text-center">
          PRICING
        </h1>
        <p className="text-lg md:text-xl font-normal mb-8 text-white text-center">
          TechCreator is easy to use. Whether you need a simple mobile app or a
          complex web application, TechCreator has the expertise to deliver
          high-quality solutions that excel in web and mobile app
          development services.
        </p>

        <div className="flex justify-center mb-8">
          <div className="bg-[black] p-1 rounded-[12px]">
            <button
              className={`px-4 py-2 rounded-[10px] ${!isYearly ? 'bg-[#FFFFFF] text-[black]' : 'bg-[black] text-white'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-[10px] ${isYearly ? 'bg-[#FFFFFF] text-[black]' : 'bg-[black] text-white'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center space-y-3 md:gap-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#4848485C] bg-gray-800 w-full md:w-[359px] h-auto md:h-[604.11px] rounded-lg p-6 flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <p className="mb-6 text-[14.86px] font-normal font-inter">Membership</p>
              <div className="text-[49.52px] font-inter font-medium items-center">
                ${plan.price}
                <span className="text-[14.86px] font-semibold">/package</span>
              </div>
              {(index === 1 || index === 2) && (
                <p className="font-normal text-[14.86px]">
                  {index === 1 ? 'Save $30' : 'Save $150'}
                </p>
              )}
              <div className="border-[#AEAEAE] border-[1.24px] mb-8" />
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dot"
                    >
                      <circle cx="12.1" cy="12.1" r="1" />
                    </svg>
                    <p className="text-[14.86px] text-[#FFFFFF] font-inter leading-[19.36px] font-normal">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
