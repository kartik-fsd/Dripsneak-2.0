import { useState } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import CustomDisclosure from "../../Components/sidebar/Disclosure";
import { filters } from "../../assets/data";
import ProductList from "../../Components/product/ProductList";
import Breadcrumbs from "../../Components/Breadcrumbs";

function ProductListPages() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState("Most Popular");

  return (
    <div className="bg-scorpion-50">
      <Sidebar
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        sort={sort}
        setSort={setSort}
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
            <div className="lg:col-span-3">
              <Breadcrumbs />
              <ProductList sort={sort} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductListPages;
