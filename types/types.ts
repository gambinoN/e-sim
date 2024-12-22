export interface LocationNetwork {
    locationName: string; // Name of the location
    locationCode: string; // Code for the location
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
    locationNetworkList: LocationNetwork[]; // List of networks available for this package
}

export type FiltersType = {
    location: string | null;
    duration: string | null;
};
