import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import ArrowDataTransferVerticalIcon from "./icons/arrow-data-transfer-vertical-stroke-rounded";
import Calendar03Icon from "./icons/calendar-03-stroke-rounded";

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
  volume,
  retailPrice,
  description,
  durationUnit,
  duration,
  locationNetworkList,
  speed
}) => {
  const continents = ["Africa", "Asia", "Europe", "North America", "Oceania", "South America", "Global"];
  const numberOfCountries = locationNetworkList.length;
  const countries = locationNetworkList.map((network) => network.locationName).join(", ");
  const packageName = description.split(/[\d\s(]/)[0].trim();

  return (
    <>
      <Card className="bg-white rounded-lg shadow-lg p-4 mb-6 flex flex-col items-center">
        <CardHeader className="items-center">
          {continents.includes(packageName) ? (
            <Image
              src={`/${(packageName).toLowerCase()}.png`}
              alt={locationNetworkList[0].locationName}
              width={40}
              height={34}
            />
          ) : (
            <Image
              src={`https://static.redteago.com${locationNetworkList[0].locationLogo}`}
              alt={locationNetworkList[0].locationName}
              width={40}
              height={34}
            />
          )}
          
          <h2 className="text-xl font-semibold">{packageName}</h2>
        </CardHeader>
        <CardContent>
          <div className="flex w-full justify-between items-center gap-6">
            <div className="flex gap-2 align-items">
              <ArrowDataTransferVerticalIcon /> 
              <p>{(volume / 1073741824).toFixed(2)}GB <span className="text-xs">({speed})</span></p>
            </div>
            <div className="flex gap-2">
              <Calendar03Icon />
              <p>
                {duration} {duration > 1 ? `${(durationUnit).toLowerCase()}s` : (durationUnit).toLowerCase()}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <p>Dostupno u <span className="underline text-primary underline-offset-2">{numberOfCountries}</span> {`${numberOfCountries > 1 ? 'država' : 'državi'}`}</p>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h3 className="text-lg font-semibold">{packageName}</h3>
              </DialogHeader>
              <DialogDescription>
                <p className="mb-2">
                  <strong>Podržane države: ({numberOfCountries}):</strong>
                </p>
                <p>{countries}</p>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </CardFooter>
        <Button className="mx-3 w-full">Naručite - {(retailPrice * 1.9) / 10000}KM</Button>
      </Card>
    </>
  );
};

export default PackageCard;