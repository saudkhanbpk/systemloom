"use client";
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import Logo from '../../../public/assets/icons/Logo.png';
import CommonButton from '../common/Button';
import Footerbg from '../../../public/assets/footerImages/footer_bg_image.svg';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white py-8 md:py-10 w-full ">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${Footerbg.src})`,
        }}
      ></div>
      <div className="relative  mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <div className="ml-2 md:ml-8">
            <div className="flex items-center gap-2">
              <Image src={Logo} alt="logo" width={50} height={40} className="w-10 h-10 md:w-12 md:h-12" />
              <span className="text-white text-lg md:text-xl font-semibold">
                Tech <br /> Creator
              </span>
            </div>
            <p className="max-w-sm md:max-w-md text-xs md:text-sm leading-5 md:leading-6 mt-5">
              We have been providing quality services since 2001. We provide our clients with complete end-to-end
              solutions, customized according to their needs.
            </p>
          </div>

          <div className='lg:ml-20'>
            <h3 className="text-base md:text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-xs md:text-sm hover:text-purple-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-5">
              {[
                { name: 'Web Development', link: '/services/web-development' },
                { name: 'Graphic Designing', link: '/services/web-development' },
                { name: 'Mobile App Development', link: '/services/mobile-app-development' },
                { name: 'DevOps Services & Optimization', link: '/services/devops' },
                { name: 'UI/UX Designing', link: '/services/ui-ux-design' },
                { name: 'Software Maintenance', link: '/services/mobile-app-development' },
                { name: 'SEO & Content Writing', link: '/services/devops' },
                { name: 'Project Management', link: '/services/mobile-app-development' },
                { name: 'SQA', link: '/services/sqa' },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.link} className="text-xs md:text-sm hover:text-purple-500 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-xs md:text-sm">contact@techcreator.co</p>
              <p className="text-xs md:text-sm">+92-311-9265290</p>
              <p className="text-xs md:text-sm">+92-311-9265290</p>
              <div className="flex sm:flex-row flex-col gap-3 space-x-2 mt-4">
                <CommonButton
                  className="bg-[#9A00FF] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
                  title="Consultancy"
                  handleClick={() => console.log('Consultancy Clicked')}
                />
                <CommonButton
                  className="bg-[#9A00FF] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
                  title="Appointment"
                  handleClick={() => console.log('Appointment Clicked')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
