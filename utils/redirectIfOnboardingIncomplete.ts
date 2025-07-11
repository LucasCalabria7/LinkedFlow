'use client';

import { supabase } from '@/lib/supabaseClient';
import { redirect } from 'next/navigation';

/**
 * Utilitário para verificar se o usuário completou o onboarding
 * Pode ser usado em layouts ou páginas protegidas para garantir que o usuário
 * tenha completado o onboarding antes de acessar o conteúdo
 */
export async function redirectIfOnboardingIncomplete() {
  try {
    // Verificar se há uma sessão ativa
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      // Se não há sessão, redirecionar para login
      return redirect('/login');
    }
    
    // Verificar se o usuário completou o onboarding
    const { data, error } = await supabase
      .from('profiles')
      .select('has_completed_onboarding')
      .eq('id', session.user.id)
      .single();
    
    if (error) {
      console.error('Erro ao verificar status de onboarding:', error);
      // Em caso de erro, assumir que não completou e redirecionar
      return redirect('/onboarding');
    }
    
    // Se o usuário não completou o onboarding, redirecionar
    if (data?.has_completed_onboarding !== true) {
      return redirect('/onboarding');
    }
    
    // Se chegou aqui, o usuário completou o onboarding e pode acessar a página
    return null;
  } catch (error) {
    console.error('Erro ao verificar status de onboarding:', error);
    // Em caso de erro, redirecionar para login
    return redirect('/login');
  }
}
