'use client';

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import CTAButton from '@/components/ui/CTAButton';

const UnlockLinkedIn = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-linkedin opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-linkedin opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6">
            <Badge variant="linkedin" className="mb-2">Diferente de qualquer IA</Badge>
            
            <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-slate-800 leading-tight">
              Desbloqueie sua presença no LinkedIn com inteligência <span className="text-transparent bg-clip-text bg-gradient-to-r from-linkedin to-blue-500">(de verdade).</span>
            </h2>
            
            <p className="text-slate-600 text-lg">
              Chega de conteúdo genérico que parece escrito por robô. O LinkedFlow entende seu estilo, sua voz e seu posicionamento para criar conteúdo que realmente soa como você.
            </p>
            
            <ul className="space-y-3">
              {[
                "Conteúdo 100% personalizado para seu perfil e nicho",
                "Ideias alinhadas com tendências atuais do LinkedIn",
                "Adaptação ao seu estilo de comunicação",
                "Estratégia baseada em dados de engajamento"
              ].map((item, index) => (
                <li key={index} className="flex items-center py-1">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-linkedin/20 to-blue-300/20 flex items-center justify-center text-linkedin mr-3 shadow-sm">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-6">
              <CTAButton href="/register" size="lg" className="shadow-lg shadow-linkedin/20">
                Experimente gratuitamente
              </CTAButton>
            </div>
          </div>
          
          {/* Right side - Image/Illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] md:h-[500px] group">
              {/* Animated glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-linkedin rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative bg-white rounded-2xl h-full w-full overflow-hidden shadow-xl border border-slate-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-linkedin/5 to-transparent"></div>
                
                <Image 
                  src="/images/unlock-linkedin-new.svg" 
                  alt="Desbloqueie sua presença no LinkedIn" 
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                
                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 shadow-lg border border-slate-200 transform rotate-3 transition-all duration-500 group-hover:translate-y-1 group-hover:rotate-0">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-linkedin/10 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="#0077B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-slate-800">Perfil otimizado</p>
                  </div>
                </div>
                
                {/* Floating analytics */}
                <div className="absolute bottom-6 left-6 bg-white rounded-lg p-3 shadow-lg border border-slate-200 transform -rotate-2 transition-all duration-500 group-hover:translate-y-1 group-hover:rotate-0">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4V12M12 8H4" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-xs font-medium text-slate-800">237% mais conexões</p>
                      </div>
                      <div className="h-1 w-full bg-slate-100 rounded-full mt-1">
                        <div className="h-1 bg-linkedin rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockLinkedIn;
