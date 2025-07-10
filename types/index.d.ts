// React types
import 'react';

declare module 'react' {
  interface FormEvent<T = Element> {
    preventDefault(): void;
    target: T;
  }
}

// Supabase Auth types
declare namespace Supabase {
  interface AuthError {
    message: string;
  }

  interface AuthResponse {
    data: {
      user?: {
        email_confirmed_at?: string;
      };
    };
    error?: AuthError;
  }
}
