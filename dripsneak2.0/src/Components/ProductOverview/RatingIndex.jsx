import PropTypes from "prop-types";
import { renderRatingStars } from "./RatingStar";

export default function ProductRating({ avgRating, reviews }) {
  return (
    <section className="flex items-center mb-4">
      <div className="flex items-center">{renderRatingStars(avgRating)}</div>
      <span className="text-gray-500 mx-2">|</span>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed  text-rhino-500 hover:text-rhino-700 cursor-pointer">
        Based on {reviews} Reviews
      </p>
    </section>
  );
}

ProductRating.propTypes = {
  avgRating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};
