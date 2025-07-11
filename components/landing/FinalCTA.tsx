'use client';

import React from 'react';
import CTAButton from '@/components/ui/CTAButton';

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-linkedin/5 to-blue-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-slate-800 leading-tight">
            O LinkedFlow já gerou mais de <span className="text-linkedin">245.651</span> postagens para <span className="text-linkedin">16.653</span> profissionais que transformaram seu LinkedIn em uma vitrine de autoridade.
          </h2>
          
          <p className="text-slate-600 text-lg">
            Criadores, agências e ghostwriters confiam na nossa IA todos os dias.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/register" size="lg">
              Comece Gratuitamente
            </CTAButton>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            {/* Estatísticas */}
            <div className="text-center">
              <p className="font-urbanist font-bold text-2xl md:text-3xl text-linkedin">16.653+</p>
              <p className="text-slate-600 text-sm">Usuários ativos</p>
            </div>
            <div className="text-center">
              <p className="font-urbanist font-bold text-2xl md:text-3xl text-linkedin">245.651+</p>
              <p className="text-slate-600 text-sm">Posts gerados</p>
            </div>
            <div className="text-center">
              <p className="font-urbanist font-bold text-2xl md:text-3xl text-linkedin">98%</p>
              <p className="text-slate-600 text-sm">Taxa de satisfação</p>
            </div>
            <div className="text-center">
              <p className="font-urbanist font-bold text-2xl md:text-3xl text-linkedin">3.2x</p>
              <p className="text-slate-600 text-sm">Aumento médio em engajamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
