import { useQuery } from "@tanstack/react-query";
import RatingSection from "./RatingSection";
import ProductReviews from "./productReviews";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
function ProductReviewRatingSections({ product }) {
  const { id } = product;
  const navigate = useNavigate();
  const fetchProductReviews = async () => {
    const response = await fetch(`http://localhost:3000/product/reviews/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const UseProductReview = useQuery({
    queryKey: ["reviwes", id], // Unique query key
    queryFn: fetchProductReviews,
  });
  const { isPending, isError, error, data } = UseProductReview;

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  // Check if data.product is available
  if (!data || !data.product) {
    return <div>No product data available.</div>;
  }

  const { reviews } = data.product;
  const handleClick = () => {
    navigate("/reviews", { state: { reviews, product } });
  };
  return (
    <div className="container grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 items-start xl:gap-x-8 my-5">
      <RatingSection reviews={reviews} />
      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-2">
          {reviews
            ?.sort((low, high) => high.rating - low.rating)
            .slice(0, 3)
            .map((review) => (
              <ProductReviews
                key={review.id}
                rating={review.rating}
                reviewer={review.userName}
                text={review.content}
                date={review.createdAt?.slice(0, 10)}
                product={product}
              />
            ))}
          <span
            className="text-sm text-rhino-700 mx-4 cursor-pointer hover:text-rhino-500 transform active:scale-75 transition-transform"
            onClick={handleClick}
          >
            View all {reviews.length} reviews
          </span>
        </div>
      </div>
    </div>
  );
}

ProductReviewRatingSections.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductReviewRatingSections;
