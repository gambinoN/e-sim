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
  packageCode,
  slug,
  name,
  price,
  currencyCode,
  volume,
  smsStatus,
  dataType,
  unusedValidTime,
  duration,
  durationUnit,
  location,
  description,
  activeType,
  favorite,
  retailPrice,
  speed,
  locationNetworkList,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="flex items-center space-x-2 mt-2">
        <Image src={locationNetworkList[0].locationLogo} alt={locationNetworkList[0].locationName} width={24} height={16} />
        <span>{locationNetworkList[0].locationName}</span>
      </div>
      <p className="mt-2">
        <strong>Price:</strong> {price / 100} {currencyCode}
      </p>
      <p>
        <strong>Retail Price:</strong> {retailPrice / 100} {currencyCode}
      </p>
      <p>
        <strong>Speed:</strong> {speed}
      </p>
      <p>
        <strong>Duration:</strong> {duration} {durationUnit}
      </p>
      <p>
        <strong>Volume:</strong> {volume / (1024 * 1024 * 1024)} GB
      </p>
      <div className="mt-2">
        <h3 className="font-semibold">Operators:</h3>
        <ul>
          {locationNetworkList[0].operatorList.map((operator, index) => (
            <li key={index}>
              {operator.operatorName} - {operator.networkType}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-4 px-4 py-2 rounded-lg ${favorite ? "bg-red-500" : "bg-gray-300"} text-white`}
      >
        {favorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default PackageCard;
