export const sortProducts = (
  productData,
  isLoading,
  error,
  sort,
  checkedValues
) => {
  if (!productData || isLoading || error) {
    return [];
  }

  const clonedData = [...productData.products];

  switch (sort) {
    case "Most Popular":
      return clonedData.sort((a, b) => {
        // Sort by trending (true before false) and then by reviews (descending)
        return b.trending - a.trending || b.reviews - a.reviews;
      });
    case "Best Rating":
      return clonedData.sort((a, b) => {
        // Prioritize higher rating, then break ties with higher reviews
        return b.rating - a.rating || b.reviews - a.reviews;
      });
    case "Newest":
      return clonedData;

    case "Price: Low to High":
      return clonedData.sort((a, b) => {
        // Prioritize lower price, then higher original price for tied discounted prices
        return (
          a.discounted_price - b.discounted_price ||
          a.original_price - b.original_price
        );
      });
    case "Price: High to Low":
      return clonedData.sort((a, b) => {
        // Prioritize higher price, then lower original price for tied discounted prices
        return (
          b.discounted_price - a.discounted_price ||
          b.original_price - a.original_price
        );
      });
    default:
      return clonedData;
  }
};
