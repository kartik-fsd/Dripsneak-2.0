import PropTypes from "prop-types";

function CartBtn({ handleButtonClick, isClicked }) {
  return (
    <div className="flex items-center space-x-4 mt-4">
      <button className="bg-rhino-900 hover:bg-rhino-600 text-rhino-50 font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span>Add to Cart</span>
      </button>
      <button
        className="bg-totem-pole-200 border border-rhino-50 rounded-full p-2 hover:bg-totem-pole-300 transform active:scale-75 transition-transform focus:outline-none"
        onClick={handleButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isClicked ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-6 h-6 text-totem-pole-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
  );
}

CartBtn.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
};

export default CartBtn;
