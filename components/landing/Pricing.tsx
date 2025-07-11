'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import CTAButton from '@/components/ui/CTAButton';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

const PricingPlan = ({ name, price, description, features, isPopular = false, ctaText, ctaLink }: PricingPlanProps) => {
  return (
    <Card className={`border ${isPopular ? 'border-linkedin shadow-md' : 'border-slate-200'} h-full flex flex-col transition-all duration-200 hover:shadow-lg hover:translate-y-[-2px]`}>
      {isPopular && (
        <div className="bg-linkedin text-white text-center py-1.5 text-sm font-medium">
          Mais popular
        </div>
      )}
      
      <CardHeader className={`${isPopular ? 'pt-4' : 'pt-6'}`}>
        <CardTitle className="font-urbanist text-xl">{name}</CardTitle>
        <div className="mt-2">
          <span className="font-urbanist font-bold text-3xl">{price}</span>
          {price !== 'Gratuito' && <span className="text-slate-500 ml-1">/mês</span>}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`mt-1 mr-2 h-4 w-4 rounded-full flex items-center justify-center ${feature.included ? 'bg-linkedin/10 text-linkedin' : 'bg-slate-100 text-slate-400'}`}>
                <Check size={12} />
              </div>
              <span className={feature.included ? 'text-slate-700' : 'text-slate-400 line-through'}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-4">
        <CTAButton 
          href={ctaLink} 
          variant={isPopular ? 'primary' : 'outline'} 
          fullWidth
        >
          {ctaText}
        </CTAButton>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "Gratuito",
      description: "Perfeito para experimentar a plataforma",
      features: [
        { text: "3 posts por mês", included: true },
        { text: "Acesso a ideias básicas", included: true },
        { text: "Geração de conteúdo simples", included: true },
        { text: "Personalização limitada", included: true },
        { text: "Análise de desempenho", included: false },
        { text: "Agendamento de posts", included: false },
        { text: "Suporte prioritário", included: false },
      ],
      ctaText: "Comece de graça",
      ctaLink: "/register",
    },
    {
      name: "Creator",
      price: "R$49",
      description: "Para criadores de conteúdo consistentes",
      features: [
        { text: "30 posts por mês", included: true },
        { text: "Acesso a todas as ideias", included: true },
        { text: "Geração de conteúdo avançada", included: true },
        { text: "Personalização completa", included: true },
        { text: "Análise de desempenho", included: true },
        { text: "Agendamento de posts", included: true },
        { text: "Suporte prioritário", included: false },
      ],
      isPopular: true,
      ctaText: "Comece de graça",
      ctaLink: "/register?plan=creator",
    },
    {
      name: "Copywriter",
      price: "R$99",
      description: "Para agências e profissionais avançados",
      features: [
        { text: "Posts ilimitados", included: true },
        { text: "Acesso a todas as ideias", included: true },
        { text: "Geração de conteúdo avançada", included: true },
        { text: "Personalização completa", included: true },
        { text: "Análise de desempenho", included: true },
        { text: "Agendamento de posts", included: true },
        { text: "Suporte prioritário", included: true },
      ],
      ctaText: "Comece de graça",
      ctaLink: "/register?plan=copywriter",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-slate-800 mb-4">
            Planos para quem quer sair do rascunho.
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades e comece a transformar sua presença no LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
            />
          ))}
        </div>
        
        <div className="text-center mt-8 text-slate-500 text-sm">
          Todos os planos incluem 7 dias de teste gratuito. Cancele a qualquer momento.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
