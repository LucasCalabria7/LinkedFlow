"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, getBaseUrl } from '@/lib/supabaseClient';
import { Check, AlertCircle, Loader2 } from "lucide-react";

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Autenticando...');

  useEffect(() => {
    // Verifica se estamos em um ambiente de navegador
    if (typeof window === 'undefined') return;
    
    const processAuth = async () => {
      try {
        console.log('Processando callback de autenticação...');
        console.log('URL atual:', window.location.href);
        
        // Verificar se há hash na URL (redirecionamento direto do provedor OAuth)
        if (window.location.hash && window.location.hash.includes('access_token')) {
          console.log('Detectado hash com access_token na URL');
          
          // Se estamos em localhost mas o token foi gerado para produção
          if (window.location.origin.includes('localhost')) {
            const storedOrigin = localStorage.getItem('authRedirectOrigin');
            
            if (storedOrigin && !storedOrigin.includes('localhost')) {
              console.log('Redirecionando de localhost para produção:', storedOrigin);
              // Preservar o hash com os tokens
              const currentHash = window.location.hash;
              window.location.href = `${storedOrigin}/auth/callback${currentHash}`;
              return; // Interromper o processamento aqui
            }
          }
        }
        
        // Obter a sessão atual
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Erro na autenticação:', error.message);
          setStatus('error');
          setMessage('Falha na autenticação. Por favor, tente novamente.');
          
          setTimeout(() => {
            // Em caso de erro, redirecionar para a página de login
            const baseUrl = localStorage.getItem('authRedirectOrigin') || getBaseUrl();
            window.location.href = `${baseUrl}/login`;
          }, 1500);
          return;
        }

        if (session) {
          console.log('Autenticação bem-sucedida para:', session.user.email);
          setStatus('success');
          setMessage('Autenticação bem-sucedida! Redirecionando...');
          
          // Obter a origem correta para redirecionamento
          const storedOrigin = localStorage.getItem('authRedirectOrigin');
          const baseUrl = storedOrigin || getBaseUrl();
          
          console.log('Origem para redirecionamento:', baseUrl);
          
          setTimeout(() => {
            // Redirecionamento para o dashboard usando a origem correta
            window.location.href = `${baseUrl}/dashboard`;
          }, 1500);
        } else {
          console.error('Sessão não encontrada após autenticação');
          setStatus('error');
          setMessage('Não foi possível recuperar sua sessão. Por favor, tente novamente.');
          
          setTimeout(() => {
            // Usar a origem armazenada ou a função getBaseUrl como fallback
            const baseUrl = localStorage.getItem('authRedirectOrigin') || getBaseUrl();
            window.location.href = `${baseUrl}/login`;
          }, 1500);
        }
      } catch (err) {
        console.error('Erro no processamento:', err);
        setStatus('error');
        setMessage('Ocorreu um erro inesperado. Tente novamente.');
        
        setTimeout(() => {
          // Usar a origem armazenada ou a função getBaseUrl como fallback
          const baseUrl = localStorage.getItem('authRedirectOrigin') || getBaseUrl();
          window.location.href = `${baseUrl}/login`;
        }, 1500);
      }
    };

    // Pequeno atraso para garantir que o Supabase tenha tempo de processar o token
    const timer = setTimeout(() => {
      processAuth();
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="text-center">
          {status === 'loading' && (
            <>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                <Loader2 className="h-8 w-8 text-blue-600 dark:text-blue-500 animate-spin" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">{message}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Por favor, aguarde enquanto processamos sua autenticação.</p>
            </>
          )}
          
          {status === 'success' && (
            <>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                <Check className="h-8 w-8 text-green-600 dark:text-green-500" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">{message}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Você será redirecionado em instantes.</p>
            </>
          )}
          
          {status === 'error' && (
            <>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-500" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Erro na autenticação</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{message}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
