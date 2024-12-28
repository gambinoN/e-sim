'use client';

import { forwardRef, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PaymentFormStepProps {
  onSuccess: () => void;
}

export const PaymentFormStep = forwardRef<HTMLDivElement, PaymentFormStepProps>(
  ({ onSuccess }, ref) => {
    const [isMonriLoaded, setIsMonriLoaded] = useState(false);

    useEffect(() => {
      const checkMonriLoaded = setInterval(() => {
          setIsMonriLoaded(true);
          clearInterval(checkMonriLoaded);
      }, 100);

      return () => clearInterval(checkMonriLoaded);
    }, []);

    const handlePayment = async () => {
      try {
        // Add your payment processing logic here
        // For example:
        // const result = await processPayment();
        // if (result.success) {
        onSuccess();
        // }
      } catch (error) {
      }
    };

    if (!isMonriLoaded) {
      return (
        <Card ref={ref} className="shadow-md">
          <CardContent className="p-6">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card ref={ref} className="shadow-md">
        <CardHeader>
          <CardTitle>Unesite podatke o kartici</CardTitle>
        </CardHeader>
        <CardContent>
          <div id="monri-payment-form" className="mb-4" />
          <Button onClick={handlePayment} className="w-full">
            Plati
          </Button>
        </CardContent>
      </Card>
    );
  }
);

PaymentFormStep.displayName = 'PaymentFormStep';