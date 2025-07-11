import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import Hero from '@/components/landing/Hero';
import Benefits from '@/components/landing/Benefits';
import UnlockLinkedIn from '@/components/landing/UnlockLinkedIn';
import HowItWorks from '@/components/landing/HowItWorks';
import Pricing from '@/components/landing/Pricing';
import FinalCTA from '@/components/landing/FinalCTA';
import FAQ from '@/components/landing/FAQ';
// Footer já está incluído no PublicLayout
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkedFlow | Crie conteúdo para LinkedIn com IA personalizada',
  description: 'Publique com consistência e construa autoridade no LinkedIn. Encontre ideias de postagens virais em seu nicho e reproduza qualquer estilo de escrita.',
  keywords: 'LinkedIn, IA, conteúdo, automação, posts, engajamento, ghostwriting',
};

export default function Home() {
  return (
    <PublicLayout>
      <main>
        <Hero />
        <Benefits />
        <UnlockLinkedIn />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
        <FAQ />
      </main>
    </PublicLayout>
  );
}