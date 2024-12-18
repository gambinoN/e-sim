import React from "react";

interface PackageDetailsProps {
  data: any; // You can refine the type based on the shape of data.obj
}

const PackageDetails: React.FC<PackageDetailsProps> = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PackageDetails;
