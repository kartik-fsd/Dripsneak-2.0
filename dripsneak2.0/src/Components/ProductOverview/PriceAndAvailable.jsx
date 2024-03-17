import PropTypes from "prop-types";
function PriceAndAvailable({ original_price, discounted_price, is_stock }) {
  return (
    <section className="my-3 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-3">
      <span className="flex items-center space-x-2">
        <h3 className="text-sm">Price:</h3>
        <span className="text-sm text-scorpion-400 line-through">
          {"₹"}
          {original_price}
        </span>
        <span className="text-md text-rhino-500">
          {"₹"}
          {discounted_price}
        </span>
      </span>
      <span className="text-sm flex items-center space-x-2">
        Availability:{" "}
        {is_stock ? (
          <span className="text-sm flex items-center space-x-1">
            <span className="text-green-600">Available</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-rhino-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </span>
        ) : (
          <span className="text-sm flex items-center space-x-1">
            <span className="text-red-600">Out of stock</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-totem-pole-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
        )}
      </span>
    </section>
  );
}

PriceAndAvailable.propTypes = {
  is_stock: PropTypes.bool.isRequired,
  original_price: PropTypes.number.isRequired,
  discounted_price: PropTypes.number.isRequired,
};
export default PriceAndAvailable;
