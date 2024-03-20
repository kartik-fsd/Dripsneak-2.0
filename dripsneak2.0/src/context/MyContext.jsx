import { createContext, useState } from "react";
import Proptypes from "prop-types";
// Create a new context
export const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [searchProduct, setSearchProduct] = useState({});

  const [checkedValues, setCheckedValues] = useState({});

  const handleCheckboxChange = (sectionId, value, checked) => {
    setCheckedValues((prevState) => ({
      ...prevState,
      [sectionId]: {
        ...prevState[sectionId],
        [value]: checked,
      },
    }));
  };

  // Define any functions or methods to update the state
  const setProduct = (data) => {
    setSearchProduct(data);
  };

  return (
    <ProductContext.Provider
      value={{ searchProduct, setProduct, checkedValues, handleCheckboxChange }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
