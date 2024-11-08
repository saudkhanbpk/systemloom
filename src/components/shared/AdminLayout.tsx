// app/admin/AdminLayout.tsx

import React, { useMemo } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
// import AdminHeader from './AdminHeader';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  // Memoize AdminSidebar to prevent re-renders
  const memoizedSidebar = useMemo(() => <AdminSidebar />, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        {memoizedSidebar} {/* Sidebar will not re-render */}
        <main className="flex-1 p-4 w-100 overflow-auto">
          {children} {/* Only this part will change on page navigation */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
