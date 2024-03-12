import { useQuery } from "@tanstack/react-query";
import Skeleton from "./Skeleton";

import NotFound from "../assets/notfound2.webp";
import { memo } from "react";

const fetchData = async () => {
  return await fetch("http://localhost:3000/product/all-products").then(
    (response) => response.json()
  );
};

export default function ProductList() {
  const MemoizedSkeleton = memo(() => <Skeleton />);
  // Assign a display name to the MemoizedSkeleton component
  MemoizedSkeleton.displayName = "MemoizedSkeleton";

  const skeletonComponents = Array.from({ length: 3 * 3 }, (_, index) => (
    <MemoizedSkeleton key={index} />
  ));

  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-between space-x-4 space-y-4">
        {skeletonComponents}
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="bg-scorpion-50">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-3 sm:py-8 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-scorpion-900">
          Customers also purchased
        </h2> */}

        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData?.products?.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-scorpion-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.img[0]}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  loading="lazy"
                  role="presentation"
                  onError={(e) => {
                    e.target.src = NotFound;
                  }}
                />
              </div>
              <div className="mt-4">
                <div className="flex-col justify-center space-y-1">
                  <h3 className="text-xs font-medium text-scorpion-700">
                    <>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </>
                  </h3>
                  <p className="mt-1 text-xs font-normal text-scorpion-500">
                    {product.style}
                  </p>
                </div>
                <div className="mt-1 flex items-center justify-between space-x-2">
                  <p className="text-xs font-medium text-scorpion-900">
                    {"₹"}
                    {product.discounted_price}
                  </p>
                  <p className="text-xs font-light text-totem-pole-400 line-through">
                    {"₹"} {product.original_price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
