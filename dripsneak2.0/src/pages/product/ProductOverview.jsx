import { useParams } from "react-router-dom";
import { renderRatingStars } from "../../Components/ProductOverview/RatingStar";
import { useState } from "react";
import ProductSizeSelector from "../../Components/ProductOverview/ProductSizeSelector";
import PriceAndAvailable from "../../Components/ProductOverview/PriceAndAvailable";
import CartBtn from "../../Components/ProductOverview/CartBtn";
import ProductReviewRatingSections from "../../Components/ProductOverview/ProductReviewRatingSections";
import { useQuery } from "@tanstack/react-query";
import { ProductOverviewSkeleton } from "../../Components/Skeleton";
import scrollTop from "../../utils/scrollTopNav";

export default function ProductOverview() {
  const { productId } = useParams();
  const [isClicked, setIsClicked] = useState(false);

  // Scroll to the top of the page when prodct view opens
  scrollTop();

  const handleButtonClick = () => {
    setIsClicked((prev) => !prev);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["products", productId], // Unique query key
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/product/detail?productId=${productId}`
      );
      const productData = await response.json();
      return productData;
    },
  });
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      {isLoading ? (
        <ProductOverviewSkeleton />
      ) : (
        <section className="text-scorpion-900 overflow-hidden bg-scorpion-50">
          <div className="container px-5 py-12 mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
              <img
                alt={data.product.name}
                className="lg:w-2/3 w-full object-cover object-center rounded-lg"
                src={data.product.img}
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12 flex flex-col items-center lg:items-start">
              <h2 className="text-sm text-scorpion-500 tracking-widest">
                {data.product.brand_name}
              </h2>
              <h1 className="text-3xl lg:text-4xl text-scorpion-900 font-medium my-2">
                {data.product.name}
              </h1>
              <section className="flex items-center mb-4">
                <div className="flex items-center">
                  {renderRatingStars(data.product.rating)}
                </div>
                <span className="text-gray-500 mx-2">|</span>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed  text-rhino-500 hover:text-rhino-700 cursor-pointer">
                  Based on {data.product.reviews} Reviews
                </p>
              </section>

              <div className="flex text-xs font-medium text-gray-500 uppercase items-center mb-3 space-x-3">
                <span>{data.product.category_name}</span>
                <span>|</span>
                <span>{data.product.style}</span>
              </div>
              <>
                <PriceAndAvailable
                  original_price={data.product.original_price}
                  discounted_price={data.product.discounted_price}
                  is_stock={data.product.is_stock}
                />
              </>

              <p className="leading-relaxed mb-6 text-center lg:text-left flex flex-col space-y-1">
                <span className="text-sm">Description</span>
                <span className="text-sm font-normal text-scorpion-600 text-wrap">
                  {data.product.description}
                </span>
              </p>

              <>
                <ProductSizeSelector sizes={data.product.size} />
              </>
              <CartBtn
                handleButtonClick={handleButtonClick}
                isClicked={isClicked}
              />
            </div>
          </div>
          <hr className="h-px my-8 mx-2 text-scorpion-200 border" />
          <ProductReviewRatingSections />
        </section>
      )}
    </>
  );
}
