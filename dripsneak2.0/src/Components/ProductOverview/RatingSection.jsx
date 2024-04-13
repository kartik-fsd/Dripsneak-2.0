import PropTypes from "prop-types";
const RatingSection = ({ reviews }) => {
  function calculateRatingPercentages(reviews) {
    // Initialize an object to store the count of each rating
    const ratingCounts = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };

    // Count the occurrences of each rating
    reviews.forEach((review) => {
      ratingCounts[review.rating]++;
    });

    // Calculate the total number of reviews
    const totalReviews = reviews.length;

    // Calculate the percentage for each rating
    const ratingPercentages = Object.entries(ratingCounts).map(
      ([stars, count]) => ({
        stars: parseInt(stars),
        percentage: Math.round((count / totalReviews) * 100),
      })
    );

    return ratingPercentages;
  }

  function calculateAverageRating(reviews) {
    // Check if there are any reviews
    if (reviews.length === 0) {
      return 0; // Return 0 if there are no reviews
    }

    // Calculate the sum of all ratings
    const sumOfRatings = reviews.reduce(
      (total, review) => total + review.rating,
      0
    );

    // Calculate the average rating
    const averageRating = sumOfRatings / reviews.length;

    // Round the average rating to 1 decimal place
    return Math.round(averageRating * 10) / 10;
  }
  console.table(calculateAverageRating(reviews));
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
            {calculateAverageRating(reviews)}
          </span>
        </div>
        <span className="text-scorpion-500 dark:text-scorpion-400">
          {reviews.length} global ratings
        </span>
      </div>
      <div className="w-max">
        {calculateRatingPercentages(reviews).map((rating, index) => (
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
RatingSection.propTypes = {
  reviews: PropTypes.object.isRequired,
};
export default RatingSection;
