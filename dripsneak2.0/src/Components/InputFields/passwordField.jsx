import PropTypes from "prop-types";
import { EyeIcon } from "./eye";
import { useState } from "react";

const PasswordField = ({
  id,
  label,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
  onBlur,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-scorpion-900"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          name={name}
          type={isPasswordVisible ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
          className="block w-full rounded-md border-0 px-3 py-2 text-scorpion-900 shadow-sm ring-1 ring-inset ring-scorpion-300 placeholder:text-scorpion-400 focus:ring-2 focus:ring-inset focus:ring-rhino-600 sm:text-sm sm:leading-6"
        />
        <EyeIcon
          isPasswordVisible={isPasswordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      </div>
    </>
  );
};

PasswordField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default PasswordField;
