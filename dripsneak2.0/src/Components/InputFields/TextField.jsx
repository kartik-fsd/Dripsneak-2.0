import PropTypes from "prop-types";
import { ErrorComponent } from "../../pages/SignUp";

function TextField({
  label,
  name,
  id,
  placeholder,
  onChange,
  onBlur,
  value,
  disabled,
  error,
  touched,
}) {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={name}
        className="block text-xs font-medium leading-6 text-scorpion-900"
      >
        {label}
      </label>
      <textarea
        className={`block w-full rounded-md border-0 px-3 py-2 text-scorpion-900 shadow-sm ring-1 ring-inset ring-scorpion-300 placeholder:text-scorpion-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rhino-600 sm:text-xs sm:leading-6
      ${
        !disabled
          ? "cursor-text"
          : "bg-scorpion-100 text-opacity-70 text-scorpion-600 cursor-not-allowed"
      }
      `}
        name={name}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
      />
      {error[name] && touched[name] && <ErrorComponent error={error[name]} />}
    </div>
  );
}
TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};
export default TextField;
