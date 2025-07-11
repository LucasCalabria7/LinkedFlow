'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingWizard from '@/components/onboarding/OnboardingWizard';
import PublicLayout from '@/layouts/PublicLayout';
import { supabase } from '@/lib/supabaseClient';

export default function OnboardingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Função para finalizar o onboarding e redirecionar para o dashboard
  const completeOnboarding = async (formData: any) => {
    setLoading(true);
    try {
      // Obter a sessão atual
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('Sessão não encontrada');
      }
      
      // Atualizar o perfil do usuário com os dados do onboarding
      const { error } = await supabase
        .from('profiles')
        .update({
          ...formData,
          has_completed_onboarding: true,
          updated_at: new Date().toISOString()
        })
        .eq('id', session.user.id);
      
      if (error) {
        throw error;
      }
      
      // Redirecionar para o dashboard após completar o onboarding
      router.push('/dashboard');
    } catch (error) {
      console.error('Erro ao completar onboarding:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-screen w-full">
        <OnboardingWizard onComplete={completeOnboarding} isLoading={loading} />
      </div>
    </PublicLayout>
  );
}
