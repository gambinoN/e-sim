import { PackageDetails } from "@/types/types";

export async function getPackageDetails(
  slug: string
): Promise<PackageDetails | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/packages/details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locationCode: "",
          type: "",
          slug,
          packageCode: "",
          iccid: "",
        }),
        // Add cache configuration for production
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
        next: {
          revalidate: 3600, // Revalidate every hour
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.obj?.packageList?.length) {
      return null;
    }

    const packageDetails = data.obj.packageList.find(
      (pkg: any) => pkg.slug === slug
    );

    if (!packageDetails) {
      return null;
    }

    return {
      name: packageDetails.name,
      slug: packageDetails.slug,
      price: packageDetails.price,
      duration: packageDetails.duration,
      image: packageDetails.image,
      // Add any other fields you need
    };
  } catch (error) {
    console.error("Error fetching package details:", error);
    return null;
  }
}
