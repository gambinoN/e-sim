'use client'

import { Package } from '@/types/types'
import { FooterSection } from '@/components/layout/sections/footer'
import dynamic from 'next/dynamic'
import { usePackages } from '@/hooks/usePackages'

const Filters = dynamic(() => import('@/components/Filters'))
const PackageList = dynamic(() => import('@/components/PackageList'))
const Pagination = dynamic(() => import('@/components/Pagination'))

interface PackagesContentProps {
  initialPackages: Package[]
  initialError: string | null
}

export default function PackagesContent({ 
  initialPackages,
  initialError 
}: PackagesContentProps) {
  const {
    filteredPackages,
    paginatedPackages,
    filters,
    currentPage,
    itemsPerPage,
    isLoading,
    error,
    setFilters,
    setCurrentPage
  } = usePackages(initialPackages, initialError)

  if (error) {
    return (
      <div className="p-4 text-red-500" role="alert">
        {error}
      </div>
    )
  }

  return (
    <div className="p-4">
      <Filters
        packages={initialPackages}
        onFiltersApply={(newFilters) => setFilters((prev: any) => ({ ...prev, ...newFilters }))}
      />
      
      {isLoading ? (
        <div className="p-4" role="status">
          <span className="sr-only">Loading packages...</span>
          {/* Add your loading spinner component here */}
        </div>
      ) : filteredPackages.length === 0 ? (
        <div className="mt-4" role="status">
          No packages found matching the selected filters.
        </div>
      ) : (
        <>
          <PackageList packages={paginatedPackages} />
          <Pagination
            currentPage={currentPage}
            totalItems={filteredPackages.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
      <FooterSection />
    </div>
  )
}