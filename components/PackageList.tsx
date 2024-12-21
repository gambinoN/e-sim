import PackageCard, { PackageProps } from "./PackageCard";

interface PackageListProps {
  packages: PackageProps[];
}

const PackageList: React.FC<PackageListProps> = ({ packages }) => {
  console.log(packages)
  return (
    <div className="space-y-4">
      {packages?.map((pkg) => (
        <PackageCard key={pkg.packageCode} {...pkg} />
      ))}
    </div>
  );
};

export default PackageList;
