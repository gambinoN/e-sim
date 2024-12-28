import { useState, useEffect } from 'react'
import { Package } from '@/types/types'
import { paginateData } from '@/utils/packageUtils'
import { useFetchData } from '@/hooks/useFetchData'

interface ApiResponse {
    errorCode: string;
    erroMsg: string;
    obj: {
      packageList: Package[];  
    };
    success: boolean;
}

interface PackageFilters {
  location: string[]
  duration: string | null
  durationRange: string | null
  volume: string | null
  volumeRange: string | null
  region: string | null
}

export function usePackages(initialPackages: Package[], initialError: string | null) {
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(initialPackages)
  const [paginatedPackages, setPaginatedPackages] = useState<Package[]>([])
  const [filters, setFilters] = useState<PackageFilters>({
    location: [],
    duration: null,
    durationRange: null,
    volume: null,
    volumeRange: null,
    region: null,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(initialError)

  const itemsPerPage = 9

  const { data: apiData, error: apiError } = useFetchData<ApiResponse>({
    locationCode: '',
    type: '',
    slug: '',
    packageCode: '',
    iccid: '',
  })

  useEffect(() => {
    const filterPackages = (packages: Package[]) => {
      return packages.filter((pkg) => {
        const matchesLocation =
          filters.location.length === 0 ||
          pkg.locationNetworkList.some((loc) => 
            filters.location.includes(loc.locationName)
          )

        const matchesRegion =
          !filters.region || 
          pkg.name.toLowerCase().includes(filters.region.toLowerCase())

        const matchesDuration = (() => {
          if (!filters.durationRange) return true
          const [min, max] = filters.durationRange.split("-").map(val =>
            val === "+" ? Number.MAX_SAFE_INTEGER : parseInt(val, 10)
          )
          return pkg.duration >= min && 
            (max !== undefined ? pkg.duration <= max : true)
        })()

        const matchesVolume = (() => {
          if (!filters.volumeRange) return true
          const [min, max] = filters.volumeRange.split("-").map(val =>
            val === "+" ? Number.MAX_SAFE_INTEGER : parseInt(val, 10) * 1024 * 1024
          )
          return pkg.volume >= min && 
            (max !== undefined ? pkg.volume <= max : true)
        })()

        return matchesLocation && matchesRegion && matchesDuration && matchesVolume
      })
    }

    try {
      setIsLoading(true)
      let allPackages = [...initialPackages]
      
      if (apiData?.obj?.packageList) {
        allPackages = [...allPackages, ...apiData.obj.packageList]
      }
      
      const filtered = filterPackages(allPackages)
      setFilteredPackages(filtered)
      setCurrentPage(1)
    } catch (err) {
      setError('Error filtering packages')
    } finally {
      setIsLoading(false)
    }
  }, [filters, initialPackages, apiData])

  useEffect(() => {
    const paginated = paginateData(filteredPackages, currentPage, itemsPerPage)
    setPaginatedPackages(paginated)
  }, [filteredPackages, currentPage])

  useEffect(() => {
    if (apiError) {
      setError(apiError)
    }
  }, [apiError])

  return {
    filteredPackages,
    paginatedPackages,
    filters,
    currentPage,
    itemsPerPage,
    isLoading,
    error,
    setFilters,
    setCurrentPage,
  }
}