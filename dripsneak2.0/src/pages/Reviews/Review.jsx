import { useLocation } from "react-router-dom";
import ProductReviews from "../../Components/ProductOverview/productReviews";
import { useState } from "react";
import { CircularPagination } from "../../Components/Pagination";
import scrollTop from "../../utils/scrollTopNav";
import PropTypes from "prop-types";
import { renderRatingStars } from "../../Components/ProductOverview/RatingStar";

const ProductPreview = ({ product }) => {
  const { avgRating, brand_name, description, discounted_price, img, name } =
    product;

  return (
    <div className=" container w-full lg:w-1/3 product-preview flex flex-col items-center bg-white shadow-md rounded-lg px-2 py-4">
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
        <img
          alt={product?.name}
          className="w-full lg:w-auto object-cover object-center rounded-lg"
          src={img[0]}
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2  w-full lg:ml-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-scorpion-500">{brand_name}</p>

        {renderRatingStars(avgRating)}

        <p className="text-sm text-scorpion-500 leading-normal lg:leading-snug text-balance">
          {description}
        </p>

        <span className="text-valid">₹ {discounted_price.toFixed(2)}</span>
      </div>
    </div>
  );
};

ProductPreview.propTypes = {
  product: PropTypes.object.isRequired,
};
export default function ReviewsPage() {
  const location = useLocation();
  scrollTop(); //reset the scroll position to the top
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const { reviews, product } = location.state;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = reviews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className=" bg-scorpion-50 flex flex-col lg:flex-row items-center lg:items-start p-8 justify-center space-y-6 lg:space-x-8 lg:space-y-0">
      {/* Product Preview Card */}
      <>
        <ProductPreview product={product} />
      </>

      {/* Reviews */}
      <div className="reviews flex flex-col  justify-center bg-white rounded-lg shadow-md px-2 lg:px-4 max-w-sm lg:max-w-xl">
        <h2 className="review-heading text-xl text-center font-medium my-2">
          Reviews
        </h2>

        {currentProducts.map((review) => (
          <ProductReviews
            key={review.id}
            rating={review.rating}
            reviewer={review.userName}
            text={review.content}
            date={review.createdAt?.slice(0, 10)}
          />
        ))}
        <CircularPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

ReviewsPage.propTypes = {
  product: PropTypes.object.isRequired,
};
