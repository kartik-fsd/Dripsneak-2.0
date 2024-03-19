import { createContext, useState } from "react";
import Proptypes from "prop-types";
// Create a new context
export const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [searchProduct, setSearchProduct] = useState({});

  // Define any functions or methods to update the state
  const setProduct = (data) => {
    setSearchProduct(data);
  };

  return (
    <ProductContext.Provider value={{ searchProduct, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
