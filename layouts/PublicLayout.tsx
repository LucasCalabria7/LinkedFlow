'use client';

import { Building2, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">LinkedFlow</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <Link href="/login">
                <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 mt-2">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="justify-start w-full text-slate-600 hover:text-slate-900">
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="justify-start w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600">
            <p>&copy; 2025 LinkedFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}