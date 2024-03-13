import { PhotoIcon } from "@heroicons/react/24/solid";
import AddInput from "../../Components/addInput";
import DropdownBar from "../../Components/DropdownBar";
import SizeCheckField from "../../Components/checkBoxField";
import HorizontalListItem from "../../Components/ListItem";

const Size = {
  US_5: "US 5",
  US_6: "US 6",
  US_7: "US 7",
  US_8: "US 8",
  US_9: "US 9",
  US_10: "US 10",
  US_11: "US 11",
  US_12: "US 12",
  US_13: "US 13",
};

const Style = {
  CASUAL: "Casual",
  SPORTS: "Sports",
  ETHNIC: "Ethnic",
  FORMAL: "Formal",
  PARTY: "Party",
  RIDING: "Riding",
};

const Category = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  unisex: "Unisex",
};
export default function AddProducts() {
  const sizeOptions = Object.entries(Size).map(([key, value]) => ({
    value: key, // Use the enum key as the value
    label: value, // Use the enum value as the label
  }));

  const styleOptions = Object.entries(Style).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const categoryOptions = Object.entries(Category).map(([key, value]) => ({
    value: key,
    label: value,
  }));
  const items = [{ label: "Trending" }, { label: "Stock Available" }];
  return (
    <form className="min-h-screen flex flex-col items-center justify-center ">
      <section>
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-scorpion-900 ">
            Add product
          </h2>
          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              {/* Product name */}
              <AddInput
                type="text"
                name="name"
                id="name"
                placeholder="Type product name"
                label=" Product Name"
              />

              {/* Product price */}
              <AddInput
                type="number"
                name="price"
                id="price"
                placeholder="&#8377; price"
                label="  Product Price"
              />

              {/* Product discount price */}
              <AddInput
                type="number"
                name="dprice"
                id="dprice"
                placeholder="&#8377; discount"
                label="  Discounted Price"
              />

              {/* Product Category */}
              <DropdownBar
                name="category"
                label="Category"
                options={categoryOptions}
              />

              {/* Product Style */}
              <DropdownBar name="style" label="Style" options={styleOptions} />
              <div className="sm:col-span-2 py-2">
                <SizeCheckField label="Size's" options={sizeOptions} />
              </div>

              <ul className="flex flex-col sm:flex-col-span-2 py-2 space-y-3">
                {items.map((item) => (
                  <HorizontalListItem
                    key={item.label}
                    label={item.label}
                    disabled={item.disabled}
                  />
                ))}
              </ul>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-scorpion-900 "
                >
                  Product Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-scorpion-900 bg-scorpion-50 rounded-lg border border-scorpion-300 focus:ring-rhino-500 focus:border-rhino-500 "
                  placeholder="Write a product description here..."
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-scorpion-900"
                >
                  Sneaker images
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-scorpion-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-scorpion-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-scorpion-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-scorpion-50 font-semibold text-rhino-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-rhino-600 focus-within:ring-offset-2 hover:text-rhino-500"
                      >
                        <span>Upload a sneaker images</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-scorpion-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-scorpion-50 bg-rhino-700 hover:bg-rhino-800 focus:ring-4 focus:outline-none focus:ring-rhino-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create product
              </button>
              <button
                type="button"
                className="text-totem-pole-400 inline-flex items-center hover:text-scorpion-50 border border-totem-pole-400 hover:bg-totem-pole-400 focus:ring-4 focus:outline-none focus:ring-totem-pole-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <svg
                  className="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          </form>
        </div>
      </section>
    </form>
  );
}
