"use client";

import { AuthProvider } from "@/lib/auth-context";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminSidebar from "@/components/admin/AdminSidebar";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="flex h-screen bg-gray-100">
          <AdminSidebar />
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}