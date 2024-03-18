import { useQuery } from "@tanstack/react-query";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";
import NotFound from "../assets/notfound2.webp";
import { useMemo } from "react";
import { PropTypes } from "prop-types";
import { sortProducts } from "../utils/sort";

const fetchData = async () => {
  return await fetch("http://localhost:3000/product/all-products").then(
    (response) => response.json()
  );
};

export default function ProductList({ sort }) {
  const navigate = useNavigate();

  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: fetchData,
  });

  //sorting the data according to filter
  const sortedProducts = useMemo(
    () => sortProducts(productData, isLoading, error, sort),
    [productData, isLoading, error, sort]
  );

  if (isLoading) {
    return <Skeleton />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const handleNavigation = (product) => {
    navigate("/product-overview", { state: { product } });
  };

  return (
    <div className="bg-scorpion-50">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-3 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              onClick={() => handleNavigation(product)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-rhino-50 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.img[0]}
                  alt={product.name}
                  className="bg-rhino-50 h-full w-full object-cover object-center lg:h-full lg:w-full"
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
                    {product.brand_name}
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
ProductList.propTypes = {
  sort: PropTypes.string.isRequired,
};
