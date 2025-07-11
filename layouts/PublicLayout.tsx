'use client';

// Importações de componentes
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Verificar se estamos nas rotas de login ou registro
  const isAuthRoute = pathname === '/login' || pathname === '/register';

  return (
    <div className="min-h-screen bg-white">
      {!isAuthRoute && (
        <header className="border-b border-gray-100 py-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image 
                    src="/assets/logo-azul-horizontal.png" 
                    alt="LinkedFlow" 
                    width={180} 
                    height={40}
                    className="h-6 w-auto"
                  />
                </Link>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="/#pricing" 
                  className="text-gray-600 hover:text-linkedin text-sm font-medium transition-colors duration-200"
                >
                  Preços
                </Link>
                
                <Link 
                  href="/#tools" 
                  className="text-gray-600 hover:text-linkedin text-sm font-medium transition-colors duration-200"
                >
                  Ferramentas LinkedIn
                </Link>
                
                <Link 
                  href="/#affiliate" 
                  className="text-gray-600 hover:text-linkedin text-sm font-medium transition-colors duration-200"
                >
                  Afiliados 50%
                </Link>
                
                <Link 
                  href="/#blog" 
                  className="text-gray-600 hover:text-linkedin text-sm font-medium transition-colors duration-200"
                >
                  Blog
                </Link>
              </div>
              
              {/* Auth Buttons and Language */}
              <div className="hidden md:flex items-center space-x-4">
                {/* Language Selector */}
                <div className="relative inline-block text-left">
                  <button 
                    type="button" 
                    className="inline-flex items-center justify-center gap-x-1.5 rounded-md text-sm font-medium text-gray-600 hover:text-linkedin"
                  >
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1.5 text-linkedin" />
                      <span className="text-sm font-medium">Português</span>
                      <ChevronDown className="h-3.5 w-3.5 ml-1" aria-hidden="true" />
                    </div>
                  </button>
                </div>
                
                {/* Login Button */}
                <Link href="/login">
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-linkedin text-white px-4 py-1.5 rounded-md text-sm font-medium hover:from-blue-600 hover:to-linkedin-600 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Entrar
                  </Button>
                </Link>
                
                {/* Register Button */}
                <Link href="/register">
                  <Button 
                    className="bg-gradient-to-r from-linkedin to-blue-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:from-linkedin-600 hover:to-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Cadastre-se
                  </Button>
                </Link>
              </div>
              
              {/* Mobile auth buttons and menu */}
              <div className="md:hidden flex items-center">
                {/* Login Button */}
                <Link href="/login" className="mr-2">
                  <Button 
                    className="bg-gradient-to-r from-blue-500 to-linkedin text-white px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 shadow-sm"
                  >
                    Entrar
                  </Button>
                </Link>
                
                {/* Register Button */}
                <Link href="/register">
                  <Button 
                    className="bg-gradient-to-r from-linkedin to-blue-500 text-white px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 shadow-sm"
                  >
                    Cadastre-se
                  </Button>
                </Link>
                
                <div className="w-16"></div>
                
                {/* Menu button */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className="p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 animate-slideDown border-t border-gray-100 mt-4">
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/#pricing" 
                    className="text-gray-600 hover:text-linkedin text-sm font-medium px-1 py-2 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Preços
                  </Link>
                  
                  <Link 
                    href="/#tools" 
                    className="text-gray-600 hover:text-linkedin text-sm font-medium px-1 py-2 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ferramentas LinkedIn
                  </Link>
                  
                  <Link 
                    href="/#affiliate" 
                    className="text-gray-600 hover:text-linkedin text-sm font-medium px-1 py-2 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Afiliados 50%
                  </Link>
                  
                  <Link 
                    href="/#blog" 
                    className="text-gray-600 hover:text-linkedin text-sm font-medium px-1 py-2 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  
                  <div className="my-2 border-t border-gray-100"></div>
                  
                  {/* Language Selector */}
                  <div className="flex items-center px-1 py-2">
                    <Globe className="h-4 w-4 mr-2 text-linkedin" />
                    <span className="text-sm font-medium text-gray-600">Português</span>
                    <ChevronDown className="h-3.5 w-3.5 ml-1 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      )}

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}