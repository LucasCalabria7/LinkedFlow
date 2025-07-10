'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Building2, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import PublicLayout from '@/layouts/PublicLayout';
import { supabase } from '@/lib/supabaseClient';
import { SocialLoginButton } from '@/components/ui/SocialLoginButton';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            company: formData.company,
          }
        }
      });

      if (error) {
        setError(error.message);
      } else if (data.user) {
        // Se o usuário foi criado com sucesso
        if (data.user.email_confirmed_at) {
          // E-mail já confirmado, redirecionar para dashboard
          router.push('/dashboard');
        } else {
          // E-mail precisa ser confirmado
          setSuccess('Conta criada com sucesso! Verifique seu e-mail para confirmar a conta.');
        }
      }
    } catch (err) {
      setError('Erro inesperado. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleLogin = async () => {
    setError('');
    setSuccess('');
    setSocialLoading('google');
    try {
      // Armazenar a URL de origem atual na localStorage para uso posterior
      localStorage.setItem('authRedirectOrigin', window.location.origin);
      
      // Determinar a URL correta para redirecionamento
      // Isso garante que usaremos a URL de produção quando estivermos em produção
      const redirectUrl = `${window.location.origin}/auth/callback`;
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            // Forçar a URL de site para ser a mesma da origem atual
            site_url: window.location.origin
          },
        }
      });
      
      if (error) {
        setError(error.message);
        setSocialLoading(null);
      }
    } catch (err) {
      setError('Erro ao conectar com o Google. Tente novamente.');
      setSocialLoading(null);
    }
  };

  const handleLinkedInLogin = async () => {
    setError('');
    setSuccess('');
    setSocialLoading('linkedin');
    try {
      // Armazenar a URL de origem atual na localStorage para uso posterior
      localStorage.setItem('authRedirectOrigin', window.location.origin);
      
      // Determinar a URL correta para redirecionamento
      // Isso garante que usaremos a URL de produção quando estivermos em produção
      const redirectUrl = `${window.location.origin}/auth/callback`;
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'linkedin_oidc',
        options: {
          redirectTo: redirectUrl,
          scopes: 'openid profile email',
          queryParams: {
            // Forçar a URL de site para ser a mesma da origem atual
            site_url: window.location.origin
          }
        }
      });
      
      if (error) {
        if (error.message.includes('provider is not enabled')) {
          setError('Provedor LinkedIn não está habilitado. Por favor, use outro método de login.');
        } else {
          setError(error.message);
        }
        setSocialLoading(null);
      }
    } catch (err) {
      setError('Erro ao conectar com o LinkedIn. Tente novamente.');
      setSocialLoading(null);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900">Crie sua conta</h2>
            <p className="mt-2 text-slate-600">Comece seu teste gratuito com LinkedFlow</p>
          </div>

          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Cadastrar</CardTitle>
              <CardDescription className="text-center">
                Preencha suas informações para começar
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">{success}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="João"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Silva"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="joao@empresa.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Crie uma senha"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={loading}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar senha</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirme sua senha"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      disabled={loading}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                    required
                    disabled={loading}
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-slate-600">
                    Eu concordo com os{' '}
                    <Link href="#" className="text-blue-600 hover:text-blue-500">
                      Termos de Serviço
                    </Link>{' '}
                    e{' '}
                    <Link href="#" className="text-blue-600 hover:text-blue-500">
                      Política de Privacidade
                    </Link>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={loading || socialLoading !== null}
                >
                  {loading ? 'Criando conta...' : 'Criar conta'}
                </Button>
              </form>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-300"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500">Ou continue com</span>
                </div>
              </div>
              
              <div className="space-y-3">
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

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-600">
                  Já tem uma conta?{' '}
                  <Link
                    href="/login"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Entrar
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PublicLayout>
  );
}