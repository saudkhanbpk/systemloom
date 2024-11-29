"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../public/assets/icons/Logo.png";
import CommonButton from "../common/Button";
import Footerbg from "../../../public/assets/footerImages/footer_bg_image.svg";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const footerBackground = document.querySelector(
      ".footer-bg"
    ) as HTMLElement | null;

    if (footerBackground && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              footerBackground.style.backgroundImage = `url(${Footerbg.src})`;
              observer.unobserve(entry.target); // Stop observing once image is loaded
            }
          });
        },
        { rootMargin: "0px 0px 200px 0px" }
      );

      observer.observe(footerBackground);
      return () => observer.disconnect(); // Cleanup observer on component unmount
    } else if (footerBackground) {
      // Fallback in case IntersectionObserver is not supported
      footerBackground.style.backgroundImage = `url(${Footerbg.src})`;
    }
  }, []);

  return (
    <footer className="relative bg-black text-white py-8 md:py-10 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 footer-bg"
        // Background image will load dynamically with Intersection Observer
      ></div>
      <div className="relative mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <div className="ml-2 md:ml-8">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="logo"
                width={50}
                height={40}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <span className="text-white text-lg md:text-xl font-semibold">
                Tech <br /> Creator
              </span>
            </div>
            <p className="max-w-sm md:max-w-md text-xs md:text-sm leading-5 md:leading-6 mt-5">
              We have been providing quality services since 2001. We provide our
              clients with complete end-to-end solutions, customized according
              to their needs.
            </p>
          </div>

          <div className="lg:ml-20">
            <h3 className="text-base md:text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Services",
                "Contact",
                "Blog",
                "Pricing",
                "Portfolio",
                "Career",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-xs md:text-sm hover:text-purple-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Web Development", link: "/services/web-development" },
                {
                  name: "Graphic Designing",
                  link: "/services/graphic-designing",
                },
                {
                  name: "Mobile App Development",
                  link: "/services/mobile-app-development",
                },
                {
                  name: "DevOps Services & Optimization",
                  link: "/services/devops",
                },
                { name: "UI/UX Designing", link: "/services/ui-ux-designing" },
                {
                  name: "Software Maintenance",
                  link: "/services/software-maintenance",
                },
                {
                  name: "SEO & Content Writing",
                  link: "/services/seo-content-writing",
                },
                {
                  name: "Project Management",
                  link: "/services/project-management",
                },
                { name: "QA Testing", link: "/services/qa-testing" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.link}
                    className="text-xs md:text-sm hover:text-purple-500 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-xs md:text-sm">
                <a href="mailto:contact@techcreator.co">
                  contact@techcreator.co
                </a>
              </p>
              <p className="text-xs md:text-sm">
                <a
                  href="https://wa.me/923119265290"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +92-311-9265290
                </a>
              </p>

              <div className="flex sm:flex-row flex-col gap-1 mt-4">
                <CommonButton
                  className="bg-[#9A00FF] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
                  title="Consultancy"
                  handleClick={() =>
                    router.push("https://mentoga.com/saudkhan")
                  }
                />

                <CommonButton
                  className="bg-[#9A00FF] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
                  title="Appointment"
                  handleClick={() =>
                    router.push("https://calendly.com/saudkhanbpk/")
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center  justify-between">
          <p className="text-xs md:text-sm text-gray-400">
            © 2024 TechCreator. All rights reserved.
          </p>
          <div className="flex gap-7 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/techcreatorfb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-gray-400 hover:text-purple-500 text-lg md:text-xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/techcreator"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-gray-400 hover:text-purple-500 text-lg md:text-xl"
              />
            </a>
            <a
              href="https://www.upwork.com/agencies/1479726519577280512/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-gray-400 hover:text-purple-500 text-lg md:text-xl"
              />
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-purple-500 text-lg md:text-xl" />
            </a> */}
            <a
              href="https://www.youtube.com/@techcreator9512"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-gray-400 hover:text-purple-500 text-lg md:text-xl"
              />
            </a>
            <a
              href="https://www.instagram.com/techcreatorco/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-400 hover:text-purple-500 text-lg md:text-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
