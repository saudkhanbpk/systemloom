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
import Footerbg from "../../../public/assets/footerImages/footer_bg_image.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { setUser } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "@/redux/store";
import TechcreatorLogo from "../../../public/assets/icons/Tclogo1.png";
import AppointmentSection from "./AppointmentSection";
import { AiOutlineMail } from "react-icons/ai";
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const pathname = usePathname();
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
      return () => observer.disconnect(); 
    } else if (footerBackground) {
      footerBackground.style.backgroundImage = `url(${Footerbg.src})`;
    }
  }, []);

  const dispatch = useDispatch();
  const { user } = useSelector((store: RootState) => store.auth);

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${backend_url}/api/v1/user/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        router.push("/");
        localStorage.removeItem("token");
        toast.success(res.data.message);
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message || error?.message || "Failed to logout";
      toast.error(message);
    }
  };

  // Handle form submission
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required!");
      return;
    }


    setLoading(true);

    try {
      const res = await axios.post(
        `${backend_url}/api/v1/subscribeuser`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (res.data.success) {
        toast.success(res.data.message);
        setEmail("");
      } else {
        toast.error(res.data.message || "Subscription failed!");
      }
    } catch (error: any) {
      console.error("Error during subscription:", error);

      // Fallback error message
      const message =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-black text-white py-4 md:py-4 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 footer-bg"
      ></div>
      <div className="relative mx-auto  px-3 mt-6">
        <div className="flex flex-wrap md:gap-10 gap-9 justify-between px-5">
          <div className=" ">
            <div className="flex gap-7 mt-4 md:mt-4">
              <a
                href="https://www.facebook.com/techcreatorfb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-gray-400 hover:text-[#9A00FF] text-lg md:text-xl"
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
                  className="text-gray-400 hover:text-[#9A00FF] text-lg md:text-xl"
                />
              </a>
              <a
                href="https://www.youtube.com/@techcreator9512"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-gray-400 hover:text-[#9A00FF] text-lg md:text-xl"
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
                  className="text-gray-400 hover:text-[#9A00FF] text-lg md:text-xl"
                />
              </a>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold">Subscribe</h2>
              <p className="mt-2 mb-2">Stay updated with the latest in tech.</p>
              <div className="flex flex-col gap-2">
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={loading}
                    required
                    className="text-black p-2 outline-none rounded-md  "
                  />
                 <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  type="submit"
  disabled={loading}
  className="bg-[#9A00FF] text-white rounded-md p-2 w-fit shadow-[0_4px_16px_-4px_#3b71ca]"
>
  {loading ? "Subscribing..." : "Subscribe"}
</motion.button>

                </form>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
      <h2 className="text-base md:text-lg font-semibold">Industries We Serve</h2>
      <ul className="flex flex-col gap-4 text-sm">
        {[
          { href: '/healthcare', label: 'HealthCare' },
          { href: '/e-commerce', label: 'E-Commerce' },
          { href: '/hospitality', label: 'Hospitality' },
          { href: '/real-estate', label: 'Real Estate' },
          { href: '/restaurants', label: 'Restaurants' },
          { href: '/green-energy', label: 'Green Energy' },
        ].map((item) => (
          <li key={item.href}>
            <Link href={item.href}
            className={`${
              pathname === item.href
                ? 'text-[#9A00FF]'
                : 'hover:text-[#9A00FF]'
            }`}
            >           
                {item.label}
              
            </Link>
          </li>
        ))}
      </ul>
    </div>


    <div className="">
      <h3 className="text-base md:text-lg font-semibold mb-4">Links</h3>
      <ul className="space-y-2">
        {[
          "Home",
          "About",
          "Contact",
          "Blog",
          "Pricing",
          "Portfolio",
          "Career",
        ].map((item) => (
          <li key={item}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-xs md:text-sm transition-colors ${
                pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "text-[#9A00FF]"
                  : "hover:text-[#9A00FF]"
              }`}
            >
              {item}
            </Link>
          </li>
        ))}

        {user ? (
          <>
            {user.role === "admin" && (
              <li>
                <Link
                  href="/admin"
                  className={`flex items-center gap-2 text-xs md:text-sm transition-colors ${
                    pathname === "/admin"
                      ? "text-[#9A00FF]"
                      : "hover:text-[#9A00FF]"
                  }`}
                >
                  Admin
                </Link>
              </li>
            )}
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-xs md:text-sm hover:text-[#9A00FF] transition-colors"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link
              href="/login"
              className={`flex items-center text-sm gap-2 transition-colors ${
                pathname === "/login"
                  ? "text-[#9A00FF]"
                  : "hover:text-[#9A00FF]"
              }`}
            >
              Admin
            </Link>
          </li>
        )}
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
                  link: "/services/affordable-graphic-design-services",
                },
                {
                  name: "Mobile App Development",
                  link: "/services/mobile-app-development-company",
                },
                {
                  name: "DevOps Services & Optimization",
                  link: "/services/devops",
                },
                { name: "UI/UX Designing", link: "/services/ui-ux-design-agency" },
                {
                  name: "Software Maintenance",
                  link: "/services/software-maintenance-services",
                },
                {
                  name: "SEO & Content Writing",
                  link: "/services/seo-services-for-small-business",
                },
                {
                  name: "Project Management",
                  link: "/services/project-management",
                },
                { name: "QA Testing", link: "/services/web-qa-tester" },
                {
                  name: "Digital Marketing",
                  link: "/services/digital-marketing-for-software-companies",
                },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.link}
            className={`${
              pathname === service.link
                ? 'text-[#9A00FF]'
                : 'hover:text-[#9A00FF]'
            }`}
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
              <div className="text-xs md:text-sm flex items-center gap-2">
                <span className="">
                  <AiOutlineMail size={28} color="#9A00FF" />
                </span>
                <a href="mailto:contact@techcreator.co">
                  contact@techcreator.co
                </a>
              </div>
              <div className="text-xs md:text-sm">
  <a
    href="https://wa.me/+447511801699"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    <div className="flex gap-2 items-center text-base mt-1">
      <FaWhatsapp size={28} color="#9A00FF" />
      <span>+44 7511 801699</span>
    </div>
  </a>

  <div className="md:hidden block">
    <div className=" flex gap-2 items-center text-base mt-2 ">
      <PhoneCall color="#9A00FF" />
      <span>
        <a href="tel:+13214073272" className="hover:underline">
          +1 (321) 407-3272
        </a>
      </span>
    </div>
  </div>
</div>

              <div className=" md:block hidden">
                <div className="flex gap-2 items-center text-base ">
                  <PhoneCall color="#9A00FF" />
                  <span>
                    <a href="callto:+13214073272" className="hover:underline">
                      +1 (321) 407-3272
                    </a>
                  </span>
                </div>
              </div>

              <div>
                <AppointmentSection  />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700  flex flex-col md:flex-row items-center md:p-0 p-4 justify-around px-10 ">
        <div className="flex gap-5">
      {[
        { href: '/terms-conditions', label: 'Terms & Conditions' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-xs md:text-sm cursor-pointer md:mt-3 transition-colors ${
            pathname === link.href
              ? 'text-purple-600 '
              : 'text-gray-400 hover:text-purple-600'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
          <p className="text-xs md:text-sm text-gray-400 mt-3 ">
            © 2025 <span className="text-[#9A00FF]">TechCreator</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
