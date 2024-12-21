'use client';

import PackageList from '@/components/PackageList';
import { useFetchData } from '@/hooks/useFetchData';
import { useState, useEffect } from 'react';
import { getPackages, initializeDatabase, addPackages } from '@/utils/db';
import { Package } from '@/types/types';

export default function Home() {
  const [localData, setLocalData] = useState<Package[]>([]); // Data from IndexedDB
  const [combinedData, setCombinedData] = useState<Package[]>([]); // Merged data (DB + API)
  const [filteredData, setFilteredData] = useState<Package[]>([]); // Data after applying filters
  const [filters, setFilters] = useState({ location: null, duration: null }); // User filters

  // Fetch data using custom hook
  const { data: apiData, error, loading } = useFetchData<Package[]>('/api/open/package/list', {
    locationCode: 'HR',
    type: '',
    slug: '',
    packageCode: '',
    iccid: '',
  });

  console.log(apiData)
  // Load data from IndexedDB on component mount
  useEffect(() => {
    const fetchDataFromDB = async () => {
      try {
        await initializeDatabase(); // Initialize the IndexedDB
        const dbData = await getPackages(); // Fetch data from IndexedDB
        setLocalData(dbData); // Set the local data
        setCombinedData(dbData); // Start with IndexedDB data
        setFilteredData(dbData); // Initially show all data
        console.log('Data from IndexedDB:', dbData);
      } catch (error) {
        console.error('Error fetching data from IndexedDB:', error);
      }
    };

    fetchDataFromDB();
  }, []);

  useEffect(() => {
    if (apiData) {
      const validPackages = apiData.obj.packageList.filter((pkg: Package) => pkg.packageCode); // Validate API data
      if (validPackages.length > 0) {
        console.log('Fetched API Data:', validPackages);
        setCombinedData((prevData) => {
          const mergedData = [...prevData, ...validPackages];
          return Array.from(new Map(mergedData.map((pkg) => [pkg.packageCode, pkg])).values()); // Ensure unique packages
        });
        addPackages(validPackages); // Cache fetched data into IndexedDB
      }
    }
  }, [apiData]);

  // Apply filters when the user selects them
  useEffect(() => {
    if (filters.location || filters.duration) {
      const filtered = combinedData.filter((pkg) => {
        const locationMatch =
          !filters.location ||
          pkg.locationNetworkList.some((loc) => loc.locationCode === filters.location);
        const durationMatch =
          !filters.duration || `${pkg.duration} ${pkg.durationUnit}` === filters.duration;

        return locationMatch && durationMatch;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(combinedData); // Reset to show all data
    }
  }, [filters, combinedData]);

  if (loading && combinedData.length === 0) return <div>Loading...</div>;
  if (error) return <div>Error loading packages</div>;

  return (
    <div className="p-4">
      <div className="filters">
        <select
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              location: e.target.value === 'ALL' ? null : e.target.value,
            }))
          }
        >
          <option value="ALL">All Locations</option>
          {Array.from(
            new Set(combinedData.flatMap((pkg) => pkg.locationNetworkList.map((loc) => loc.locationCode)))
          ).map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>

        <select
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              duration: e.target.value === 'ALL' ? null : e.target.value,
            }))
          }
        >
          <option value="ALL">All Durations</option>
          {Array.from(
            new Set(combinedData.map((pkg) => `${pkg.duration} ${pkg.durationUnit}`))
          ).map((duration, index) => (
            <option key={index} value={duration}>
              {duration}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered data */}
      <PackageList packages={filteredData} />
    </div>
  );
}
