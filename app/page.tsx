'use client'
import PackageList from "@/components/PackageList";
import { useFetchData } from "@/hooks/usefetchdata";

export default function Home() {

  const { data, error, loading } = useFetchData<any>('/api/open/package/list', {
    locationCode: "",
    type: "",
    slug: "",
    packageCode: "",
    iccid: ""
  });
  
  console.log(data)
  return (
    <>
      <PackageList packages={data?.obj.packageList} />
    </>
  );
}
