import PropTypes from "prop-types";
function Legend({ header, btnLabel, aria, onEditToggle, fieldName }) {
  return (
    <legend className="w-full flex justify-between text-md font-bold leading-9 tracking-tight text-scorpion-900">
      <span>{header}</span>
      <button
        type="button"
        className="bg-transparent hover:bg-rhino-500 text-rhino-700 text-sm hover:text-white py-1 px-3 border border-rhino-500 hover:border-transparent rounded"
        aria-label={aria}
        onClick={() => onEditToggle(fieldName)}
      >
        {btnLabel}
      </button>
    </legend>
  );
}

Legend.propTypes = {
  header: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired,
  aria: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  onEditToggle: PropTypes.func.isRequired,
};
export default Legend;
