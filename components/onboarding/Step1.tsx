'use client';

import { useEffect, useState } from 'react';
import { OnboardingData } from './OnboardingWizard';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { motion, Variants } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { Bot } from 'lucide-react';

interface Step1Props {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  validateStep: (isValid: boolean) => void;
}

// Animações para os elementos da página
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Animação do ícone
const iconVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    } 
  }
};

// Animação de pulso separada
const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

export default function Step1({ formData, updateFormData, validateStep }: Step1Props) {
  const [userName, setUserName] = useState<string>('');  
  
  // Obter o nome do usuário da sessão
  useEffect(() => {
    const getUserName = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          // Tentar obter o nome do user_metadata
          const firstName = session.user.user_metadata?.first_name || 
                          session.user.user_metadata?.name?.split(' ')[0] || 
                          'usuário';
          setUserName(firstName);
        }
      } catch (error) {
        console.error('Erro ao obter nome do usuário:', error);
        setUserName('usuário');
      }
    };
    
    getUserName();
  }, []);
  
  // Validar o passo (sempre válido neste caso, pois só precisa clicar no botão)
  useEffect(() => {
    validateStep(true);
  }, [validateStep]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-center px-4 py-12">
      <motion.div 
        className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
        initial="hidden"
        animate="visible"
      >
        {/* Coluna esquerda com ilustração */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
          variants={fadeIn}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-75 blur-lg"></div>
            <motion.div 
              className="relative bg-white rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-xl"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={pulseVariants}
                animate="pulse"
                className="w-full h-full flex items-center justify-center"
              >
                <Bot className="h-16 w-16 md:h-20 md:w-20 text-blue-600" />
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 text-center md:text-left space-y-2"
            variants={fadeIn}
          >
            <h2 className="text-xl md:text-2xl font-medium text-blue-900">Seu assistente pessoal</h2>
            <p className="text-blue-700 max-w-md">
              Criado para executivos e especialistas que querem se destacar no LinkedIn com conteúdo de alta qualidade.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Coluna direita com texto e botão */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left space-y-8"
          variants={fadeIn}
        >
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
              Que bom ter você aqui, <span className="text-blue-600">{userName}</span> 👋
            </h1>
            
            <div className="space-y-4 text-lg text-blue-800">
              <p>
                Eu sou o <span className="font-semibold">LinkedFlow</span>, seu assistente pessoal de conteúdo para o LinkedIn.
              </p>
              <p>
                Vou te ajudar a encontrar ideias e criar conteúdos que geram autoridade, 
                conexões e oportunidades reais.
              </p>
            </div>
          </div>
          
          <motion.div 
            className="pt-6"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <PrimaryButton 
              size="lg"
              className="text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-6 rounded-xl"
              onClick={() => {
                // Definir alguns valores padrão para o formulário para garantir que os dados sejam salvos
                updateFormData({
                  role: formData.role || 'specialist',
                  company_size: formData.company_size || 'solo',
                  goals: formData.goals?.length ? formData.goals : ['visibility', 'authority'],
                  linkedin_url: formData.linkedin_url || '',
                  industry: formData.industry || 'Tecnologia'
                });
              }}
            >
              Começar agora
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Elementos decorativos */}
      <motion.div 
        className="absolute top-10 right-10 w-24 h-24 rounded-full bg-blue-400 opacity-20 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-10 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </div>
  );
}
