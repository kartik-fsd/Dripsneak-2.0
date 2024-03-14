import { Field } from "formik";
import PropTypes from "prop-types";

function AddProductsDropsown({
  categoryOptions,
  name,
  optionLabel,
  id,
  label,
}) {
  return (
    <div className="flex flex-col space-y-3 py-3">
      <label htmlFor={id} className="text-sm font-medium text-scorpion-700">
        {label}
      </label>
      <Field
        as="select"
        id={id}
        name={name}
        className="rounded-md border border-scorpion-300 p-2 w-full focus:outline-none focus:ring-rhino-500 focus:border-rhino-500"
      >
        <option value="" className="text-scorpion-300">
          {optionLabel}
        </option>
        {categoryOptions.map((category, key) => (
          <option key={key} value={category.value}>
            {category.label}
          </option>
        ))}
      </Field>
    </div>
  );
}

AddProductsDropsown.propTypes = {
  categoryOptions: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  optionLabel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AddProductsDropsown;
