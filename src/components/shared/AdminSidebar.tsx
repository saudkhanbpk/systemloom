"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; // Use next/navigation for Next.js 13+

// Importing icons from Heroicons v2
import { PlusIcon, DocumentIcon, UserIcon, InboxIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaPlus, FaRegFileAlt, FaUsers, FaPhoneAlt } from 'react-icons/fa';

const AdminSidebar: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname

  // Define the links with their corresponding icons
  // const links = [
  //   { href: "/admin/create-blog", label: "Create Blog", icon: <PlusIcon className="w-6 h-6" /> },
  //   { href: "/admin/create-job", label: "Create Job", icon: <PlusIcon className="w-6 h-6" /> },
  //   { href: "/admin/all-blogs", label: "All Blogs", icon: <DocumentIcon className="w-6 h-6" /> },
  //   { href: "/admin/all-jobs", label: "All Jobs", icon: <DocumentIcon className="w-6 h-6" /> },
  //   { href: "/admin/applicants", label: "Applicants", icon: <UserIcon className="w-6 h-6" /> },
  //   { href: "/admin/contact", label: "Contact", icon: <PhoneIcon className="w-6 h-6" /> },
  // ];
  const links = [
    { href: "/admin/create-blog", label: "Create Blog", icon: <FaPlus className="w-6 h-6" /> },
    { href: "/admin/all-projects", label: "All Projects", icon: <FaRegFileAlt className="w-6 h-6" /> },
    { href: "/admin/create-job", label: "Create Job", icon: <FaPlus className="w-6 h-6" /> },
    { href: "/admin/all-blogs", label: "All Blogs", icon: <FaRegFileAlt className="w-6 h-6" /> },
    { href: "/admin/all-jobs", label: "All Jobs", icon: <FaRegFileAlt className="w-6 h-6" /> },
    { href: "/admin/applicants", label: "Applicants", icon: <FaUsers className="w-6 h-6" /> },
    { href: "/admin/contact", label: "Contact", icon: <FaPhoneAlt className="w-6 h-6" /> },
  ];

  return (
    <div className='w-30 sm:w-[12vw] min-h-screen border-r bg-black text-white'>
      <div className='pt-6 flex flex-col gap-4'>
        {links.map(link => (
          <Link key={link.label} href={link.href} passHref>
            <div 
              className={`flex gap-2 items-center border sm:ml-4 p-2 
                ${pathname === link.href ? 'bg-gray-600 text-white' : ''} 
              `}
            >
              <div className="block ">{link.icon}</div> {/* Show icon on small screens */}
              <p className='hidden md:block'>{link.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default React.memo(AdminSidebar);
