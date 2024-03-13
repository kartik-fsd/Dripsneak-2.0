import PropTypes from "prop-types";

const HorizontalListItem = ({ label }) => {
  return (
    <li className="py-2 px-3 rounded-lg bg-scorpion-100 text-scorpion-800 hover:bg-scorpion-200">
      <div className="flex items-center">
        <input
          id={`hs-horizontal-list-group-item-checkbox-${label}`}
          name={`hs-horizontal-list-group-item-checkbox-${label}`}
          type="checkbox"
          className="h-4 w-4 text-rhino-600 border-scorpion-300 rounded focus:ring-rhino-500 focus:border-rhino-500"
        />
        <label
          htmlFor={`hs-horizontal-list-group-item-checkbox-${label}`}
          className="ml-2 text-sm font-medium text-scorpion-800 cursor-pointer hover:text-scorpion-600"
        >
          {label}
        </label>
      </div>
    </li>
  );
};

HorizontalListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default HorizontalListItem;
