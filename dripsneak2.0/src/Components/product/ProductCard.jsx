import PropTypes from "prop-types";
import NotFound from "../../assets/notfound2.webp";
function ProductCardDetails({ product }) {
  return (
    <>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-rhino-50 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product?.img[0]}
          alt={product?.name}
          className="bg-rhino-50 h-full w-full object-cover object-center lg:h-full lg:w-full"
          loading="lazy"
          role="presentation"
          onError={(e) => {
            e.target.src = NotFound;
          }}
        />
      </div>
      <div className="mt-4">
        <div className="flex-col justify-center space-y-1">
          <h3 className="text-xs font-medium text-scorpion-700">
            <>
              <span aria-hidden="true" className="absolute inset-0" />
              {product?.name}
            </>
          </h3>
          <p className="mt-1 text-xs font-normal text-scorpion-500">
            {product?.brand_name}
          </p>
        </div>
        <div className="mt-1 flex items-center justify-between space-x-2">
          <p className="text-xs font-medium text-scorpion-900">
            {"₹"}
            {product?.discounted_price}
          </p>
          <p className="text-xs font-light text-totem-pole-400 line-through">
            {"₹"} {product?.original_price}
          </p>
        </div>
      </div>
    </>
  );
}

ProductCardDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCardDetails;
