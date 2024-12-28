'use client';

import { useState, useRef } from 'react';
import Script from 'next/script';
import { CheckoutSteps } from './CheckoutSteps';
import { UserFormStep } from './UserFormStep';
import { PaymentFormStep } from './PaymentFormStep';
import { SuccessStep } from './SuccessStep';
import { FooterSection } from '@/components/layout/sections/footer';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { PackageDetails } from '@/types/types';
import { PackageSummaryCard } from './PackageSummaryCard';

interface PackageLayoutProps {
  packageDetails: PackageDetails;
}

export default function PackageLayout({ packageDetails }: PackageLayoutProps) {
  const [step, setStep] = useState(1);
  const paymentSectionRef = useRef<HTMLDivElement>(null);
  const finishSectionRef = useRef<HTMLDivElement>(null);
  const scrollToSection = useScrollToSection();

  const handleNextStep = (nextStep: number, ref: React.RefObject<HTMLDivElement>) => {
    setStep(nextStep);
    scrollToSection(ref);
  };

  return (
    <>
      <Script
        src="https://ipgtest.monri.com/dist/monri.min.js"
        strategy="afterInteractive"
      />
      <div className="container mx-auto p-6 space-y-6 mt-10">
        <h1 className="text-3xl font-bold">Plaćanje</h1>
        <CheckoutSteps currentStep={step} />

        <div className={step !== 3 ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : ""}>
          {step !== 3 && <PackageSummaryCard packageDetails={packageDetails} />}

          {step === 1 && (
            <UserFormStep 
              onNextStep={() => handleNextStep(2, paymentSectionRef)} 
            />
          )}

          {step === 2 && (
            <PaymentFormStep 
              ref={paymentSectionRef}
              onSuccess={() => handleNextStep(3, finishSectionRef)}
            />
          )}

          {step === 3 && (
            <SuccessStep 
              ref={finishSectionRef}
              packageName={packageDetails.name}
            />
          )}
        </div>

        <FooterSection />
      </div>
    </>
  );
}