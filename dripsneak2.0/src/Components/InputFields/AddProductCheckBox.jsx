import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";

function AddProductCheckBox({ label, name, id }) {
  return (
    <div className="flex items-center space-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-scorpion-700 mr-2"
      >
        {label}
      </label>
      <Field
        type="checkbox"
        id={id}
        name={name}
        className="rounded border-scorpion-300 h-5 w-5 focus:ring-rhino-500 focus:ring-offset-0 focus:outline-none"
      />
      <ErrorMessage
        name={id}
        component="div"
        className="text-totem-pole-500 text-sm"
      />
    </div>
  );
}

AddProductCheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AddProductCheckBox;
