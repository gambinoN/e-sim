import { Skeleton } from "../ui/skeleton";

export function PackageSkeleton() {
    return (
      <div className="container mx-auto p-6 space-y-6 mt-10">
        <Skeleton className="h-8 w-48" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Skeleton className="h-64 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    );
  }