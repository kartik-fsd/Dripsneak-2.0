import { useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

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

  const rangeStart = Math.max(1, currentPage - 2);
  const rangeEnd = Math.min(totalPages, rangeStart + 4);

  const buttons = useMemo(() => {
    return Array.from(
      { length: rangeEnd - rangeStart + 1 },
      (_, index) => rangeStart + index
    );
  }, [rangeStart, rangeEnd]);

  return (
    <div className="flex flex-col items-center justify-center py-4 gap-4 mt-5 sm:flex-row sm:justify-center sm:gap-2 md:gap-4">
      <button
        className="flex items-center gap-2 rounded-full px-3 py-1 text-scorpion-800 sm:text-xs md:text-base lg:text-lg"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="h-4 w-4" /> Previous
      </button>
      <div className="flex items-center gap-2">
        {buttons.map((index) => (
          <button key={`page-${index}`} {...getItemProps(index)}>
            {index}
          </button>
        ))}
      </div>
      <button
        className="flex items-center gap-2 rounded-full px-3 py-1 text-scorpion-800 sm:text-xs md:text-base lg:text-lg"
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
