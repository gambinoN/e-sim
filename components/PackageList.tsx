import PackageCard, { PackageProps } from "./PackageCard";

interface PackageListProps {
  packages: PackageProps[];
}

const PackageList: React.FC<PackageListProps> = ({ packages }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {packages?.map((pkg) => (
        <PackageCard key={pkg.packageCode} {...pkg} />
      ))}
    </div>
  );
};

export default PackageList;
