'use client';

import { useFetchData } from '@/hooks/useFetchData';
import PackageLayout from '@/components/packages/PackageLayout';
import { notFound } from 'next/navigation';
import { PackageSkeleton } from './PackageSkeleton';
import { useEffect } from 'react';

interface PackagePageClientProps {
  slug: string;
  initialData: any; // Type this properly based on your data structure
}

export default function PackagePageClient({ slug, initialData }: PackagePageClientProps) {
  const { data, error, loading } = useFetchData({
    locationCode: '',
    type: '',
    slug,
    packageCode: '',
    iccid: '',
  });

  useEffect(() => {
    if (!initialData?.obj?.packageList?.length) {
      notFound();
    }

    const packageExists = initialData.obj.packageList.some(
      (pkg: any) => pkg.slug === slug
    );

    if (!packageExists) {
      notFound();
    }
  }, [initialData, slug]);

  // Use the latest data or fall back to initial data
  const packageData = data || initialData;

  if (loading) {
    return <PackageSkeleton />;
  }

  if (error || !packageData?.obj?.packageList?.length) {
    return <div>Error loading package details</div>;
  }

  const packageDetails = packageData.obj.packageList.find((pkg: any) => pkg.slug === slug);

  if (!packageDetails) {
    return <div>Package not found</div>;
  }

  return <PackageLayout packageDetails={packageDetails} />;
}