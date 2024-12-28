import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PackageDetails } from '@/types/types';
import { PricingDetails } from './PricingDetails';
import { calculatePrice } from '@/utils/packageUtils';

export function PackageSummaryCard({ packageDetails }: { packageDetails: PackageDetails }) {
  const price = calculatePrice(packageDetails.price);
  
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Odabrani paket</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={packageDetails.image || "/esim.png"}
              alt={packageDetails.name}
              width={60}
              height={40}
              className="rounded-md object-cover"
            />
            <div>
              <h2 className="text-lg font-bold">{packageDetails.name}</h2>
              <p className="text-sm text-gray-500">{packageDetails.duration} dan/a</p>
            </div>
          </div>
          <p className="text-lg font-bold text-gray-800">KM {price}</p>
        </div>

        <Separator className="my-4" />
        <PricingDetails price={price} />
      </CardContent>
    </Card>
  );
}