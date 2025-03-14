import Link from 'next/link'
import React from 'react'
import { LayoutDashboard, FileText, Zap, Clock } from "lucide-react";


const FeaturesList = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold md:mt-24 mt-9">Why Choose Us</h2>
            <div className=' flex md:flex-row flex-col  gap-3 md:gap-7 mt-6 '>
            
              <div className="border-r  xl:pr-3">
                <LayoutDashboard className="w-6 h-6 text-pink-500 flex-shrink-0" />
      
                {/* Text */}
                <p className="text-gray-700 text-sm md:text-base xl:text-lg mt-2">
                Build scalable websites with modern technologies tailored to your business goals.
                </p>
              </div>
      
              <div className="border-r  xl:pr-3">
                <FileText className="w-6 h-6 text-purple-500 flex-shrink-0" />
      
                {/* Text */}
                <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
                Ensure seamless performance and intuitive <Link href="/services/ui-ux-design-agency" className="cursor-pointer text-blue-600">user experience</Link> with our web solutions.
                </p>
              </div>
      
              <div className="border-r  xl:pr-3">
                <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />
      
                {/* Text */}
                <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
                Integrate powerful features and tools to enhance your website’s functionality.
                </p>
              </div>
      
              <div className="  xl:pr-3">
                <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />
      
                {/* Text */}
                <p className="text-gray-700 text-sm md:text-base xl:text-lg  mt-2">
                Deliver projects on time with precision and a focus on quality.
                </p>
              </div>
            </div>
    </div>
  )
}

export default FeaturesList
