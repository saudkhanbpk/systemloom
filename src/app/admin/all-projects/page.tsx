"use client"
import OurProjectsGrid from '@/components/admin/AllProjects'
import Header from '@/components/admin/Header'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import AdminLayout from '@/components/shared/AdminLayout'
import React, { useState } from 'react'

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  return (
    <ProtectedRoute>
    <AdminLayout>
      <div>
        <Header onSearch={setSearchTerm} buttonType="project" />
        <OurProjectsGrid searchTerm={searchTerm}  />
      </div>
    </AdminLayout>
    </ProtectedRoute>
  )
}

export default Page
