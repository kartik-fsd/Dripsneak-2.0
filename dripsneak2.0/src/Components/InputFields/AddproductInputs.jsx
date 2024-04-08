import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";

function AddproductInputs({ label, name, id, type, placeholder }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-scorpion-700"
      >
        {label}
      </label>
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="mt-1 p-2 w-full border rounded-md"
      />
      <ErrorMessage
        name={id}
        component="div"
        className="text-totem-pole-500 text-sm"
      />
    </div>
  );
}
AddproductInputs.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default AddproductInputs;
