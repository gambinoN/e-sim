import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

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
  const numberOfCountries = locationNetworkList.length;
  const countries = locationNetworkList.map((network) => network.locationName).join(", ");

  return (
    <>
      <Card className="bg-white rounded-lg shadow-lg p-4 mb-6">
        <CardHeader>
          <h2 className="text-xl font-semibold">{name}</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{description}</p>
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
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 w-full">View Details</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h3 className="text-lg font-semibold">{name}</h3>
              </DialogHeader>
              <DialogDescription>
                <Image
                  src={`https://static.redteago.com${locationNetworkList[0].locationLogo}`}
                  alt={locationNetworkList[0].locationName}
                  width={48}
                  height={32}
                  className="mb-4"
                />
                <p className="mb-2">
                  <strong>Description:</strong> {description}
                </p>
                <p className="mb-2">
                  <strong>Price:</strong> {price / 100} {currencyCode}
                </p>
                <p className="mb-2">
                  <strong>Available Countries ({numberOfCountries}):</strong>
                </p>
                <p>{countries}</p>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
};

export default PackageCard;