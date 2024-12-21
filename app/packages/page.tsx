'use client';

import { HeroSection } from "@/components/layout/sections/hero";
import PackageList from "@/components/PackageList";
import { useFetchData } from "@/hooks/useFetchData";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { countryToAlpha2 } from "country-to-iso";

export default function Home() {
  const [locationCode, setLocationCode] = useState("");
  const { data, error, loading } = useFetchData<any>("/api/open/package/list", {
    locationCode: "",
    type: "",
    slug: "",
    packageCode: "",
    iccid: "",
  });

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [sortBy, setSortBy] = useState("price");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    setLocationCode(selectedLocation || "");
  }, [selectedLocation]);

  useEffect(() => {
    if (data?.obj?.packageList) {
      const prices = data.obj.packageList.map((pkg) => pkg.price);
      setPriceRange([Math.min(...prices), Math.max(...prices)]);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading packages</div>;

  // Extract unique filters
  const uniqueLocations = Array.from(
    new Set(
      data?.obj?.packageList?.flatMap((pkg) =>
        pkg.locationNetworkList.map(
          (loc) => loc.locationName || loc.locationCode
        )
      )
    )
  ).filter((location) => location);

  const uniqueDurations = Array.from(
    new Set(
      data?.obj?.packageList?.map(
        (pkg) => `${pkg.duration} ${pkg.durationUnit}`
      )
    )
  );

  // Filtered and sorted packages
  const filteredPackages = data?.obj?.packageList
    .filter(
      (pkg) =>
        (!selectedLocation ||
          pkg.locationNetworkList.some(
            (loc) =>
              loc.locationName === selectedLocation ||
              loc.locationCode === selectedLocation
          )) &&
        (!selectedDuration ||
          `${pkg.duration} ${pkg.durationUnit}` === selectedDuration) &&
        (!priceRange ||
          (pkg.price >= priceRange[0] && pkg.price <= priceRange[1]))
    )
    .sort((a, b) => {
      if (sortBy === "price")
        return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
      if (sortBy === "volume")
        return sortDirection === "asc" ? a.volume - b.volume : b.volume - a.volume;
      if (sortBy === "duration")
        return sortDirection === "asc"
          ? a.duration - b.duration
          : b.duration - a.duration;
      return 0;
    });

  return (
    <>
      <div className="p-4">
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Location Filter */}
          <Select
            onValueChange={(value) =>
              setSelectedLocation(value === "ALL" ? null : value)
            }
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Locations</SelectItem>
              {uniqueLocations.map((location, index) => (
                <SelectItem key={index} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Duration Filter */}
          <Select
            onValueChange={(value) =>
              setSelectedDuration(value === "ALL" ? null : value)
            }
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Durations</SelectItem>
              {uniqueDurations.map((duration, index) => (
                <SelectItem key={index} value={duration}>
                  {duration}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sorting */}
          <Select onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="volume">Data Volume</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
            </SelectContent>
          </Select>

          <button
            onClick={() =>
              setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
            }
            className="px-4 py-2 bg-gray-200 rounded"
          >
            {sortDirection === "asc" ? "Ascending" : "Descending"}
          </button>
        </div>

        {/* Filtered and Sorted Package List */}
        <PackageList packages={filteredPackages} />
      </div>
    </>
  );
}
