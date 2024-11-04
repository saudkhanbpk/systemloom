"use client";
import React from 'react';
import CreateBlogForm from '@/components/admin/CreateBlog'; 
import AdminLayout from '@/components/shared/AdminLayout';

const CreateBlogPage: React.FC = () => {
  return (
   <AdminLayout>
    
     
      <div>
        <CreateBlogForm /> 
      </div>
      
      
   </AdminLayout>
  );
};

export default CreateBlogPage;
