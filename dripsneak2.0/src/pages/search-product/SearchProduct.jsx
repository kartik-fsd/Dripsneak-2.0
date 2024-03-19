import ProductSearchCardDetails from "../../Components/Search/SearchProductDetailCard";
import { useProductContext } from "../../context/useMyContext";

function SearchProduct() {
  const { searchProduct } = useProductContext();
  console.log(searchProduct);
  return (
    <div className="flex overflow-x-auto space-x-4 py-4 px-2">
      <ProductSearchCardDetails product={searchProduct} />
    </div>
  );
}

export default SearchProduct;
