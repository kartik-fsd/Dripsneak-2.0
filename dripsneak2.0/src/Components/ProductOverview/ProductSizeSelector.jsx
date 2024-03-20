/* eslint-disable no-unused-vars */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import PropTypes from "prop-types";
const ProductSizeSelector = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <RadioGroup value={selectedSize} onChange={setSelectedSize}>
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-scorpion-900">Size</h4>
          <a
            href="#"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Size guide
          </a>
        </div>

        <RadioGroup
          value={selectedSize}
          onChange={setSelectedSize}
          className="mt-4"
        >
          <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
          <div className="grid grid-cols-5 gap-4">
            {sizes.map((size) => (
              <RadioGroup.Option
                key={size}
                value={size}
                className={({ active }) =>
                  classNames(
                    "cursor-pointer bg-scorpion-50 text-scorpion-900 shadow-sm",
                    active ? "ring-2 ring-rhino-500" : "",
                    "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-scorpion-50 focus:outline-none sm:flex-1"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label as="span">{size}</RadioGroup.Label>
                    <span
                      className={classNames(
                        active ? "border" : "border-2",
                        checked ? "border-indigo-500" : "border-transparent",
                        "pointer-events-none absolute -inset-px rounded-md"
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </RadioGroup>
  );
};

ProductSizeSelector.propTypes = {
  sizes: PropTypes.number.isRequired,
};

export default ProductSizeSelector;
