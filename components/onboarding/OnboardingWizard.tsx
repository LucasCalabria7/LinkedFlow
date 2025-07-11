'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Step1 from '@/components/onboarding/Step1';

// Tipos para os dados do onboarding
export interface OnboardingData {
  role?: string;
  company_size?: string;
  goals?: string[];
  linkedin_url?: string;
  industry?: string;
  custom_fields?: Record<string, any>;
}

interface OnboardingWizardProps {
  onComplete: (data: OnboardingData) => Promise<void>;
  isLoading: boolean;
}

export default function OnboardingWizard({ onComplete, isLoading }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>({
    goals: []
  });
  const [isStepValid, setIsStepValid] = useState(false);

  // Total de passos no wizard
  const totalSteps = 1; // Aumentar conforme novos steps forem adicionados

  // Atualizar os dados do formulário
  const updateFormData = (data: Partial<OnboardingData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  // Validar o passo atual
  const validateStep = (isValid: boolean) => {
    setIsStepValid(isValid);
  };

  // Avançar para o próximo passo
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setIsStepValid(false);
    } else {
      // Finalizar o onboarding
      onComplete(formData);
    }
  };

  // Voltar para o passo anterior
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full">
      {/* Indicador de progresso apenas para passos após o primeiro */}
      {currentStep > 1 && (
        <div className="mb-8 px-4">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900">Configuração da sua conta</h2>
            <div className="flex items-center">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      i + 1 === currentStep
                        ? 'bg-blue-600 text-white shadow-md'
                        : i + 1 < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {i + 1 < currentStep ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <span className="font-medium">{i + 1}</span>
                    )}
                  </div>
                  {i < totalSteps - 1 && (
                    <div
                      className={`w-16 h-1 ${
                        i + 1 < currentStep ? 'bg-green-500' : 'bg-blue-100'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo do passo atual */}
      <div className="w-full">
        {currentStep === 1 && (
          <Step1
            formData={formData}
            updateFormData={updateFormData}
            validateStep={validateStep}
          />
        )}
        {/* Adicionar novos steps aqui conforme necessário */}
      </div>

      {/* Botões de navegação (apenas para passos após o primeiro) */}
      {currentStep > 1 && (
        <div className="mt-8 flex justify-between max-w-3xl mx-auto px-4">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={isLoading}
            className="px-8 py-6 text-lg font-medium rounded-xl border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            Voltar
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            disabled={!isStepValid || isLoading}
            className="px-8 py-6 text-lg font-medium rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Processando...
              </>
            ) : (
              'Continuar'
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
