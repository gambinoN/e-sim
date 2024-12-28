'use client';

import { forwardRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface SuccessStepProps {
  packageName: string;
}

export const SuccessStep = forwardRef<HTMLDivElement, SuccessStepProps>(
  ({ packageName }, ref) => {
    return (
      <div className="flex justify-center items-center">
        <Card ref={ref} className="shadow-md text-center p-6 max-w-lg">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold">Uspješna narudžba</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Vaša narudžba za <span className="font-semibold">{packageName}</span> je
              uspješno završena!
            </p>
            <p className="text-md text-gray-600 mb-4">
              Detalji narudžbe su poslani na vašu e-mail adresu.
            </p>
            <p className="text-sm text-gray-500">
              Ako ne vidite poruku, provjerite svoj folder za neželjenu poštu.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }
);

SuccessStep.displayName = 'SuccessStep';