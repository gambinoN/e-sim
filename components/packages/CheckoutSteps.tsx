import { cn } from '@/lib/utils';

interface CheckoutStepsProps {
  currentStep: number;
}

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const steps = [
    { number: 1, label: 'Korisnički podaci' },
    { number: 2, label: 'Plaćanje' },
    { number: 3, label: 'Podaci o narudžbi' },
  ];

  return (
    <div className="space-y-4">
      <div className="relative w-full bg-gray-200 rounded-full h-2">
        <div
          className="absolute bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        />
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        {steps.map((step) => (
          <span
            key={step.number}
            className={cn(
              'transition-colors duration-200',
              currentStep >= step.number && 'text-blue-600 font-medium'
            )}
          >
            {step.label}
          </span>
        ))}
      </div>
    </div>
  );
}