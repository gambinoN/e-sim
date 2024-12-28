'use client';

import Filters from '@/components/Filters';
import { FooterSection } from '@/components/layout/sections/footer';
import PackageList from '@/components/PackageList';
import Pagination from '@/components/Pagination';
import { useFetchData } from '@/hooks/useFetchData';
import { Package } from '@/types/types';
import { fetchPackages, paginateData } from '@/utils/packageUtils';
import { useState, useEffect } from 'react';

interface ApiPackageResponse {
  errorCode: number | null;
  errorMsg: string | null;
  success: boolean;
  obj: {
    packageList: Package[];
  };
}

export default function Pack() {
  const [localData, setLocalData] = useState<Package[]>([]);
  const [combinedData, setCombinedData] = useState<Package[]>([]);
  const [filteredData, setFilteredData] = useState<Package[]>([]);
  const [paginatedData, setPaginatedData] = useState<Package[]>([]);
  const [filters, setFilters] = useState({
    location: [] as string[],
    duration: null as string | null,
    durationRange: null as string | null,
    volume: null as string | null,
    volumeRange: null as string | null,
    region: null as string | null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState<string | null>(null);

  const itemsPerPage = 9;

  // Update the type parameter for useFetchData
  const { data: apiData, error, loading } = useFetchData<ApiPackageResponse>({
    locationCode: '',
    type: '',
    slug: '',
    packageCode: '',
    iccid: '',
  });

  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoadingState(true);
        const localPackages = await fetchPackages();
        setLocalData(localPackages);
        setFilteredData(localPackages);

        // Now we can safely access the nested packageList
        if (apiData?.obj?.packageList) {
          const combined = [...localPackages, ...apiData.obj.packageList];
          setCombinedData(combined);
          setFilteredData(combined);
        } else {
          setCombinedData(localPackages);
          setFilteredData(localPackages);
        }
      } catch (error) {
        setErrorState('Failed to fetch data. Please try again later.');
      } finally {
        setLoadingState(false);
      }
    };

    initializeData();
  }, [apiData]);

  useEffect(() => {
    const filterPackages = () => {
      return combinedData.filter((pkg) => {
        const matchesLocation =
          filters.location.length === 0 ||
          pkg.locationNetworkList.some((loc) => filters.location.includes(loc.locationName));
  
        const matchesRegion =
          !filters.region || pkg.name.toLowerCase().includes(filters.region.toLowerCase());
  
        const matchesDuration = (() => {
          if (!filters.durationRange) return true; 
          const [minDuration, maxDuration] = filters.durationRange.split("-").map((val) =>
            val === "+" ? Number.MAX_SAFE_INTEGER : parseInt(val, 10)
          );
          return (
            pkg.duration >= minDuration && (maxDuration !== undefined ? pkg.duration <= maxDuration : true)
          );
        })();
  
        const matchesVolume = (() => {
          if (!filters.volumeRange) return true; 
          const [minVolume, maxVolume] = filters.volumeRange.split("-").map((val) =>
            val === "+" ? Number.MAX_SAFE_INTEGER : parseInt(val, 10) * 1024 * 1024 
          );
          return (
            pkg.volume >= minVolume && (maxVolume !== undefined ? pkg.volume <= maxVolume : true)
          );
        })();
  
        return matchesLocation && matchesRegion && matchesDuration && matchesVolume;
      });
    };
  
    const filtered = filterPackages();
    setFilteredData(filtered);
    setCurrentPage(1); 
  }, [filters, combinedData]);  
  

  useEffect(() => {
    const paginated = paginateData(filteredData, currentPage, itemsPerPage);
    setPaginatedData(paginated);
  }, [filteredData, currentPage]);

  // if (loadingState || loading) {
  //   return <div className="p-4">Loading...</div>;
  // }

  if (errorState || error) {
    return <div className="p-4 text-red-500">{errorState || error}</div>;
  }

  return (
    <div className="p-4">
      <Filters
        packages={combinedData} // Pass combined data to Filters for generating options
        onFiltersApply={(newFilters) => setFilters((prev) => ({ ...prev, ...newFilters }))}
      />
      {filteredData.length === 0 ? (
        <div className="mt-4">No packages found matching the selected filters.</div>
      ) : (
        <>
          <PackageList packages={paginatedData} />
          <Pagination
            currentPage={currentPage}
            totalItems={filteredData.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
      <FooterSection />
    </div>
  );
}
