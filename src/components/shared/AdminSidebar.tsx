"use client";
import Link from 'next/link';
import React from 'react';

// Define the assets type if you have a specific type for assets
const assets = {
  add_icon: '/path/to/add_icon.png', // Update with actual path
  order_icon: '/path/to/order_icon.png', // Update with actual path
};

const AdminSidebar: React.FC = () => {
  return (
    <div className='w-full sm:w-[18vw] min-h-screen border-r bg-white'>
      <div className='pt-6 flex flex-col gap-4'>

        <Link href="/admin/create-blog" passHref>
          <div className='flex gap-2 items-center border sm:ml-10 p-2'>
            {/* <img src={assets.add_icon} alt="Add Items" className="w-6 h-6" /> */}
            <p className='hidden md:block'>Create Blog</p>
          </div>
        </Link>

        <Link href="/admin/all-blogs" passHref>
          <div className='flex gap-2 items-center border sm:ml-10 p-2'>
            {/* <img src={assets.order_icon} alt="List Items" className="w-6 h-6" /> */}
            <p className='hidden md:block'>All Blogs</p>
          </div>
        </Link>

        <Link href="/order" passHref>
          <div className='flex gap-2 items-center border sm:ml-10 p-2'>
            {/* <img src={assets.order_icon} alt="Orders" className="w-6 h-6" /> */}
            <p className='hidden md:block'>Orders</p>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default React.memo(AdminSidebar);
