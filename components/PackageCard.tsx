import Link from "next/link";
import Image from "next/image";

interface Operator {
  operatorName: string;
  networkType: string;
}

interface LocationNetwork {
  locationName: string;
  locationLogo: string;
  locationCode: string;
  operatorList: Operator[];
}

export interface PackageProps {
  packageCode: string;
  slug: string;
  name: string;
  price: number;
  currencyCode: string;
  volume: number;
  smsStatus: number;
  dataType: number;
  unusedValidTime: number;
  duration: number;
  durationUnit: string;
  location: string;
  description: string;
  activeType: number;
  favorite: boolean;
  retailPrice: number;
  speed: string;
  locationNetworkList: LocationNetwork[];
}

const PackageCard: React.FC<PackageProps> = ({
  slug,
  name,
  price,
  currencyCode,
  description,
  locationNetworkList,
}) => {
  return (
    <Link href={`/package/${slug}`}>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-6 cursor-pointer hover:shadow-xl transition-shadow">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center space-x-2 mt-2">
          <Image
            src={`https://static.redteago.com${locationNetworkList[0].locationLogo}`}
            alt={locationNetworkList[0].locationName}
            width={24}
            height={16}
          />
          <span>{locationNetworkList[0].locationName}</span>
        </div>
        <p className="mt-2">
          <strong>Price:</strong> {price / 100} {currencyCode}
        </p>
      </div>
    </Link>
  );
};

export default PackageCard;
