import PropTypes from "prop-types";

export default function ProductMeta({ category_name, style }) {
  return (
    <div className="flex text-xs font-medium text-gray-500 uppercase items-center mb-3 space-x-3">
      <span>{category_name}</span>
      <span>|</span>
      <span>{style}</span>
    </div>
  );
}

ProductMeta.propTypes = {
  category_name: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
