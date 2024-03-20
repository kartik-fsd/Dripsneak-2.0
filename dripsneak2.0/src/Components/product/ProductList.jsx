import { useQuery } from "@tanstack/react-query";
import { ProductSkeleton } from "../Skeleton";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { PropTypes } from "prop-types";
import { sortProducts } from "../../utils/sort";
import { useProductContext } from "../../context/useMyContext";
import ProductCardDetails from "./ProductCard";
import { CircularPagination } from "../Pagination";
import scrollTop from "../../utils/scrollTopNav";

const fetchData = async () => {
  return await fetch("http://localhost:3000/product/all-products").then(
    (response) => response.json()
  );
};

export default function ProductList({ sort }) {
  const navigate = useNavigate();
  const { checkedValues } = useProductContext();

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
    () => sortProducts(productData, isLoading, error, sort, checkedValues),
    [productData, isLoading, error, sort, checkedValues]
  );
  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  useEffect(() => {
    // Scroll to the top of the page when currentPage changes
    scrollTop();
  }, [currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  if (isLoading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const handleNavigation = (productId) => {
    navigate(`/product-overview/${productId}`);
  };
  return (
    <>
      <div className="bg-scorpion-50">
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-3 sm:py-8 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {currentProducts.map((product, key) => (
              <div
                key={key}
                className="group relative cursor-pointer"
                onClick={() => handleNavigation(product.id)}
              >
                <ProductCardDetails product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <CircularPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}
ProductList.propTypes = {
  sort: PropTypes.string.isRequired,
};
