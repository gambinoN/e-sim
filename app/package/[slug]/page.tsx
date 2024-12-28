import { Metadata } from 'next';
import PackagePageClient from '@/components/packages/PackagePageClient';

async function getServerSidePackageData(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locationCode: '',
        type: '',
        slug,
        packageCode: '',
        iccid: '',
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching package data:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getServerSidePackageData(params.slug);
  
  if (!data?.obj?.packageList?.length) {
    return {
      title: 'Package Not Found',
    };
  }

  const packageDetails = data.obj.packageList.find((pkg: any) => pkg.slug === params.slug);

  if (!packageDetails) {
    return {
      title: 'Package Not Found',
    };
  }

  return {
    title: `${packageDetails.name} - Package Details`,
    description: `Purchase ${packageDetails.name} package valid for ${packageDetails.duration} days`,
    openGraph: {
      title: `${packageDetails.name} - Package Details`,
      description: `Purchase ${packageDetails.name} package valid for ${packageDetails.duration} days`,
      images: [packageDetails.image || '/esim.png'],
    },
  };
}

export default async function PackagePage({ params }: { params: { slug: string } }) {
  const initialData = await getServerSidePackageData(params.slug);

  return <PackagePageClient slug={params.slug} initialData={initialData} />;
}