import { useQuery } from "@tanstack/react-query";
import { ProductSkeleton } from "../Skeleton";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { PropTypes } from "prop-types";
import { sortProducts } from "../../utils/sort";
import { useProductContext } from "../../context/useMyContext";
import ProductCardDetails from "./ProductCard";

const fetchData = async () => {
  return await fetch("http://localhost:3000/product/all-products").then(
    (response) => response.json()
  );
};

export default function ProductList({ sort }) {
  const navigate = useNavigate();
  const { searchProduct } = useProductContext();

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
    return <ProductSkeleton />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const handleNavigation = (product) => {
    navigate("/product-overview", { state: { product } });
  };
  console.log(searchProduct);
  return (
    <div className="bg-scorpion-50">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-3 sm:py-8 lg:max-w-7xl lg:px-8">
        {searchProduct && Object.keys(searchProduct).length > 0 && (
          <div className="grid grid-cols-3 my-2">
            <div
              className="group relative cursor-pointer"
              onClick={() => handleNavigation(searchProduct)}
            >
              <ProductCardDetails product={searchProduct} />
            </div>
          </div>
        )}
        <div className=" grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer"
              onClick={() => handleNavigation(product)}
            >
              <ProductCardDetails product={product} />
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
