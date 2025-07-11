'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import PublicLayout from '@/layouts/PublicLayout';
import { supabase, signInWithGoogle, signInWithLinkedIn } from '@/lib/supabaseClient';
import { SocialLoginButton } from '@/components/ui/SocialLoginButton';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSocialLoading(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else if (data.user) {
        console.log('Login com senha iniciado com sucesso');
      }
    } catch (err) {
      setError('Erro inesperado. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setSocialLoading('google');
    try {
      // Usar a função específica para login com Google
      const result = await signInWithGoogle();
      
      if (result.error) {
        setError(result.error.message);
        setSocialLoading(null);
      } else {
        console.log('Login com Google iniciado com sucesso');
      }
    } catch (err) {
      setError('Erro ao conectar com o Google. Tente novamente.');
      setSocialLoading(null);
    }
  };

  const handleLinkedInLogin = async () => {
    setError('');
    setSocialLoading('linkedin');
    try {
      // Usar a função específica para login com LinkedIn
      const result = await signInWithLinkedIn();
      
      if (result.error) {
        if (result.error.message.includes('provider is not enabled')) {
          setError('Provedor LinkedIn não está habilitado. Por favor, use outro método de login.');
        } else {
          setError(result.error.message);
        }
        setSocialLoading(null);
      } else {
        console.log('Login com LinkedIn iniciado com sucesso');
      }
    } catch (err) {
      setError('Erro ao conectar com o LinkedIn. Tente novamente.');
      setSocialLoading(null);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-linkedin/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="w-full max-w-2xl relative z-10">

          <Card variant="elevated" className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden max-w-4xl mx-auto">
            <div className="h-1.5 w-full bg-gradient-to-r from-linkedin via-blue-500 to-linkedin"></div>
            <div className="p-8 pb-6">
              <div className="flex justify-center mb-6">
                <Link href="/" className="group relative">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></div>
                  <Image 
                    src="/assets/logo-simbolo-azul.png" 
                    alt="LinkedFlow" 
                    width={80} 
                    height={80} 
                    className="h-16 w-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-95" 
                  />
                </Link>
              </div>
              
              <CardTitle className="text-2xl font-urbanist font-bold text-center mb-2">Entrar</CardTitle>
              <CardDescription className="text-center mb-8">
                Entre com sua conta para acessar o LinkedFlow
              </CardDescription>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <SocialLoginButton 
                  provider="google" 
                  onClick={handleGoogleLogin}
                  disabled={loading || socialLoading !== null}
                />
                <SocialLoginButton 
                  provider="linkedin" 
                  onClick={handleLinkedInLogin}
                  disabled={loading || socialLoading !== null}
                />
              </div>
              
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-4 text-slate-500 font-medium">Ou entre com e-mail</span>
                </div>
              </div>
              
              {error && (
                <Alert variant="error" withIcon className="mb-6">
                  <AlertTitle>Erro</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="E-mail"
                    placeholder="joao@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="bg-slate-50 border-slate-200 focus:border-linkedin focus:ring-2 focus:ring-linkedin/20 rounded-lg transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    label="Senha"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    icon={showPassword ? <EyeOff size={18} className="text-slate-500" /> : <Eye size={18} className="text-slate-500" />}
                    iconPosition="right"
                    onIconClick={() => setShowPassword(!showPassword)}
                    className="bg-slate-50 border-slate-200 focus:border-linkedin focus:ring-2 focus:ring-linkedin/20 rounded-lg transition-all shadow-sm"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-linkedin focus:ring-linkedin border-slate-200 rounded"
                      disabled={loading}
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-slate-600 hover:text-slate-800 transition-colors">
                      Lembrar de mim
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-linkedin hover:text-linkedin/80 transition-colors"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>
                
                <PrimaryButton
                  type="submit"
                  fullWidth
                  isLoading={loading}
                  disabled={loading || socialLoading !== null}
                  className="mt-4 py-2.5 text-base font-medium shadow-md hover:shadow-lg"
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </PrimaryButton>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-600">
                  Não tem uma conta?{' '}
                  <Link
                    href="/register"
                    className="font-medium text-linkedin hover:text-linkedin/80 transition-colors"
                  >
                    Cadastre-se
                  </Link>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PublicLayout>
  );
}