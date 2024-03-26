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

  let filteredData = [...productData.products];

  // Filtering based on checked categories
  if (checkedValues.category) {
    const selectedCategories = Object.keys(checkedValues.category).filter(
      (category) => checkedValues.category[category]
    );
    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter((product) =>
        selectedCategories.includes(product.category_name)
      );
    }
  }

  // Filtering based on checked sizes
  if (checkedValues.size) {
    const selectedSizes = Object.keys(checkedValues.size).filter(
      (size) => checkedValues.size[size]
    );
    if (selectedSizes.length > 0) {
      filteredData = filteredData.filter((product) =>
        selectedSizes.some((size) => product.size.includes(size))
      );
    }
  }

  switch (sort) {
    case "Most Popular":
      return filteredData.sort((a, b) => {
        // Sort by trending (true before false) and then by reviews (descending)
        return b.trending - a.trending || b.reviews - a.reviews;
      });
    case "Best Rating":
      return filteredData.sort((a, b) => {
        // Prioritize higher rating, then break ties with higher reviews
        return b.rating - a.rating || b.reviews - a.reviews;
      });
    case "Newest":
      return filteredData;

    case "Price: Low to High":
      return filteredData.sort((a, b) => {
        // Prioritize lower price, then higher original price for tied discounted prices
        return (
          a.discounted_price - b.discounted_price ||
          a.original_price - b.original_price
        );
      });
    case "Price: High to Low":
      return filteredData.sort((a, b) => {
        // Prioritize higher price, then lower original price for tied discounted prices
        return (
          b.discounted_price - a.discounted_price ||
          b.original_price - a.original_price
        );
      });
    default:
      return filteredData;
  }
};
