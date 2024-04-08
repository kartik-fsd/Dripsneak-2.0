import { useQuery } from "@tanstack/react-query";
import RatingSection from "./RatingSection";
import ProductReviews from "./productReviews";
import PropTypes from "prop-types";

function ProductReviewRatingSections({ productId }) {
  const fetchProductReviews = async () => {
    const response = await fetch(
      `http://localhost:3000/product/reviews/${productId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const UseProductReview = useQuery({
    queryKey: ["rewvies", productId], // Unique query key
    queryFn: fetchProductReviews,
  });
  const { isPending, isError, error, data } = UseProductReview;

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log("Product data:", data.product.reviews);

  // Check if data.product is available
  if (!data || !data.product) {
    return <div>No product data available.</div>;
  }

  const { reviews } = data.product;
  return (
    <div className="container grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 items-start xl:gap-x-8">
      <RatingSection />
      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          {reviews?.map((review) => (
            <ProductReviews
              key={review.id}
              rating={review.rating}
              reviewer={review.userName}
              text={review.content}
              date={review.createdAt?.slice(0, 10)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ProductReviewRatingSections.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductReviewRatingSections;
