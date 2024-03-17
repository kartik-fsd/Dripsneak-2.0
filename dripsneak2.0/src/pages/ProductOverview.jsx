import { useLocation } from "react-router-dom";
import { renderRatingStars } from "../Components/ProductOverview/RatingStar";
import { useState } from "react";
import ProductSizeSelector from "../Components/ProductOverview/ProductSizeSelector";
import PriceAndAvailable from "../Components/ProductOverview/PriceAndAvailable";
import CartBtn from "../Components/ProductOverview/CartBtn";
import ProductReviewRatingSections from "../Components/ProductOverview/ProductReviewRatingSections";

export default function ProductOverview() {
  const location = useLocation();
  const product = location.state?.product;

  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked((prev) => !prev);
  };
  const {
    name,
    img,
    brand_name,
    reviews,
    rating,
    category_name,
    size,
    description,
    style,
    is_stock,
    original_price,
    discounted_price,
  } = product;
  console.log(product);
  return (
    <section className="text-scorpion-900 overflow-hidden bg-scorpion-50">
      <div className="container px-5 py-20 mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <img
            alt={name}
            className="lg:w-2/3 w-full object-cover object-center rounded-lg"
            src={img}
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12 flex flex-col items-center lg:items-start">
          <h2 className="text-sm text-scorpion-500 tracking-widest">
            {brand_name}
          </h2>
          <h1 className="text-3xl lg:text-4xl text-scorpion-900 font-medium my-2">
            {name}
          </h1>
          <section className="flex items-center mb-4">
            <div className="flex items-center">{renderRatingStars(rating)}</div>
            <span className="text-gray-500 mx-2">|</span>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed  text-rhino-500 hover:text-rhino-700 cursor-pointer">
              Based on {reviews} Reviews
            </p>
          </section>

          <div className="flex items-center mb-4 space-x-3">
            <span className="text-gray-500 uppercase">{category_name}</span>
            <span className="text-gray-500 ">|</span>
            <span className="text-gray-500 uppercase">{style}</span>
          </div>
          <>
            <PriceAndAvailable
              original_price={original_price}
              discounted_price={discounted_price}
              is_stock={is_stock}
            />
          </>

          <p className="leading-relaxed mb-6 text-center lg:text-left flex flex-col space-y-2">
            <span className="text-sm my-2">Description</span>
            {description}
          </p>

          <>
            <ProductSizeSelector sizes={size} />
          </>
          <CartBtn
            handleButtonClick={handleButtonClick}
            isClicked={isClicked}
          />
        </div>
      </div>
      <ProductReviewRatingSections />
    </section>
  );
}
