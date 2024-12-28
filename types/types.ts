export interface LocationNetwork {
    locationName: string; 
    locationCode: string; 
    locationLogo: string;
    operatorList: operatorType[];
}

interface operatorType {
    operatorName: string;
    networkType: string;
}
  
export interface Package {
    packageCode: string,
    slug: string,
    name: string,
    price: number,
    currencyCode: string,
    volume: number,
    smsStatus: number,
    dataType: number,
    unusedValidTime: number,
    duration: number,
    durationUnit: string,
    location: string,
    description: string,
    activeType: number,
    favorite: boolean,
    retailPrice: number,
    speed: string,
    ipExport: string,
    supportTopUpType: number,
    locationNetworkList: LocationNetwork[]; 
}

export type FiltersType = {
    location: string | null;
    duration: string | null;
};

export interface PackageDetails {
    name: string;
    slug: string;
    price: number;
    duration: number;
    image?: string;
}