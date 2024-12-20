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

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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

    // Validate email format
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(email)) {
    //   toast.error("Please enter a valid email address!");
    //   return;
    // }

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
      // console.log("email", res)
      if (res.data.success) {
        toast.success(res.data.message);
        setEmail(""); // Clear email input after successful subscription
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
        // Background image will load dynamically with Intersection Observer
      ></div>
      <div className="relative mx-auto  px-3 mt-6">
        <div className="flex flex-wrap md:gap-10 gap-9 justify-between px-5">
          <div className=" ">
            <div className="flex items-center gap-2">
              <Image
                src={TechcreatorLogo}
                alt="logo"
                width={158}
                height={40}
                className=""
              />
            </div>
            <p className="max-w-sm md:max-w-md text-xs md:text-sm leading-5 w-[230px] md:leading-6 mt-5">
              We have been providing quality services since 2001. We provide our
              clients with complete end-to-end solutions, customized according
              to their needs.
            </p>
            <div></div>
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
                href="https://www.upwork.com/agencies/1479726519577280512/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-gray-400 hover:text-[#9A00FF] text-lg md:text-xl"
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
              <h1 className="text-2xl font-bold">Subscribe</h1>
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
                    className="text-black p-2 outline-none rounded-md "
                  />
                 <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  type="submit"
  disabled={loading}
  className="bg-[#9A00FF] text-white rounded-md p-2 w-fit"
>
  {loading ? "Subscribing..." : "Subscribe"}
</motion.button>

                </form>
              </div>
            </div>
          </div>

          <div className="flex flex-col  gap-4">
            <h1 className="text-base  md:text-lg font-semibold">
              Industries We Serve
            </h1>
            <ul className="flex flex-col gap-4 text-sm">
              <Link
                href="/healthcare-projects"
                className="hover:text-[#9A00FF]"
              >
                <li>HealthCare</li>
              </Link>
              <Link
                href="/e-commerce-projects"
                className="hover:text-[#9A00FF]"
              >
                <li>E-Commerce</li>
              </Link>
              <Link
                href="/hospitality-projects"
                className="hover:text-[#9A00FF]"
              >
                <li>Hospitality</li>
              </Link>
              <Link
                href="/real-estate-projects"
                className="hover:text-[#9A00FF]"
              >
                <li>Real Estate</li>
              </Link>
              <Link
                href="/restaurants-projects"
                className="hover:text-[#9A00FF]"
              >
                <li>Restaurants</li>
              </Link>
              <Link
                href="/green-energy-projects"
                className="hover:text-[#9A00FF]"
              >
                <li>Green Energy</li>
              </Link>
            </ul>
          </div>

          <div className="">
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
                    className="text-xs md:text-sm hover:text-[#9A00FF] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}

              {user ? (
                <>
                  {user.role === "admin" && (
                    <Link
                      href="/admin"
                      className="flex items-center gap-2 text-xs md:text-sm hover:text-[#9A00FF] transition-colors"
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-xs md:text-sm hover:text-[#9A00FF] transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 hover:text-[#9A00FF] "
                  >
                    Admin
                  </Link>
                </>
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
                {
                  name: "Social Media Marketing & Branding",
                  link: "/services/digital-marketing",
                },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.link}
                    className="text-xs md:text-sm hover:text-[#9A00FF] transition-colors"
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
                >
                  <div className="flex gap-2 items-center text-base mt-1">
                    <FaWhatsapp size={28} color="#9A00FF" />
                    <span>+44 7511 801699</span>
                  </div>

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
                </a>
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
                {/* <CommonButton
  className="bg-[#9A00FF] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
  title="Consultancy"
  handleClick={() => window.open("https://mentoga.com/saudkhan", "_blank")} 
/> */}

                <AppointmentSection  />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700  flex flex-col md:flex-row items-center  justify-end">
          <p className="text-xs md:text-sm text-gray-400 mt-3 ">
            © 2024 <span className="text-[#9A00FF]">TechCreator</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
