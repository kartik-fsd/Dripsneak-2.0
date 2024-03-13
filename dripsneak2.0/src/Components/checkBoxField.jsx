import PropTypes from "prop-types";

const SizeCheckField = ({ label, options, onChange }) => {
  return (
    <div className="flex flex-col mb-4 space-y-4">
      <label htmlFor={label} className="text-sm font-medium text-scorpion-900">
        {label}
      </label>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={option.value}
              type="checkbox"
              name={label}
              value={option.value}
              className="form-checkbox text-rhino-600 h-5 w-5 mr-2 border border-scorpion-300 rounded"
              onChange={onChange}
            />
            <label
              htmlFor={option.value}
              className="ms-3.5 block w-max text-sm text-scorpion-800"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

SizeCheckField.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
};

export default SizeCheckField;
