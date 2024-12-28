import { Separator } from '@/components/ui/separator';

interface PricingDetailsProps {
  price: string;
}

export function PricingDetails({ price }: PricingDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Cijena</span>
        <span className="font-medium">KM {price}</span>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>Ušteda</span>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="PROMO CODE"
            className="p-1 border rounded-md text-sm focus:ring-blue-500 focus:outline-none"
            readOnly
          />
          <span className="text-green-500 font-medium">-</span>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>PDV</span>
        <span className="font-medium">0.00 KM</span>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between items-center text-lg font-bold">
        <span>Ukupno</span>
        <span>KM {price}</span>
      </div>
    </div>
  );
}