import { Metadata } from 'next'
import { fetchPackages } from '@/utils/packageUtils'
import PackagesContent from '@/components/PackagesContent'

export const metadata: Metadata = {
  title: 'Travel Packages | Your Site Name',
  description: 'Browse our selection of travel packages with flexible durations and coverage options.',
  openGraph: {
    title: 'Travel Packages | Your Site Name',
    description: 'Browse our selection of travel packages with flexible durations and coverage options.',
    type: 'website'
  }
}

async function getInitialPackages() {
  try {
    const packages = await fetchPackages()
    return {
      packages,
      error: null
    }
  } catch (error) {
    return {
      packages: [],
      error: 'Failed to fetch initial packages'
    }
  }
}

export default async function PackagesPage() {
  const { packages, error } = await getInitialPackages()
  
  return (
    <>
      <h1 className="sr-only">Travel Packages</h1>
      <PackagesContent initialPackages={packages} initialError={error} />
    </>
  )
}