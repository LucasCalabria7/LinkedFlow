'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, getSession } from '@/lib/supabaseClient';
import type { Session } from '@supabase/supabase-js';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    // Verificar sessão atual usando a função aprimorada com fallback
    const checkSession = async () => {
      const session = await getSession();
      setSession(session);
      
      if (!session) {
        setLoading(false);
        router.push('/login');
        return;
      }
      
      // Verificar se o usuário completou o onboarding
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('has_completed_onboarding')
          .eq('id', session.user.id)
          .single();
        
        if (error) throw error;
        
        setHasCompletedOnboarding(data?.has_completed_onboarding || false);
        
        // Se não completou o onboarding, redirecionar
        if (data?.has_completed_onboarding === false && !window.location.pathname.includes('/onboarding')) {
          router.push('/onboarding');
        }
      } catch (error) {
        console.error('Erro ao verificar status de onboarding:', error);
        // Assumir que não completou o onboarding em caso de erro
        setHasCompletedOnboarding(false);
        if (!window.location.pathname.includes('/onboarding')) {
          router.push('/onboarding');
        }
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Listener para mudanças na autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        
        if (event === 'SIGNED_OUT' || !session) {
          setLoading(false);
          router.push('/login');
          return;
        }
        
        // Verificar status de onboarding quando a autenticação muda
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('has_completed_onboarding')
            .eq('id', session.user.id)
            .single();
          
          if (error) throw error;
          
          setHasCompletedOnboarding(data?.has_completed_onboarding || false);
          
          // Se não completou o onboarding, redirecionar
          if (data?.has_completed_onboarding === false && !window.location.pathname.includes('/onboarding')) {
            router.push('/onboarding');
          }
        } catch (error) {
          console.error('Erro ao verificar status de onboarding:', error);
          // Assumir que não completou o onboarding em caso de erro
          setHasCompletedOnboarding(false);
          if (!window.location.pathname.includes('/onboarding')) {
            router.push('/onboarding');
          }
        } finally {
          setLoading(false);
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

  // Se não estiver autenticado ou ainda está carregando, não renderiza nada
  if (!session || loading) {
    return null;
  }
  
  // Se o usuário está autenticado mas não completou o onboarding e não está na página de onboarding
  if (hasCompletedOnboarding === false && !window.location.pathname.includes('/onboarding')) {
    return null; // Não renderiza nada, o redirecionamento já foi feito
  }

  return <>{children}</>;
}