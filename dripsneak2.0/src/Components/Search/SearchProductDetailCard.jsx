import { useState } from "react";
import { useProductContext } from "../../context/useMyContext";
import Sidebar from "../sidebar/Sidebar";
import CustomDisclosure from "../sidebar/Disclosure";
import { filters } from "../../assets/data";
import NotFound from "../../assets/notfound2.webp";

const ProductListingCard = () => {
  const { searchProduct } = useProductContext();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState("Most Popular");
  const { brand_name, name, original_price, discounted_price, img } =
    searchProduct;

  return (
    <div className="bg-scorpion-50">
      <Sidebar
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        sort={sort}
        setSort={setSort}
        className="w-1/3" // Fixed-width sidebar
      />
      <main className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-4">
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block ">
              {filters.map((section) => (
                <CustomDisclosure key={section.id} section={section} />
              ))}
            </form>

            {/* Product grid */}
            <div className="lg:col-span-2">
              <div className="max-w-md mx-auto bg-totem-pole-50 shadow-md rounded-md overflow-hidden">
                <div className="flex justify-between p-4">
                  <div>
                    <h3 className="text-lg font-medium text-scorpion-800">
                      {brand_name}
                    </h3>
                    <h4 className="text-base font-medium text-scorpion-700">
                      {name}
                    </h4>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-scorpion-500 line-through animation-strikethrough mr-2">
                      ₹{original_price.toLocaleString()}
                    </p>
                    <p className="text-sm font-medium text-valid">
                      ₹{discounted_price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-scorpion-50 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={img[0]}
                    alt={name}
                    className="bg-scorpion-50 h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform transform-hover:scale-105 duration-300 ease-in-out"
                    loading="lazy"
                    role="presentation"
                    onError={(e) => {
                      e.target.src = NotFound;
                    }}
                  />
                </div>
                <div className="flex justify-between items-center p-4">
                  <button className="px-6 py-2 text-white rounded-md bg-valid hover:bg-validHover focus:outline-none">
                    Add to Cart
                  </button>
                  <button className="px-6 py-2 text-scorpion-500 rounded-md hover:bg-scorpion-400 hover:text-scorpion-900 focus:outline-none">
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductListingCard;
