"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  LogOut,
  Menu,
  X,
  HelpCircle,
  Mail,
  Users,
  MessageSquare,
  Database,
  Globe,
  Settings
} from "lucide-react";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { signOut, user } = useAuth();

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Data Management",
      href: "/admin/data",
      icon: Database,
    },
    {
      name: "Works Management",
      href: "/admin/works",
      icon: Briefcase,
    },
    {
      name: "Client Management",
      href: "/admin/clients",
      icon: Globe,
    },
    {
      name: "Services Management",
      href: "/admin/services",
      icon: Settings,
    },
    {
      name: "Testimonials",
      href: "/admin/testimonials",
      icon: MessageSquare,
    },
    {
      name: "Job Postings",
      href: "/admin/jobs",
      icon: Users,
    },
    {
      name: "Blog Management",
      href: "/admin/blog",
      icon: FileText,
    },
    {
      name: "FAQ Management",
      href: "/admin/faqs",
      icon: HelpCircle,
    },
    {
      name: "Contact Management",
      href: "/admin/contacts",
      icon: Mail,
    },
  ];

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-30"
      >
        <Menu className="h-4 w-4" />
      </Button>
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:sticky lg:z-auto lg:flex-shrink-0
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Admin Panel
          </h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* User info */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Logged in as:
          </p>
          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
            {user?.email}
          </p>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto min-h-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 flex-shrink-0 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <Link
            href="/"
            className="block text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-center"
          >
            ← Back to Site
          </Link>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="w-full flex items-center space-x-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </>
  );
}