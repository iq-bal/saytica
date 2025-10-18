"use client";

import { useAuth } from "@/lib/auth-context";
import AuthContainer from "./AuthContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({ 
  children, 
  requireAdmin = true 
}: ProtectedRouteProps) {
  const { user, loading, isAdmin } = useAuth();

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
            <p className="text-sm text-muted-foreground">Checking authentication...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!user) {
    return <AuthContainer />;
  }

  // Show unauthorized message if user is not admin (when admin is required)
  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
            <p className="text-sm text-muted-foreground mb-4">
              You don&apos;t have permission to access this admin area.
            </p>
            <p className="text-xs text-muted-foreground">
              Contact your administrator if you believe this is an error.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show protected content if authenticated and authorized
  return (
    <>
      <div className="flex items-center gap-2 mb-4 p-2 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm">
        <Shield className="h-4 w-4" />
        Authenticated as: {user.email}
      </div>
      {children}
    </>
  );
}