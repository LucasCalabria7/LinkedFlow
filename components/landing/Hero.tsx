'use client';

import React from 'react';
import CTAButton from '@/components/ui/CTAButton';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-linkedin opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-linkedin opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="font-urbanist font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-800">
              Publique com consistência.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-linkedin to-blue-500">Construa autoridade no LinkedIn.</span>
            </h1>
            
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              100% personalizado para o seu perfil do LinkedIn. Encontre ideias de postagens virais em seu nicho. Reproduza qualquer estilo de escrita.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <CTAButton href="/register" size="lg">
                Comece Gratuitamente
              </CTAButton>
              <CTAButton href="#como-funciona" variant="outline" size="lg">
                Saiba mais
              </CTAButton>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white flex items-center justify-center text-xs font-medium text-linkedin">LF</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white flex items-center justify-center text-xs font-medium text-linkedin">MP</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white flex items-center justify-center text-xs font-medium text-linkedin">JD</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-500">+</div>
              </div>
              <p className="text-slate-500 text-sm">
                <span className="font-medium text-slate-700">+16.000</span> criadores de conteúdo no LinkedIn
              </p>
            </div>
            
            {/* Check marks */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-linkedin/10 flex items-center justify-center text-linkedin">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-700 font-medium text-sm">100% PERSONALIZADO PARA SEU PERFIL</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-linkedin/10 flex items-center justify-center text-linkedin">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-700 font-medium text-sm">IDEIAS DE POSTS VIRAIS NO SEU NICHO</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-linkedin/10 flex items-center justify-center text-linkedin">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-slate-700 font-medium text-sm">REPRODUZA QUALQUER ESTILO DE ESCRITA</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Image/Illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] md:h-[500px] transition-all duration-700 hover:scale-[1.02] group">
              {/* Animated glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-linkedin to-blue-400 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              
              {/* Main container */}
              <div className="relative bg-white rounded-2xl h-full w-full overflow-hidden shadow-xl border border-slate-200/50">
                {/* Dashboard visualization */}
                <Image 
                  src="/images/hero-illustration-new.svg" 
                  alt="LinkedFlow dashboard" 
                  width={800} 
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
                
                {/* Floating notification */}
                <div className="absolute top-8 right-8 bg-white rounded-lg p-3 shadow-lg border border-slate-200 transform -rotate-3 transition-all duration-500 group-hover:translate-y-1 group-hover:rotate-0">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">Post agendado</p>
                      <p className="text-xs text-slate-500">Engajamento previsto: Alto</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating analytics */}
                <div className="absolute bottom-8 left-8 bg-white rounded-lg p-3 shadow-lg border border-slate-200 transform rotate-2 transition-all duration-500 group-hover:translate-y-1 group-hover:rotate-0">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-linkedin/10 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5L4 5.5L6 7.5L11 2.5" stroke="#0077B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-800">+27% engajamento</p>
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

export default Hero;
