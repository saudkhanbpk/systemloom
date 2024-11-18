import AdminLayout from '@/components/shared/AdminLayout';
import Link from 'next/link';
import React from 'react';

const Testimonial = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-4">
        <Link href="/admin/testimonials/add-testimonial">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
            Add Testimonial
          </button>
        </Link>
        <input
          type="text"
          placeholder="Search testimonials..."
          className="border-2 border-black rounded-md p-2 outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
    </AdminLayout>
  );
};

export default Testimonial;
