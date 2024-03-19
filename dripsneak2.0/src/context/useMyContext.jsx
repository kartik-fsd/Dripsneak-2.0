import { useContext } from "react";
import { ProductContext } from "./MyContext";

export const useProductContext = () => {
  return useContext(ProductContext);
};
