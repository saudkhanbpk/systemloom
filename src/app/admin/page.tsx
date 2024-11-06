"use client";
import AllBlogs from '@/components/admin/AllBlogs';
import AdminLayout from '@/components/shared/AdminLayout';
import React from 'react';

const Admin = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col justify-center items-center min-h-screen p-6 text-center ">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the Admin Dashboard</h1>
      </div>
    </AdminLayout>
  );
};

export default Admin;
