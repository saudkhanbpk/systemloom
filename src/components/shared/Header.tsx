import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/icons/Logo.png";
import personIcon from "../../../public/assets/landingPage/Vector.png";
import { CiLogout } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaHome, FaInfoCircle, FaTags, FaBlog, FaProjectDiagram,FaWrench,FaPencilRuler, FaBriefcase, FaEnvelope, FaDesktop, FaMobileAlt, FaPaintBrush, FaCogs, FaTasks, FaSearch, FaCheck, FaBullhorn } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { setUser } from "@/redux/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpens, setIsDropdownOpens] = useState(false);


  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((store: RootState) => store.auth);

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About Us", href: "/about", icon: <FaInfoCircle /> },
    {
      name: "Services",
      href: "#",
      icon: <FaDesktop />,
      dropdown: [
        { name: "Web Development", href: "/services/web-development", icon: <FaDesktop /> },
        { name: "Mobile App Development", href: "/services/mobile-app-development", icon: <FaMobileAlt /> },
        { name: "UI & UX Designing", href: "/services/ui-ux-designing", icon: <FaPaintBrush /> },
        { name: "DevOps", href: "/services/devops", icon: <FaCogs /> },
        { name: "Project Management", href: "/services/project-management", icon: <FaTasks /> },
        { name: "SEO & Content Writing", href: "/services/seo-content-writing", icon: <FaSearch /> },
        { name: "Software Maintenance", href: "/services/software-maintenance", icon: <FaWrench /> }, 
        { name: "Graphic Designing", href: "/services/graphic-designing", icon: <FaPencilRuler /> }, 
        { name: "QA Testing", href: "/services/qa-testing", icon: <FaCheck /> },
        { name: "Social Media Marketing & Branding", href: "/services/digital-marketing", icon: <FaBullhorn /> },
      ],
    },
    { name: "Pricing", href: "/pricing", icon: <FaTags /> },
    { name: "Blog", href: "/blog", icon: <FaBlog /> },
    { name: "Portfolio", href: "/portfolio", icon: <FaProjectDiagram /> },
    { name: "Career", href: "/career", icon: <FaBriefcase /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdowns = () => {
    setIsDropdownOpens(!isDropdownOpens);
  };
  const handleLogout = async () => {
    try {
      const res = await axios.get(`${backend_url}/api/v1/user/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        router.push("/");
        localStorage.removeItem("token");
        toast.success(res.data.message);
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || error?.message || "Failed to logout";
      toast.error(message);
    }
    setIsDropdownOpen(false);
  };

  return (
    <nav className="text-white absolute z-20 px-4 py-2 w-full text-nowrap">
      <div className="lg:pr-10 lg:pl-10 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex-shrink-0 flex justify-center gap-2 items-center">
              <Image src={Logo} alt="logo" width={48} height={50} />
              <p className="">
              <span className="text-[#FFFFFF] text-lg font-semibold">Tech</span>
              <span className="text-[#FFFFFF] text-lg font-semibold">Creator</span>
              </p>
            </div>
          </Link>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <span
                      className={`lg:px-3 px-1 py-2 md:text-sm lg:text-base rounded-md font-medium hover:bg-[#9A00FF] text-white ${
                        pathname === item.href ? "bg-[#9A00FF] text-white" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                    {isDropdownOpen && (
  <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 z-20 w-full md:w-auto">
    <div className="flex flex-col md:flex-row  justify-between p-4 gap-4 md:w-[450px] text-wrap ">
      {/* Left Column */}
      <ul className="flex flex-col gap-2  ">
        {item.dropdown.slice(0, 5).map((subItem) => (
          <li
            key={subItem.name}
            className={`px-4 py-2 ${
              pathname === subItem.href
                ? "text-[#9A00FF] font-semibold "
                : "hover:text-[#9A00FF]"
            }`}
          >
            <Link href={subItem.href} className="flex items-center gap-2">
              <span className="text-[#9A00FF]">{subItem.icon}</span> {subItem.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Right Column */}
      <ul className="flex flex-col gap-2 ">
        {item.dropdown.slice(5).map((subItem) => (
          <li
            key={subItem.name}
            className={`px-4 py-2 ${
              pathname === subItem.href
                ? "text-[#9A00FF] font-semibold"
                : "hover:text-[#9A00FF] "
            }`}
          >
            <Link href={subItem.href} className="flex items-center gap-2">
              <span className="text-[#9A00FF]">{subItem.icon}</span> {subItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}



                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`lg:px-3 px-1 py-2 md:text-sm lg:text-base rounded-md font-medium hover:bg-[#9A00FF] text-white ${
                      pathname === item.href ? "bg-[#9A00FF] text-white" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="hidden md:block relative">
            <Image
              src={personIcon}
              alt="person_image"
              width={32.11}
              height={32.11}
              className="w-[32.11px] h-[32.11px] cursor-pointer"
              onClick={toggleDropdowns}
            />
            {isDropdownOpens && (
              <div className="absolute right-0 mt-2 w-fit bg-white rounded-md shadow-lg py-2 z-20">
                {user ? (
                  <>
                    {user.role === "admin" && (
                      <Link href="/admin" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <SiGnuprivacyguard className="text-xl text-[#9A00FF]" /> Admin
                      </Link>
                    )}
                    <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <CiLogout className="text-xl text-[#9A00FF]" /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <IoMdLogIn className="text-xl text-[#9A00FF]" /> Login
                    </Link>
                    <Link href="/register" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <SiGnuprivacyguard className="text-xl text-[#9A00FF]" /> Signup
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
  <div className="lg:hidden bg-[#9A00FF] z-20 rounded-md mb-20">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item) => (
        <div key={item.name}>
          {item.dropdown ? (
            // Dropdown menu for Services
            <div className="flex flex-col">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 ${
                  pathname === item.href ? "bg-[#0c080f] text-white" : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  {item.icon} {item.name}
                </span>
                <span>{isDropdownOpen ? "-" : "+"}</span>
              </button>
              {isDropdownOpen && (
                <div className="pl-6">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-600"
                    >
                      {subItem.icon} {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Regular menu items
            <Link
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 ${
                pathname === item.href ? "bg-[#0c080f] text-white" : ""
              }`}
            >
              {item.icon} {item.name}
            </Link>
          )}
        </div>
      ))}
      {user ? (
        <>
          {user.role === "admin" && (
            <Link
              href="/admin"
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center gap-2 px-4 py-2"
            >
              <SiGnuprivacyguard className="text-xl text-white" /> Admin
            </Link>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 text-left rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            <CiLogout className="text-white" /> Logout
          </button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 w-full px-3 py-2 text-left rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            <IoMdLogIn className="text-white" /> Login
          </Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 w-full px-3 py-2 text-left rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            <SiGnuprivacyguard className="text-white" /> Signup
          </Link>
        </>
      )}
    </div>
  </div>
)}

    </nav>
  );
};

export default Header;
