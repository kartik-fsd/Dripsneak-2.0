import { Formik, Form, Field } from "formik";
import AddproductInputs from "../../Components/AddproductInputs";
import AddProductCheckBox from "../../Components/AddProductCheckBox";
import AddProductsDropsown from "../../Components/AddProductsDropsown";

const initialValues = {
  name: "",
  original_price: "",
  discounted_price: "",
  category_name: "",
  is_stock: false,
  description: "",
  trending: false,
  size: [],
  img: [],
  style: "",
};
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
const Category = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  unisex: "Unisex",
};

const Style = {
  CASUAL: "Casual",
  SPORTS: "Sports",
  ETHNIC: "Ethnic",
  FORMAL: "Formal",
  PARTY: "Party",
  RIDING: "Riding",
};

const ProductForm = () => {
  const sizeOptions = Object.entries(Size).map(([key, value]) => ({
    value: key, // Use the enum key as the value
    label: value, // Use the enum value as the label
  }));

  const categoryOptions = Object.entries(Category).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const styleOptions = Object.entries(Style).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center ">
      <div className="max-w-md mx-auto p-6 bg-rhino-50 rounded-lg shadow-md ">
        <h2 className="text-xl font-semibold mb-4">Product Form</h2>
        <Formik
          initialValues={initialValues}
          //validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <AddproductInputs
                label="Sneaker Name"
                id="name"
                name="name"
                type="text"
                placeholder="Sneaker name"
              />
              <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <AddproductInputs
                  label="Original price"
                  id="original_price"
                  name="original_price"
                  type="number"
                  placeholder="&#8377; price"
                />
                <AddproductInputs
                  label="Discounted Price"
                  id="discounted_price"
                  name="discounted_price"
                  type="number"
                  placeholder="&#8377; discounted price"
                />
              </section>

              <section className="flex space-x-3 py-3 items-center">
                <AddProductCheckBox
                  label="In Stock"
                  name="is_stock"
                  id="is_stock"
                />
                <AddProductCheckBox
                  label="trending"
                  name="trending"
                  id="trending"
                />
              </section>

              <section className="flex flex-col space-y-3 py-3">
                <label className="text-sm font-medium text-scorpion-700">
                  Size (Select all that apply):
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sizeOptions.map((size, key) => (
                    <div key={key} className="flex items-center">
                      <Field
                        type="checkbox"
                        id={size.label} // Unique ID for each checkbox
                        name="size" // Array field name
                        value={size.value} // Value to store in the array
                        className="rounded border-scorpion-300 h-5 w-5 focus:ring-rhino-500 focus:ring-offset-0 focus:outline-none m-2"
                      />
                      <label
                        htmlFor={size.label}
                        className="text-sm text-scorpion-700"
                      >
                        {size.label}
                      </label>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <AddProductsDropsown
                  id="category"
                  name="category_name"
                  label="Category"
                  optionLabel="Select a Category"
                  categoryOptions={categoryOptions}
                />
                <AddProductsDropsown
                  id="style"
                  name="style"
                  label="Style"
                  optionLabel="Select a style"
                  categoryOptions={styleOptions}
                />
              </section>

              <button
                type="submit"
                className="w-full bg-rhino-700 text-scorpion-50 py-2 px-4 rounded-md font-semibold uppercase tracking-wide disabled:bg-scorpion-400 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default ProductForm;
