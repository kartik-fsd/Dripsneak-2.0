import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { scrollTop } from "../utils/scrollTopNav";
import { useEffect } from "react";
export function CircularPagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const getItemProps = (index) => ({
    className: `px-3 py-1 rounded-full ${
      currentPage === index ? "bg-rhino-500 text-white" : "text-rhino-500"
    }`,
    onClick: () => setCurrentPage(index),
  });

  const next = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    // Scroll to the top of the page when currentPage changes
    scrollTop();
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center py-4 gap-4">
      <button
        className="flex items-center gap-2 rounded-full px-3 py-1"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="h-4 w-4" /> Previous
      </button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages).keys()].map((index) => (
          <button key={index + 1} {...getItemProps(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className="flex items-center gap-2 rounded-full px-3 py-1"
        onClick={next}
        disabled={currentPage === totalPages}
      >
        Next <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
CircularPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};
