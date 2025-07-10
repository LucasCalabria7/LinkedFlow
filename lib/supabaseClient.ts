"use client"

import { createClient } from '@supabase/supabase-js'

// Verificar se estamos em ambiente navegador antes de acessar localStorage
const isBrowser = typeof window !== 'undefined'

// Obter as variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Opções para persistência da sessão
const supabaseOptions = {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: 'supabase.auth.token', // Nome padrão para compatibilidade
    storage: isBrowser ? localStorage : undefined,
    flowType: 'pkce' as const
  }
}

// Fallback para sessão local
const getLocalSession = () => {
  if (!isBrowser) return null
  
  try {
    const session = localStorage.getItem('supabase.auth.token')
    if (session) return JSON.parse(session)
    return null
  } catch (error) {
    console.error('Error getting local session:', error)
    return null
  }
}

// Salvar sessão local
export const saveLocalSession = (session: any) => {
  if (!isBrowser) return
  
  try {
    localStorage.setItem('supabase.auth.token', JSON.stringify(session))
  } catch (error) {
    console.error('Error saving local session:', error)
  }
}

// Remover sessão local
const clearLocalSession = () => {
  if (!isBrowser) return
  
  try {
    localStorage.removeItem('supabase.auth.token')
  } catch (error) {
    console.error('Error clearing local session:', error)
  }
}

// Criar cliente com configuração unificada
export const supabase = createClient(supabaseUrl, supabaseAnonKey, supabaseOptions)

// Adicionando listener para mudanças de sessão
if (isBrowser) {
  supabase.auth.onAuthStateChange((_event, session) => {
    if (session) {
      saveLocalSession(session)
    } else {
      clearLocalSession()
    }
  })
}

// Função para obter a URL base atual (funciona em cliente e servidor)
export const getBaseUrl = () => {
  if (isBrowser) {
    return window.location.origin
  }
  // Fallback para produção se estiver no servidor
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://linked-flow.vercel.app'
}

// Definindo o tipo de retorno para as funções de autenticação social
type OAuthResponse = {
  data?: any;
  error?: Error | null;
}

// Função de autenticação com Google
export const signInWithGoogle = async (): Promise<OAuthResponse> => {
  try {
    // Verificar se estamos em um ambiente de navegador
    if (!isBrowser) {
      throw new Error('Google login não está disponível neste ambiente')
    }
    
    // Armazenar a URL base para uso posterior no callback
    const baseUrl = getBaseUrl()
    console.log('Base URL para redirecionamento Google:', baseUrl)
    localStorage.setItem('authRedirectOrigin', baseUrl)
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${baseUrl}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        }
      },
    })

    return { data, error }
  } catch (error) {
    console.error('Google login error:', error)
    return { error: error instanceof Error ? error : new Error('Unknown error') }
  }
}

// Função de autenticação com LinkedIn
export const signInWithLinkedIn = async (): Promise<OAuthResponse> => {
  try {
    // Verificar se estamos em um ambiente de navegador
    if (!isBrowser) {
      throw new Error('LinkedIn login não está disponível neste ambiente')
    }
    
    // Armazenar a URL base para uso posterior no callback
    const baseUrl = getBaseUrl()
    console.log('Base URL para redirecionamento LinkedIn:', baseUrl)
    localStorage.setItem('authRedirectOrigin', baseUrl)
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'linkedin_oidc',
      options: {
        redirectTo: `${baseUrl}/auth/callback`,
        scopes: 'openid profile email',
      },
    })

    return { data, error }
  } catch (error) {
    console.error('LinkedIn login error:', error)
    return { error: error instanceof Error ? error : new Error('Unknown error') }
  }
}

// Verificar sessão com fallback
export const getSession = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession()
    if (session) return session
    
    // Se não há sessão no Supabase, tenta usar a sessão local
    const localSession = getLocalSession()
    if (localSession) return localSession

    return null
  } catch (error) {
    console.error('Get session error:', error)
    return null
  }
}