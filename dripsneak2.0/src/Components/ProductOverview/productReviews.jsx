import { renderRatingStars } from "./RatingStar";
import PropTypes from "prop-types";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
const ProductReviews = ({ rating, reviewer, text, date }) => {
  return (
    <>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-rhino-100 px-4 py-2 text-left text-sm font-medium text-rhino-900 hover:bg-rhino-200 focus:outline-none focus-visible:ring focus-visible:ring-rhino-500/75">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-2">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={reviewer.avatar}
                    alt={reviewer.name}
                  />

                  <div className="text-xs  flex flex-col">
                    <span>{reviewer.name}</span>
                    <span className="text-scorpion-400 font-thin">
                      Verified Buyer
                    </span>
                  </div>
                  <svg
                    className="h-6 w-6"
                    viewBox="-4.08 -4.08 32.16 32.16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                      <rect
                        x="-4.08"
                        y="-4.08"
                        width="32.16"
                        height="32.16"
                        rx="16.08"
                        fill="#0e7723"
                        strokeWidth="0"
                      ></rect>
                    </g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="none"
                        stroke="#e6f4f3"
                        strokeWidth="1.344"
                        d="M20,15 C19,16 21.25,18.75 20,20 C18.75,21.25 16,19 15,20 C14,21 13.5,23 12,23 C10.5,23 10,21 9,20 C8,19 5.25,21.25 4,20 C2.75,18.75 5,16 4,15 C3,14 1,13.5 1,12 C1,10.5 3,10 4,9 C5,8 2.75,5.25 4,4 C5.25,2.75 8,5 9,4 C10,3 10.5,1 12,1 C13.5,1 14,3 15,4 C16,5 18.75,2.75 20,4 C21.25,5.25 19,8 20,9 C21,10 23,10.5 23,12 C23,13.5 21,14 20,15 Z M7,12 L10,15 L17,8"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div className="flex items-center">
                  {renderRatingStars(rating)}
                </div>
              </div>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-rhino-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-scorpion-500">
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
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
