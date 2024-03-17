import { renderRatingStars } from "./RatingStar";
import PropTypes from "prop-types";

const ProductReviews = ({ rating, reviewer, text, date }) => {
  return (
    <div className="flex flex-col bg-rhino-50 rounded-lg shadow-md p-4 space-y-4 m-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={reviewer.avatar}
            alt={reviewer.name}
          />

          <div className="text-xs  flex flex-col">
            <span>{reviewer.name}</span>
            <span className="text-scorpion-400 font-thin">Verified Buyer</span>
          </div>
          <svg
            className="fill-current text-scorpion-500 bg-totem-pole-200 rounded-full p-1 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="current"
          >
            <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
          </svg>
        </div>
        <div className="flex items-center">{renderRatingStars(rating)}</div>
      </div>
      <p className="text-sm font-light break-words">{text}</p>
      <div className="flex items-center justify-between text-xs text-gray-500 space-x-2">
        <span>{date}</span>

        <div className="flex items-center justify-between text-scorpion-600 fill-current">
          <div className="flex items-center">
            <button className="flex items-center transform active:scale-75 transition-transform">
              <svg
                className="w-3 h-3 text-scorpion-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
              </svg>
              <span className="ml-2 text-xs">56</span>
            </button>
            <button className="flex items-center ml-4 transform active:scale-75 transition-transform">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
              </svg>
              <span className="ml-2 text-xs">10</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductReviews.propTypes = {
  reviewer: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ProductReviews;
