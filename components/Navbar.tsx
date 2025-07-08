'use client';

import { useState } from 'react';
import { Building2, Menu, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { supabase } from '@/lib/supabaseClient';

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="bg-white border-b border-slate-200 fixed w-full top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={onMenuClick}
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center ml-4 lg:ml-0">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-slate-900">LinkedFlow</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-blue-100 text-blue-600">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-slate-600 hover:text-slate-900"
              onClick={handleLogout}
              disabled={loading}
            >
              <LogOut className="h-4 w-4 mr-2" />
              {loading ? 'Saindo...' : 'Sair'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}