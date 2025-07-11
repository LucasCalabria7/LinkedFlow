'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-linkedin/30 transition-all duration-300">
      <button
        className={`w-full flex justify-between items-center p-5 text-left focus:outline-none ${isOpen ? 'bg-gradient-to-r from-linkedin/5 to-blue-50' : 'bg-white'}`}
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="font-urbanist font-semibold text-lg text-slate-800">{question}</h3>
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${isOpen ? 'bg-linkedin text-white' : 'bg-slate-100 text-linkedin'} transition-all duration-300`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 border-t border-slate-100">
              <p className="text-slate-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "Como funciona o gerador?",
      answer: "O LinkedFlow utiliza inteligência artificial avançada para analisar seu perfil do LinkedIn, entender seu estilo de comunicação e gerar conteúdo personalizado que ressoa com sua audiência. Nossa tecnologia combina análise de dados, processamento de linguagem natural e aprendizado de máquina para criar posts que parecem escritos por você."
    },
    {
      question: "Qual a diferença com ChatGPT?",
      answer: "Diferente do ChatGPT, o LinkedFlow é especializado exclusivamente em conteúdo para LinkedIn. Nossa plataforma foi treinada com milhares de posts de sucesso, entende as particularidades da plataforma, e oferece recursos específicos como análise de desempenho, agendamento e recomendações estratégicas para aumentar seu alcance e engajamento no LinkedIn."
    },
    {
      question: "Dá pra viralizar?",
      answer: "Embora não possamos garantir que cada post viralize (ninguém pode!), o LinkedFlow aumenta significativamente suas chances. Nossa plataforma analisa constantemente tendências e padrões de engajamento no LinkedIn, incorporando essas insights nas sugestões de conteúdo. Muitos de nossos usuários relatam aumento expressivo em visualizações, comentários e conexões após começarem a usar nossa ferramenta."
    },
    {
      question: "O LinkedIn permite IA?",
      answer: "Sim, o LinkedIn não proíbe o uso de ferramentas de IA para auxiliar na criação de conteúdo. No entanto, recomendamos sempre revisar e personalizar o conteúdo gerado para garantir que ele reflita suas ideias e experiências genuínas. O LinkedFlow foi projetado para ser uma ferramenta de assistência, não para substituir completamente sua voz autêntica."
    },
    {
      question: "Como cancelar?",
      answer: "Você pode cancelar sua assinatura a qualquer momento diretamente na sua conta, na seção 'Assinaturas'. O cancelamento é imediato e você continuará tendo acesso aos recursos do plano até o final do período pago. Não cobramos taxas de cancelamento e não fazemos renovações automáticas após o cancelamento."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-linkedin opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-linkedin opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-slate-800 mb-4">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-linkedin to-blue-500">Frequentes</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre o LinkedFlow e como ele pode transformar sua presença no LinkedIn.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
