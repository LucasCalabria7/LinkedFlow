'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import type { Session } from '@supabase/supabase-js';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar sessão atual
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
      
      if (!session) {
        router.push('/login');
      }
    };

    getSession();

    // Listener para mudanças na autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setLoading(false);
        
        if (event === 'SIGNED_OUT' || !session) {
          router.push('/login');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [router]);

  // Mostrar loading enquanto verifica a sessão
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-slate-600">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  // Se não estiver autenticado, não renderiza nada (redirecionamento já foi feito)
  if (!session) {
    return null;
  }

  return <>{children}</>;
}