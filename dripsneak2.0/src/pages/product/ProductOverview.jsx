import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductSizeSelector from "../../Components/ProductOverview/ProductSizeSelector";
import PriceAndAvailable from "../../Components/ProductOverview/PriceAndAvailable";
import CartBtn from "../../Components/ProductOverview/CartBtn";
import ProductReviewRatingSections from "../../Components/ProductOverview/ProductReviewRatingSections";
import { ProductOverviewSkeleton } from "../../Components/loader/Skeleton";
import scrollTop from "../../utils/scrollTopNav";
import Breadcrumbs from "../../Components/Breadcrumbs";
import PropTypes from "prop-types";
import ProductMeta from "../../Components/ProductOverview/ProductMeta";
import ProductRating from "../../Components/ProductOverview/RatingIndex";

export default function ProductOverview() {
  const { productId } = useParams();
  const [isClicked, setIsClicked] = useState(false);

  // Scroll to the top of the page when product view opens
  scrollTop();

  const handleButtonClick = () => {
    setIsClicked((prev) => !prev);
  };

  const fetchProductDetail = async () => {
    const response = await fetch(
      `http://localhost:3000/product/detail?productId=${productId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const UseProductDetail = useQuery({
    queryKey: ["products", productId], // Unique query key
    queryFn: fetchProductDetail,
  });

  if (UseProductDetail.isError) {
    return <div>{UseProductDetail.error.message}</div>;
  }

  if (UseProductDetail.isLoading || UseProductDetail.isPending) {
    return <ProductOverviewSkeleton />;
  }

  return (
    <>
      <Breadcrumbs />

      <ProductDetails
        data={UseProductDetail.data}
        handleButtonClick={handleButtonClick}
        isClicked={isClicked}
      />
    </>
  );
}

function ProductDetails({ data, handleButtonClick, isClicked }) {
  const { product } = data;

  return (
    <section className="text-scorpion-900 overflow-hidden bg-scorpion-50">
      <div className="container px-5 py-12 mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <img
            alt={product?.name}
            className="lg:w-2/3 w-full object-cover object-center rounded-lg"
            src={product?.img[0]}
            loading="lazy"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12 flex flex-col items-center lg:items-start">
          <h2 className="text-sm text-scorpion-500 tracking-widest">
            {product?.brand_name}
          </h2>
          <h1 className="text-3xl lg:text-4xl text-scorpion-900 font-medium my-2">
            {product?.name}
          </h1>
          <ProductRating
            avgRating={product?.avgRating}
            reviews={product?.reviews}
          />
          <ProductMeta
            category_name={product?.category_name}
            style={product?.style}
          />
          <PriceAndAvailable
            original_price={product?.original_price}
            discounted_price={product?.discounted_price}
            is_stock={product?.is_stock}
          />
          <p className="leading-relaxed mb-6 text-center lg:text-left flex flex-col space-y-1">
            <span className="text-sm">Description</span>
            <span className="text-sm font-normal text-scorpion-600 text-wrap">
              {product?.description}
            </span>
          </p>
          <ProductSizeSelector sizes={product?.size} />
          <CartBtn
            handleButtonClick={handleButtonClick}
            isClicked={isClicked}
          />
        </div>
      </div>
      <hr className="h-px my-8 mx-2 text-scorpion-200 border" />
      {product && <ProductReviewRatingSections productId={product.id} />}
    </section>
  );
}

ProductDetails.propTypes = {
  data: PropTypes.shape({
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.array.isRequired,
      brand_name: PropTypes.string.isRequired,
      avgRating: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired,
      category_name: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired,
      original_price: PropTypes.number.isRequired,
      discounted_price: PropTypes.number.isRequired,
      is_stock: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      size: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  }).isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
};
