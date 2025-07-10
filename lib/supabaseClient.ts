import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Função para obter a URL base atual (funciona em cliente e servidor)
export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  // Fallback para produção se estiver no servidor
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://linked-flow.vercel.app'
}

// Função para login com Google que funciona em produção
export const signInWithGoogle = async () => {
  const baseUrl = getBaseUrl()
  console.log('Base URL para redirecionamento:', baseUrl)
  
  // Armazenar a URL base para uso posterior no callback
  if (typeof window !== 'undefined') {
    localStorage.setItem('authRedirectOrigin', baseUrl)
  }
  
  return supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${baseUrl}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })
}

// Função para login com LinkedIn que funciona em produção
export const signInWithLinkedIn = async () => {
  const baseUrl = getBaseUrl()
  console.log('Base URL para redirecionamento:', baseUrl)
  
  // Armazenar a URL base para uso posterior no callback
  if (typeof window !== 'undefined') {
    localStorage.setItem('authRedirectOrigin', baseUrl)
  }
  
  return supabase.auth.signInWithOAuth({
    provider: 'linkedin_oidc',
    options: {
      redirectTo: `${baseUrl}/auth/callback`,
      scopes: 'openid profile email',
    },
  })
}