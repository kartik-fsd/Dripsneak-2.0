//import PropTypes from "prop-types";
import RatingSection from "./RatingSection";
import ProductReviews from "./productReviews";

const reviewData = [
  {
    reviewer: {
      name: "John Doe",
      avatar: "https://picsum.photos/id/646/200/200",
    },
    rating: 5,
    text: "This sneaker is amazing! The comfort and quality are top-notch. I would definitely recommend it to anyone looking for a new pair of shoes.",
    date: "2024-03-16",
  },
  {
    reviewer: {
      name: "Jane Smith",
      avatar: "https://picsum.photos/id/646/200/200",
    },
    rating: 4,
    text: "The sneaker looks great, but the fit is a bit narrow for me. I would recommend trying them on in store before purchasing.",
    date: "2024-03-15",
  },
  {
    reviewer: {
      name: "Michael Lee",
      avatar: "https://picsum.photos/id/646/200/200",
    },
    rating: 3,
    text: "The sneaker is comfortable, but the material seems a bit cheap. I was expecting better quality for the price.",
    date: "2024-03-14",
  },
];
function ProductReviewRatingSections() {
  return (
    <div className="container grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-2 items-start xl:gap-x-8">
      <RatingSection />
      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          {reviewData.map((review, key) => (
            <ProductReviews
              key={key}
              rating={review.rating}
              reviewer={review.reviewer}
              text={review.text}
              date={review.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

//ProductReviewRatingSections.propTypes = {};

export default ProductReviewRatingSections;
