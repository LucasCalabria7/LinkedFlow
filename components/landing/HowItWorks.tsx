'use client';

import React from 'react';
import Image from 'next/image';
import { Lightbulb, PenTool, BarChart } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  isReversed?: boolean;
}

const Step = ({ number, title, description, icon, imageSrc, isReversed = false }: StepProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center mb-16 md:mb-24 relative`}>
      {/* Linha conectora entre os passos (apenas visível em desktop) */}
      {number < 3 && (
        <div className="hidden md:block absolute left-1/2 bottom-[-60px] w-0.5 h-[60px] bg-gradient-to-b from-linkedin/30 to-transparent z-0"></div>
      )}
      
      {/* Text content */}
      <div className="flex-1 space-y-6 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-linkedin to-blue-700 flex items-center justify-center text-white font-semibold shadow-md">
            {number}
          </div>
          <div className="h-12 w-12 rounded-full bg-white border border-linkedin/20 flex items-center justify-center text-linkedin shadow-sm">
            {icon}
          </div>
          <div className="h-1 flex-grow bg-gradient-to-r from-linkedin/30 to-transparent rounded-full"></div>
        </div>
        
        <h3 className="font-urbanist font-semibold text-2xl md:text-3xl text-slate-800 tracking-tight">{title}</h3>
        <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
        
        {/* Decorative dots */}
        <div className="absolute -left-4 -bottom-4 w-20 h-20 opacity-10">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-linkedin"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Image */}
      <div className="flex-1">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          {/* Overlay decorativo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-linkedin/80 to-blue-600/40 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
          
          {/* Borda decorativa */}
          <div className="absolute inset-0 border-2 border-linkedin/0 group-hover:border-linkedin/10 rounded-xl transition-all duration-300 z-20"></div>
          
          {/* Gradiente na parte inferior da imagem para melhorar legibilidade */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
          
          <img 
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          
          {/* Badge com o número */}
          <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-linkedin font-bold shadow-md z-20">
            {number}
          </div>
          
          {/* Título sobreposto na imagem (visível apenas em hover) */}
          <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <p className="text-slate-800 font-medium text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Nunca mais fique sem ideias",
      description: "Acesse um banco de ideias atualizado em tempo real com os tópicos mais relevantes do seu nicho. Inspire-se com conteúdos que já provaram seu valor no LinkedIn.",
      icon: <Lightbulb size={24} strokeWidth={1.5} className="text-blue-600" />,
      imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
    },
    {
      number: 2,
      title: "Escreva como você — ou como quiser",
      description: "Nossa IA aprende seu estilo de escrita a partir do seu perfil e histórico de posts. Você também pode escolher outros estilos de escrita para experimentar novas abordagens.",
      icon: <PenTool size={24} strokeWidth={1.5} className="text-blue-600" />,
      imageSrc: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
    },
    {
      number: 3,
      title: "Otimize, agende e recicle conteúdo",
      description: "Analise o desempenho dos seus posts, programe publicações para os melhores horários e reutilize seu conteúdo de maior sucesso com novas abordagens.",
      icon: <BarChart size={24} strokeWidth={1.5} className="text-blue-600" />,
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-linkedin/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-1 bg-linkedin/10 rounded-full text-linkedin text-sm font-medium">
              Como funciona
            </div>
          </div>
          <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-slate-800 mb-4">
            Ideias originais, posts envolventes e uma estratégia que funciona.
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Transforme sua presença no LinkedIn com um processo simples e eficiente.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              imageSrc={step.imageSrc}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
