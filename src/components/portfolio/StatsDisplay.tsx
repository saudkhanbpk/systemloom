import React from 'react';

const StatsDisplay: React.FC = () => {
  return (
    <div>

          <div className="bg-[#F1EEE4]">
            <div className="max-w-4xl mx-auto grid grid-cols-12 grid-rows-6 gap-2 aspect-[4/3]">
              {/* Laptop Image */}
              <div className="col-span-7 row-span-4 bg-gray-200 rounded-3xl overflow-hidden">
                <img src="/api/placeholder/500/300" alt="Laptop" className="w-full h-full object-cover" />
              </div>

              {/* Phone Image */}
              <div className="col-span-3 row-span-3 bg-gray-200 rounded-3xl overflow-hidden">
                <img src="/api/placeholder/200/300" alt="Phone" className="w-full h-full object-cover object-left" />
              </div>

              {/* Client Satisfaction */}
              <div className="col-span-5 row-span-3 bg-[#006A60] text-white p-4 rounded-3xl flex flex-col justify-center items-start">
                <div className="text-5xl font-bold leading-none">98%</div>
                <div className="text-sm mt-1">Client Satisfaction</div>
              </div>

              {/* Training Completion */}
              <div className="col-span-5 row-span-2 bg-[#A7B8FF] text-white p-4 rounded-3xl flex flex-col justify-center items-start">
                <div className="text-4xl font-bold leading-none">98%</div>
                <div className="text-sm mt-1">Training completion</div>
              </div>

              {/* Desktop Setup Image */}
              <div className="col-span-7 row-span-3 bg-gray-200 rounded-3xl overflow-hidden">
                <img src="/api/placeholder/500/200" alt="Desktop Setup" className="w-full h-full object-cover" />
              </div>

              {/* Employee Satisfaction */}
              <div className="col-span-5 row-span-2 bg-[#5E2E53] text-white p-4 rounded-3xl flex flex-col justify-center items-start">
                <div className="text-4xl font-bold leading-none">4.7<span className="text-yellow-300 text-2xl ml-1">★</span></div>
                <div className="text-sm mt-1">Employee satisfaction</div>
              </div>

              {/* Success Rate */}
              <div className="col-span-5 row-span-2 bg-[#FFD572] p-4 rounded-3xl flex flex-col justify-center items-start">
                <div className="text-4xl font-bold leading-none text-[#006A60]">100%</div>
                <div className="text-sm mt-1 text-[#006A60]">Success rate</div>
              </div>
            </div>
        </div>
        </div>
  );
};

export default StatsDisplay;
