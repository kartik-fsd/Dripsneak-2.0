import PropTypes from "prop-types";
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Field } from "formik";

const EditableField = ({ label, type, name, value, onChange, as }) => {
  //const [editable, setEditable] = useState(!readOnly);
  // Inside your functional component
  const [editable, setEditable] = useState({
    firstName: false,
    lastName: false,
    email: false,
    dateOfBirth: false,
    shippingAddress: false,
    billingAddress: false,
  });

  const handleEditToggle = (fieldName) => {
    setEditable((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  return (
    <>
      <label className="text-sm text-rhino-900 font-medium block mb-2">
        {label}
      </label>
      <section className="relative flex items-center space-x-4">
        {type === "date" ? (
          <Field
            as={as}
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className={`mt-1 px-2 py-3 block w-full text-scorpion-800 border border-scorpion-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rhino-500 ${
              editable[name]
                ? "cursor-text"
                : "bg-scorpion-100 text-opacity-70 text-scorpion-600 cursor-not-allowed"
            }`}
            readOnly={!editable[name]}
          />
        ) : (
          <Field
            type={type}
            name={name}
            id={name}
            className={`mt-1 px-2 py-3 block w-full border border-scorpion-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rhino-500 ${
              editable[name]
                ? "text-scorpion-800 cursor-text"
                : "bg-scorpion-100 text-opacity-70 text-scorpion-600 cursor-not-allowed"
            }`}
          />
        )}
        <PencilIcon
          className="h-6 w-6 cursor-pointer text-scorpion-700 active:text-rhino-500"
          onClick={() => handleEditToggle(name)}
        />
      </section>
    </>
  );
};

EditableField.propTypes = {
  label: PropTypes.string.isRequired,
  as: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "number",
    "date",
    "textarea",
  ]).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default EditableField;