'use client';

import { useState } from 'react';
import { LayoutDashboard, Settings, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Sidebar overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50" 
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-16">
          {/* Mobile close button */}
          <div className="lg:hidden flex justify-end p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive ? 'text-blue-500' : 'text-slate-400 group-hover:text-slate-500'
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}