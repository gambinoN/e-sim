import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

type Package = {
  name: string;
  locationNetworkList: { locationName: string }[];
  duration: number;
  volume: number;
};

type FiltersProps = {
  packages: Package[];
  onFiltersApply: (filters: {
    location: string[];
    durationRange: string | null;
    volumeRange: string | null;
    region: string | null;
  }) => void;
};

const Filters: React.FC<FiltersProps> = ({ packages, onFiltersApply }) => {
  const [selectedFilters, setSelectedFilters] = useState<{
    location: string[];
    durationRange: string | null;
    volumeRange: string | null;
    region: string | null;
  }>({ location: [], durationRange: null, volumeRange: null, region: null });

  const [searchTerm, setSearchTerm] = useState("");
  const [focused, setFocused] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const regionMapping: Record<string, string> = {
    Evropa: "Europe",
    Azija: "Asia",
    Afrika: "Africa",
    "Sjeverna Amerika": "North America",
    "Južna Amerika": "South America",
    "Bliski istok": "Middle East",
  };

  const regions = Object.keys(regionMapping);

  const allLocations = Array.from(
    new Set(packages.flatMap((pkg) => pkg.locationNetworkList.map((loc) => loc.locationName)))
  ).sort((a, b) => a.localeCompare(b));  

  const durationRanges = [
    { label: "1-7 dana", value: "1-7" },
    { label: "7-15 dana", value: "7-15" },
    { label: "15-30 dana", value: "15-30" },
    { label: "Above 30 dana", value: "30+" },
  ];

  const volumeRanges = [
    { label: "0-500 MB", value: "0-500" },
    { label: "500 MB-1 GB", value: "500-1000" },
    { label: "1-5 GB", value: "1000-5000" },
    { label: "Preko 5 GB", value: "5000+" },
  ];

  const activeFilterCount = () => {
    return (
      selectedFilters.location.length +
      (selectedFilters.durationRange ? 1 : 0) +
      (selectedFilters.volumeRange ? 1 : 0) +
      (selectedFilters.region ? 1 : 0)
    );
  };

  const handleLocationAdd = (location: string) => {
    if (selectedFilters.location.includes(location) || activeFilterCount() >= 5) return;

    const newLocations = [...selectedFilters.location, location];
    const newFilters = { ...selectedFilters, location: newLocations };

    setSelectedFilters(newFilters);
    onFiltersApply(newFilters);
    setSearchTerm("");
    setFocused(false);
  };

  const handleLocationRemove = (location: string) => {
    const newLocations = selectedFilters.location.filter((loc) => loc !== location);
    const newFilters = { ...selectedFilters, location: newLocations };

    setSelectedFilters(newFilters);
    onFiltersApply(newFilters);
  };

  const handleDurationRangeChange = (value: string) => {
    if (selectedFilters.durationRange === value || activeFilterCount() >= 5) return;

    const newFilters = { ...selectedFilters, durationRange: value };

    setSelectedFilters(newFilters);
    onFiltersApply(newFilters);
  };

  const handleVolumeRangeChange = (value: string) => {
    if (selectedFilters.volumeRange === value || activeFilterCount() >= 5) return;

    const newFilters = { ...selectedFilters, volumeRange: value };

    setSelectedFilters(newFilters);
    onFiltersApply(newFilters);
  };

  const handleRegionChange = (region: string) => {
    if (selectedFilters.region === region || activeFilterCount() >= 5) return;

    const mappedRegion = regionMapping[region] || region;

    const newFilters = { ...selectedFilters, region: mappedRegion };

    setSelectedFilters(newFilters);
    onFiltersApply(newFilters);
  };

  const renderSelectedFilters = () =>
    selectedFilters.location.map((location) => (
      <Badge key={location} variant="outline" className="mr-2 mb-2">
        {location}{" "}
        <button
          onClick={() => handleLocationRemove(location)}
          className="ml-1 text-red-500 hover:text-red-700 focus:outline-none"
        >
          &times;
        </button>
      </Badge>
    ));

  return (
    <div className="filters-container p-4 bg-gray-50 rounded-lg shadow-md space-y-4">
      <div className="selected-filters flex flex-wrap">{renderSelectedFilters()}</div>

      <div className="location-filter relative">
        <Input
          type="text"
          placeholder="Pretražite lokacije ili regije..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
        />
        {focused && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-[40dvh] overflow-y-auto">
            <li className="px-4 py-2 text-gray-500 font-semibold">Regije</li>
            {regions.map((region) => (
              <li
                key={region}
                onClick={() => handleRegionChange(region)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {region}
              </li>
            ))}
            <li className="px-4 py-2 text-gray-500 font-semibold">Lokacije</li>
            {allLocations
              .filter((loc) => loc.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((loc) => (
                <li
                  key={loc}
                  onClick={() => handleLocationAdd(loc)}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {loc}
                </li>
              ))}
          </ul>
        )}
      </div>

      <div>
        <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
          Dodatni filteri
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div></div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dodatni Filteri</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Količina podataka</h3>
              <div className="flex flex-wrap gap-2">
                {volumeRanges.map(({ label, value }) => (
                  <Button
                    key={value}
                    variant={selectedFilters.volumeRange === value ? "default" : "outline"}
                    onClick={() => handleVolumeRangeChange(value)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Trajanje paketa</h3>
              <div className="flex flex-wrap gap-2">
                {durationRanges.map(({ label, value }) => (
                  <Button
                    key={value}
                    variant={selectedFilters.durationRange === value ? "default" : "outline"}
                    onClick={() => handleDurationRangeChange(value)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>
              Zatvori
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Filters;
