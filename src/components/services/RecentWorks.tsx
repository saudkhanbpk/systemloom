import { Pencil, Heart } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import image from '../../../public/assets/RecentWork/unsplash_IyaNci0CyRk.png';
import image1 from '../../../public/assets/RecentWork/unsplash_7ZWVnVSaafY.png';
import image2 from '../../../public/assets/RecentWork/unsplash_qC2n6RQU4Vw.png';
import image3 from '../../../public/assets/RecentWork/unsplash_m_HRfLhgABo.png';

const RecentWorks: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="md:w-[92%] mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Works</h2>
        </div>

        {/* Works Section */}
        <div className="w-full md:w-[1203] flex flex-col md:flex-row gap-6">
          {/* Main Feature Image */}
          <div className="rounded-2xl md:w-[30%] w-full overflow-hidden">
            <Image
              src={image}
              alt="Orange book design"
              className="w-full h-64 md:h-[600px] object-cover bg-yellow-400"
            />
          </div>

          {/* Secondary Images Grid */}
          <div className="grid grid-cols-2 w-full md:w-[70%] gap-4">
            {/* Logo Design with Icons */}
            <div className="relative col-span-2 md:col-span-1 overflow-hidden rounded-2xl">
              <div className="w-full h-72 bg-blue-600 flex flex-col items-center justify-center text-white rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Logo</h3>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Pencil className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Image 1 */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={image1}
                alt="Laptop on table"
                className="w-full h-70 object-cover"
              />
            </div>

            {/* Secondary Image 2 */}
            <div className="rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                src={image2}
                alt="Development setup"
                className="w-full h-70 object-cover"
              />
            </div>

            {/* Secondary Image 3 */}
            <div className="rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1">
              <Image
                src={image3}
                alt="Design planning"
                className="w-full h-70 object-cover"
              />
            </div>
          </div>
        </div>


        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
