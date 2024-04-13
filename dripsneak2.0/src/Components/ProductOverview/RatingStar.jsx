export const renderRatingStars = (rating) => {
  const filledStars = Math.floor(rating); // Number of filled stars
  const totalStars = 5; // Total number of stars
  const stars = [];
  // Add filled stars
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <svg
        key={`star-filled-${i}`} // Add unique key prop
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5 text-rhino-500 mr-2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    );
  }

  // Add unfilled stars to complete 5 stars
  for (let i = 0; i < totalStars - filledStars; i++) {
    stars.push(
      <svg
        key={`star-empty-${i}`} // Add unique key prop
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 text-scorpion-300 me-1 dark:text-scorpion-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    );
  }

  return (
    <div className="flex items-center">
      {stars}
      <p className="ms-1 text-sm font-medium text-scorpion-500 dark:text-scorpion-400">
        {rating?.toFixed(2)} {/* Display rating with two decimal places */}
      </p>
    </div>
  );
};
