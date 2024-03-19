const RatingSection = () => {
  const ratingsData = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 17 },
    { stars: 3, percentage: 8 },
    { stars: 2, percentage: 4 },
    { stars: 1, percentage: 1 },
  ];

  const calculateAverageRating = () => {
    const totalRatings = ratingsData.reduce(
      (acc, rating) => acc + rating.percentage,
      0
    );
    const totalStars = ratingsData.length * 5;
    return (totalRatings / totalStars) * 5;
  };

  const averageRating = calculateAverageRating();
  return (
    <div className="px-4 py-6 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center justify-between text-sm font-medium">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-rhino-500 mb-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <span className="ml-2 text-lg">
            {averageRating.toFixed(1)} out of 5
          </span>
        </div>
        <span className="text-scorpion-500 dark:text-scorpion-400">
          1,745 global ratings
        </span>
      </div>
      <div className="w-max">
        {ratingsData.map((rating, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-y-3"
          >
            <div className="flex items-center space-x-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-rhino-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <span className="text-sm font-medium text-rhino-600 dark:text-rhino-500">
                {rating.stars} star
              </span>
            </div>
            <div className="flex items-center space-x-2 flex-1">
              <div className="w-60 h-8 rounded bg-scorpion-200 dark:bg-scorpion-700">
                <div
                  style={{ width: `${rating.percentage}%` }}
                  className="h-8 rounded bg-rhino-300"
                ></div>
              </div>
              <span className="ml-2 text-sm font-medium text-scorpion-500 dark:text-scorpion-400">
                {rating.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
