import PropTypes from "prop-types";

const DropdownBar = ({ name, label, options, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-sm font-medium text-scorpion-900">
        {label}
      </label>
      <select
        id={name}
        className="bg-scorpion-50 mt-1 border border-scorpion-300 text-scorpion-900 text-sm rounded-lg focus:ring-rhino-500 focus:border-rhino-500 block w-full p-3"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

DropdownBar.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.required, // Ensure value is required
  onChange: PropTypes.func, // Optional callback for handling changes
};

export default DropdownBar;
