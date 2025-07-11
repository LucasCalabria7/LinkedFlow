'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Building2 } from 'lucide-react';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import PublicLayout from '@/layouts/PublicLayout';
import { supabase, signInWithGoogle, signInWithLinkedIn } from '@/lib/supabaseClient';
import { SocialLoginButton } from '@/components/ui/SocialLoginButton';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    setSocialLoading(null);

    // Validações básicas
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      // Registrar usuário com email e senha
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          },
        },
      });

      if (signUpError) throw signUpError;

      setSuccess('Conta criada com sucesso! Verifique seu email para confirmar o cadastro.');
      
      // Redirecionar após um breve delay
      setTimeout(() => {
        router.push('/login');
      }, 3000);
      
    } catch (err: any) {
      console.error('Erro ao registrar:', err);
      setError(err.message || 'Ocorreu um erro ao criar sua conta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGoogleLogin = async () => {
    setError('');
    setSocialLoading('google');
    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.error('Erro ao entrar com Google:', err);
      setError(err.message || 'Ocorreu um erro ao entrar com Google');
      setSocialLoading(null);
    }
  };

  const handleLinkedInLogin = async () => {
    setError('');
    setSocialLoading('linkedin');
    try {
      await signInWithLinkedIn();
    } catch (err: any) {
      console.error('Erro ao entrar com LinkedIn:', err);
      setError(err.message || 'Ocorreu um erro ao entrar com LinkedIn');
      setSocialLoading(null);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-linkedin/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-slate-100 rounded-full blur-2xl opacity-70"></div>
        
        <div className="w-full max-w-2xl relative z-10">
          <Card variant="elevated" className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden mx-auto">
            <div className="h-1.5 w-full bg-gradient-to-r from-linkedin via-blue-500 to-linkedin"></div>
            <div className="p-8">
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
              
              <CardTitle className="text-2xl font-urbanist font-bold text-center mb-2">Crie sua conta</CardTitle>
              <CardDescription className="text-center mb-8">
                Comece seu teste gratuito com LinkedFlow
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
                  <span className="bg-white px-4 text-slate-500 font-medium">Ou cadastre-se com e-mail</span>
                </div>
              </div>
                
              {error && (
                <Alert variant="error" withIcon className="mb-6">
                  <AlertTitle>Erro</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
                
              {success && (
                <Alert variant="success" withIcon className="mb-6">
                  <AlertTitle>Sucesso!</AlertTitle>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
                
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    label="Nome"
                    placeholder="João"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                    className="bg-slate-50 border-slate-200 focus:border-linkedin focus:ring-2 focus:ring-linkedin/20 rounded-lg transition-all shadow-sm"
                  />
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    label="Sobrenome"
                    placeholder="Silva"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                    className="bg-slate-50 border-slate-200 focus:border-linkedin focus:ring-2 focus:ring-linkedin/20 rounded-lg transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-6">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="E-mail"
                    placeholder="joao@empresa.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                    className="bg-slate-50 border-slate-200 focus:border-linkedin focus:ring-2 focus:ring-linkedin/20 rounded-lg transition-all shadow-sm"
                  />


                </div>

                <div className="space-y-6">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    label="Senha"
                    placeholder="Crie uma senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                    icon={showPassword ? <EyeOff size={18} className="text-slate-500" /> : <Eye size={18} className="text-slate-500" />}
                    iconPosition="right"
                    onIconClick={() => setShowPassword(!showPassword)}
                    helperText="Mínimo de 6 caracteres"
                    className="bg-slate-50 border-slate-200 focus:border-linkedin focus:ring-2 focus:ring-linkedin/20 rounded-lg transition-all shadow-sm"
                  />

                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    label="Confirmar senha"
                    placeholder="Confirme sua senha"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                    icon={showConfirmPassword ? <EyeOff size={18} className="text-slate-500" /> : <Eye size={18} className="text-slate-500" />}
                    iconPosition="right"
                    onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    error={formData.password !== formData.confirmPassword && formData.confirmPassword !== '' ? 'As senhas não coincidem' : ''}
                    className="bg-slate-50 border-slate-200 focus:border-linkedin focus:ring-2 focus:ring-linkedin/20 rounded-lg transition-all shadow-sm"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-linkedin focus:ring-linkedin border-slate-200 rounded"
                    required
                    disabled={loading}
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-slate-600 hover:text-slate-800 transition-colors">
                    Eu concordo com os{' '}
                    <Link href="#" className="text-linkedin hover:text-linkedin/80 transition-colors font-medium">
                      Termos de Serviço
                    </Link>{' '}
                    e{' '}
                    <Link href="#" className="text-linkedin hover:text-linkedin/80 transition-colors font-medium">
                      Política de Privacidade
                    </Link>
                  </label>
                </div>

                <PrimaryButton
                  type="submit"
                  fullWidth
                  isLoading={loading}
                  disabled={loading || socialLoading !== null}
                  className="mt-6 py-2.5 text-base font-medium shadow-md hover:shadow-lg"
                >
                  {loading ? 'Criando conta...' : 'Criar conta'}
                </PrimaryButton>
              </form>
              
              <p className="text-center text-sm text-slate-600 mt-6">
                Já tem uma conta?{' '}
                <Link
                  href="/login"
                  className="font-medium text-linkedin hover:text-linkedin/80 transition-colors"
                >
                  Entrar
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </PublicLayout>
  );
}