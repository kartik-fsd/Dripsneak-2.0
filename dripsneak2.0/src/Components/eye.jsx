import PropTypes from "prop-types";

export const EyeIcon = ({ isPasswordVisible, togglePasswordVisibility }) => {
  return (
    <>
      <i
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            fill="#000000"
            className="h-6"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-30.72 -30.72 573.44 573.44"
            enableBackground="new 0 0 512 512"
            transform="rotate(0)"
            stroke="#000000"
            strokeWidth="0.01"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="m494.8,241.4l-50.6-49.4c-50.1-48.9-116.9-75.8-188.2-75.8s-138.1,26.9-188.2,75.8l-50.6,49.4c-11.3,12.3-4.3,25.4 0,29.2l50.6,49.4c50.1,48.9 116.9,75.8 188.2,75.8s138.1-26.9 188.2-75.8l50.6-49.4c4-3.8 11.7-16.4 0-29.2zm-238.8,84.4c-38.5,0-69.8-31.3-69.8-69.8 0-38.5 31.3-69.8 69.8-69.8 38.5,0 69.8,31.3 69.8,69.8 0,38.5-31.3,69.8-69.8,69.8zm-195.3-69.8l35.7-34.8c27-26.4 59.8-45.2 95.7-55.4-28.2,20.1-46.6,53-46.6,90.1 0,37.1 18.4,70.1 46.6,90.1-35.9-10.2-68.7-29-95.7-55.3l-35.7-34.7zm355,34.8c-27,26.3-59.8,45.1-95.7,55.3 28.2-20.1 46.6-53 46.6-90.1 0-37.2-18.4-70.1-46.6-90.1 35.9,10.2 68.7,29 95.7,55.4l35.6,34.8-35.6,34.7z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        ) : (
          <svg
            className="h-7"
            viewBox="-6.4 -6.4 32.80 32.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            strokeWidth="0.28"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M1.68788 8.3059C1.36566 7.85735 1.46807 7.23252 1.91662 6.9103C2.36517 6.58809 2.99 6.6905 3.31221 7.13905C3.61607 7.56204 4.08478 7.96552 4.6918 8.31591C5.98518 9.0625 7.7771 9.5 9.7043 9.5C11.6315 9.5 13.4234 9.0625 14.7168 8.31591C15.3238 7.96552 15.7925 7.56204 16.0964 7.13905C16.4186 6.6905 17.0434 6.58809 17.492 6.9103C17.9405 7.23252 18.0429 7.85735 17.7207 8.3059C17.2402 8.97475 16.5568 9.56308 15.7167 10.048C14.1049 10.9784 11.9685 11.5 9.7043 11.5C7.44007 11.5 5.30367 10.9784 3.69195 10.048C2.85179 9.56308 2.16836 8.97475 1.68788 8.3059Z"
                fill="#000000"
              ></path>{" "}
              <path
                d="M11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11L9 13.5C9 14.0523 9.44772 14.5 10 14.5C10.5523 14.5 11 14.0523 11 13.5L11 11Z"
                fill="#000000"
              ></path>{" "}
              <path
                d="M5.52985 10.7575C5.6638 10.2217 6.20673 9.8959 6.74253 10.0298C7.27832 10.1638 7.60408 10.7067 7.47013 11.2425L6.97013 13.2425C6.83619 13.7783 6.29325 14.1041 5.75746 13.9701C5.22166 13.8362 4.8959 13.2933 5.02985 12.7575L5.52985 10.7575Z"
                fill="#000000"
              ></path>{" "}
              <path
                d="M13.9702 10.7575C13.8362 10.2217 13.2933 9.8959 12.7575 10.0298C12.2217 10.1638 11.8959 10.7067 12.0299 11.2425L12.5299 13.2425C12.6638 13.7783 13.2067 14.1041 13.7425 13.9701C14.2783 13.8362 14.6041 13.2933 14.4702 12.7575L13.9702 10.7575Z"
                fill="#000000"
              ></path>{" "}
              <path
                d="M16.5249 8.29289C16.1344 7.90237 15.5012 7.90237 15.1107 8.29289C14.7201 8.68342 14.7201 9.31658 15.1107 9.70711L17.1107 11.7071C17.5012 12.0976 18.1344 12.0976 18.5249 11.7071C18.9154 11.3166 18.9154 10.6834 18.5249 10.2929L16.5249 8.29289Z"
                fill="#000000"
              ></path>{" "}
              <path
                d="M3.07775 8.32742C3.44921 7.91872 4.08165 7.88853 4.49036 8.25999C4.89906 8.63145 4.92924 9.26389 4.55779 9.67259L2.74002 11.6726C2.36857 12.0813 1.73612 12.1115 1.32742 11.74C0.918719 11.3686 0.88853 10.7361 1.25999 10.3274L3.07775 8.32742Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
        )}
      </i>
    </>
  );
};

EyeIcon.propTypes = {
  togglePasswordVisibility: PropTypes.func.isRequired,
  isPasswordVisible: PropTypes.bool.isRequired,
};
