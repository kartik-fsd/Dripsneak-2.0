import PropTypes from "prop-types";

function InputBar({
  label,
  id,
  name,
  type,
  autoComplete,
  placeholder,
  onBlur,
  onChange,
  value,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required
          className="block w-full rounded-md border-0 px-3  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rhino-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}

InputBar.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputBar;
