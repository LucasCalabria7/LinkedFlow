'use client';

import React from 'react';
import { Brain, Target, Sliders, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  accentColor?: string;
  index: number;
}

const BenefitCard = ({ icon, title, description, imageSrc, accentColor = "linkedin", index }: BenefitCardProps) => {
  // Array de padrões de fundo para cada card
  const patterns = [
    "radial-gradient(circle at 10% 20%, rgba(0, 119, 181, 0.05) 0%, transparent 50%)",
    "linear-gradient(135deg, rgba(0, 119, 181, 0.03) 0%, rgba(37, 99, 235, 0.03) 100%)",
    "repeating-linear-gradient(45deg, rgba(0, 119, 181, 0.01) 0px, rgba(0, 119, 181, 0.01) 2px, transparent 2px, transparent 4px)",
    "linear-gradient(90deg, rgba(0, 119, 181, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%)"
  ];
  
  // Cores de destaque para cada card
  const accentColors = {
    blue: "from-blue-500/20 to-indigo-500/20",
    cyan: "from-blue-500/20 to-cyan-500/20",
    purple: "from-blue-500/20 to-purple-500/20",
    emerald: "from-blue-500/20 to-emerald-500/20"
  };
  
  // Posições dos elementos decorativos para cada card
  const decorPositions = [
    "top-0 right-0 rotate-12",
    "bottom-0 right-0 -rotate-12",
    "top-0 left-0 -rotate-12",
    "bottom-0 left-0 rotate-12"
  ];
  
  return (
    <Card className="border border-slate-200 bg-white hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 group overflow-hidden">
      <CardContent 
        className="p-6 space-y-5 relative" 
        style={{ background: patterns[index % patterns.length] }}
      >
        {/* Decorative background element */}
        <div className={`absolute w-32 h-32 opacity-5 transform translate-x-8 -translate-y-8 ${decorPositions[index % decorPositions.length]}`}>
          <div className="w-full h-full bg-linkedin rounded-3xl"></div>
        </div>
        
        {/* Unique visual element for each card */}
        <div className="flex justify-between items-start">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
            <div>
              {icon}
            </div>
          </div>
          
          {/* Número do card (sutil) */}
          <div className="text-3xl font-urbanist font-bold text-slate-100">
            {index + 1}
          </div>
        </div>
        
        <h3 className="font-urbanist font-semibold text-xl text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
        
        {/* Decorative line */}
        <div className="absolute bottom-6 left-6 right-6 h-0.5 bg-gradient-to-r from-linkedin/5 via-linkedin/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </CardContent>
    </Card>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 animate-pulse"></div>
          <Brain size={28} strokeWidth={1.5} className="text-blue-600 relative z-10" />
        </div>
      ),
      title: "Pensado como você pensa",
      description: "Nossa IA aprende seu estilo de comunicação e adapta o conteúdo para soar autenticamente como você.",
      imageSrc: "/assets/benefit-brain.png"
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
          <Target size={28} strokeWidth={1.5} className="text-cyan-600 relative z-10" />
        </div>
      ),
      title: "Foco em posicionamento",
      description: "Crie conteúdo estratégico que reforça sua autoridade e expertise no seu nicho profissional.",
      imageSrc: "/assets/benefit-target.png"
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <Sliders size={28} strokeWidth={1.5} className="text-purple-600 relative z-10" />
        </div>
      ),
      title: "Você no controle",
      description: "Ajuste tom, estilo e formato para criar exatamente o tipo de conteúdo que ressoa com sua audiência.",
      imageSrc: "/assets/benefit-sliders.png"
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 animate-pulse"></div>
          <BarChart3 size={28} strokeWidth={1.5} className="text-emerald-600 relative z-10" />
        </div>
      ),
      title: "Formatos prontos pra engajar",
      description: "Acesse templates otimizados para maximizar visualizações, comentários e compartilhamentos.",
      imageSrc: "/assets/benefit-chart.png"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 rounded-full bg-linkedin opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full bg-linkedin opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-slate-800 mb-4">
            Conteúdo com estratégia, <span className="text-transparent bg-clip-text bg-gradient-to-r from-linkedin to-blue-500">sem parecer forçado.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            O LinkedFlow combina IA avançada com estratégias comprovadas para criar conteúdo que engaja e converte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              imageSrc={benefit.imageSrc}
              accentColor={index === 0 ? "blue" : index === 1 ? "cyan" : index === 2 ? "purple" : "emerald"}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
