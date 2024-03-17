/* eslint-disable no-unused-vars */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import PropTypes from "prop-types";
const ProductSizeSelector = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <RadioGroup value={selectedSize} onChange={setSelectedSize}>
      <section className="flex items-center justify-between my-2">
        <span className="text-sm font-normal">Size</span>
        <span className="text-xs font-normal leading-snug text-rhino-600 cursor-pointer">
          See sizing chart
        </span>
      </section>
      <div className="w-fit flex flex-wrap items-center mb-4 space-x-2">
        {sizes.map((size) => (
          <RadioGroup.Option
            key={size}
            value={size}
            className={({ active, checked }) =>
              `${
                active
                  ? "ring-2 ring-offset-2 ring-offset-rhino-200 ring-rhino-500"
                  : ""
              }
                 ${
                   checked
                     ? "bg-rhino-600 bg-opacity-75 text-scorpion-50"
                     : "bg-rhino-50"
                 }
                 relative rounded-lg shadow-md px-5 py-4 my-2 cursor-pointer flex focus:outline-none`
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={`${
                    checked ? "bg-rhino-600 bg-opacity-75" : "bg-transparent"
                  }
                       absolute -inset-0 rounded-lg`}
                />
                <span className="relative">{size}</span>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

ProductSizeSelector.propTypes = {
  sizes: PropTypes.number.isRequired,
};

export default ProductSizeSelector;
