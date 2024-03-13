import PropTypes from "prop-types";

function AddInput({ name, type, id, placeholder, label }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-scorpion-900"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="bg-scorpion-50 border border-scorpion-300 text-scorpion-900 text-sm rounded-lg focus:ring-rhino-600 focus:border-rhino-600 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
AddInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default AddInput;
