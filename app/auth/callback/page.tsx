'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processando autenticação...');

  useEffect(() => {
    const processAuth = async () => {
      try {
        // Verificar se há hash na URL
        const hashParams = window.location.hash;
        if (hashParams) {
          console.log('Hash detectado na URL');
        }

        // Verificar a sessão atual
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Erro ao obter sessão:', error.message);
          setStatus('error');
          setMessage('Erro ao processar autenticação. Tente novamente.');
          return;
        }
        
        if (data.session) {
          console.log('Sessão válida encontrada');
          setStatus('success');
          setMessage('Autenticação bem-sucedida! Redirecionando...');
          
          // Usar setTimeout para garantir que o usuário veja a mensagem de sucesso
          setTimeout(() => {
            // Usar router.push para navegação no lado do cliente
            router.push('/dashboard');
          }, 1500);
        } else {
          console.log('Sessão não encontrada');
          setStatus('error');
          setMessage('Não foi possível autenticar. Tente novamente.');
          
          setTimeout(() => {
            router.push('/login');
          }, 1500);
        }
      } catch (err) {
        console.error('Erro no processamento:', err);
        setStatus('error');
        setMessage('Ocorreu um erro inesperado. Tente novamente.');
        
        setTimeout(() => {
          router.push('/login');
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
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        {status === 'loading' && (
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
        )}
        
        {status === 'success' && (
          <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
        
        {status === 'error' && (
          <div className="h-12 w-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )}
        
        <h2 className={`text-xl font-semibold mb-2 ${status === 'error' ? 'text-red-600' : status === 'success' ? 'text-green-600' : 'text-blue-600'}`}>
          {status === 'loading' ? 'Autenticando...' : 
           status === 'success' ? 'Autenticado com sucesso!' : 
           'Erro na autenticação'}
        </h2>
        
        <p className="text-slate-600">{message}</p>
      </div>
    </div>
  );
}
