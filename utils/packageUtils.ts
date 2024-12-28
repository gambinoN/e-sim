import { LocationNetwork, Package } from '@/types/types';

type ValidFields = keyof Package;
type ValidSubfields = keyof LocationNetwork;

export const getUniqueValues = (
  data: Package[],
  field: ValidFields,
  subfield?: ValidSubfields
): string[] => {
  if (subfield) {
    return Array.from(
      new Set(
        data.flatMap((pkg) => {
          const fieldData = pkg[field];
          if (Array.isArray(fieldData)) {
            if (subfield === 'operatorList') {
              // Flatten and map operator lists to operatorName strings
              return fieldData
                .flatMap((item: LocationNetwork) => 
                  item.operatorList.map(op => op.operatorName)
                );
            }
            // Handle other subfields
            return fieldData.map((item: LocationNetwork) => 
              String(item[subfield as keyof LocationNetwork])
            );
          }
          return [];
        }).filter(Boolean)
      )
    );
  }
  
  return Array.from(
    new Set(
      data.map((pkg) => {
        const fieldValue = pkg[field];
        // Type guard to check if the field has a corresponding unit field
        const hasUnit = (f: ValidFields): f is keyof Package => 
          `${String(f)}Unit` in pkg;
        
        if (hasUnit(field)) {
          const unitValue = pkg[`${String(field)}Unit` as keyof Package];
          return fieldValue && unitValue ? `${fieldValue} ${unitValue}` : '';
        }
        
        return fieldValue ? String(fieldValue) : '';
      }).filter(Boolean)
    )
  );
};

// Rest of your utility functions remain the same
export const fetchPackages = async (): Promise<Package[]> => {
  try {
    const { initializeDatabase, getPackages } = await import('@/utils/db');
    await initializeDatabase();
    return await getPackages();
  } catch (error) {
    console.error('Error fetching packages:', error);
    return [];
  }
};

export const filterPackages = (
  data: Package[],
  filters: {
    location: string[];
    duration: string | null;
    volume: string | null;
    region: string | null;
  }
): Package[] => {
  console.log("filter", filters);
  return data.filter((pkg) => {
    const locationMatch =
      filters.location.length === 0 ||
      pkg.locationNetworkList.some((loc) => filters.location.includes(loc.locationName));

    const regionMatch =
      !filters.region || pkg.name.toLowerCase().includes(filters.region.toLowerCase());

    const durationMatch = (() => {
      if (!filters.duration) return true;
      const [minDuration, maxDuration] = filters.duration.split("-").map((val) =>
        val === "+" ? Number.MAX_SAFE_INTEGER : parseInt(val, 10)
      );
      return (
        pkg.duration >= minDuration && (maxDuration ? pkg.duration <= maxDuration : true)
      );
    })();

    const volumeMatch = (() => {
      if (!filters.volume) return true;
      const [minVolume, maxVolume] = filters.volume.split("-").map((val) =>
        val === "+" ? Number.MAX_SAFE_INTEGER : parseInt(val, 10) * 1024 * 1024
      );
      return (
        pkg.volume >= minVolume && (maxVolume ? pkg.volume <= maxVolume : true)
      );
    })();

    return locationMatch && regionMatch && durationMatch && volumeMatch;
  });
};

export const paginateData = (
  data: Package[],
  currentPage: number,
  itemsPerPage: number
): Package[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return data.slice(startIndex, startIndex + itemsPerPage);
};