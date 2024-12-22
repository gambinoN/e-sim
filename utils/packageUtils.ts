import { Package } from '@/types/types';

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

// Filter packages based on location and duration
export const filterPackages = (
  data: Package[],
  filters: {
    location: string[]; // Multiple locations
    duration: string | null; // Range: "1-7", "30+"
    volume: string | null; // Range: "500-1000", "5000+"
    region: string | null; // Name of region in the package name
  }
): Package[] => {
  console.log("filter", filters)
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
        val === "+" ? Number.MAX_SAFE_INTEGER : parseInt(val, 10) * 1024 * 1024 // Convert MB to bytes
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

export const getUniqueValues = (
    data: Package[],
    field: string,
    subfield?: string
  ): string[] => {
    if (subfield) {
      return Array.from(
        new Set(
          data.flatMap((pkg) => {
            const fieldData = pkg[field];
            return Array.isArray(fieldData)
              ? fieldData.map((item: { [key: string]: string }) => item[subfield])
              : [];
          })
        )
      );
    }
    
    return Array.from(
      new Set(
        data.map((pkg) => {
          const fieldValue = pkg[field];
          const unitValue = pkg[`${field}Unit`];
          // Ensure fieldValue and unitValue exist before concatenating
          return fieldValue && unitValue ? `${fieldValue} ${unitValue}` : '';
        }).filter(Boolean) // Remove empty strings
      )
    );
  };
  