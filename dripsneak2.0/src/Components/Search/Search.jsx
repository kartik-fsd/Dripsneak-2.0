import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../../hook/useDebounce";
import { useProductContext } from "../../context/useMyContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //const [hide, setHide] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const debouncedValue = useDebounce(searchQuery, 300);
  const { setProduct } = useProductContext();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["products", debouncedValue], // Unique query key
    queryFn: () => {
      console.log("fetching");
      if (debouncedValue) {
        return fetch(
          `http://localhost:3000/product/search?query=${searchQuery}`
        ).then((res) => res.json());
      }
      return null;
    },
  });

  const handleClick = (data) => {
    setSearchQuery(data.name);
    setProduct(data);
    setShowSuggestions(false);
    navigate("/search-products");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setShowSuggestions(true);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    refetch(); // Refetch data when search is cleared (optional)
    setShowSuggestions(false);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="pt-2 relative mx-auto text-scorpion-600 ml-4 md:ml-6">
          <input
            className="border-2 border-scorpion-300 bg-scorpion-100 text-scorpion-700 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none border-none w-full md:w-64"
            type="search"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(true)}
            autoComplete="off"
          />
          <button
            type="button"
            className="absolute right-0 top-0 mt-5 mr-4"
            onClick={handleClearSearch}
            disabled={!searchQuery} // Disable clear button when search is empty
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="text-scorpion-950 h-4 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          className={`absolute z-10 w-full md:w-64 mx-5 rounded-lg text-sm text-scorpion-900 focus:outline-none border-none mt-16 bg-rhino-50 shadow-md ${
            data && data.length > 0 ? "block" : "hidden"
          }`} // Conditionally hide based on data length
        >
          {isLoading && (
            <div className="absolute bottom-4 right-4">Loading...</div>
          )}
          {!isLoading && error && (
            <div className="absolute bottom-4 right-4">{error.message}</div>
          )}
          {showSuggestions && data && data.length > 0 && (
            <ul className="py-1 overflow-auto max-h-60">
              <span className="text-sm text-rhino-500 text-center">
                {" "}
                Search for product : {searchQuery}
              </span>

              {data.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 cursor-pointer hover:bg-scorpion-100"
                  onClick={() => handleClick(product)}
                >
                  <div className="flex items-center space-y-2">
                    <img
                      className="w-10 h-10 rounded mx-1"
                      src={product.img}
                      alt={product.name}
                      loading="lazy"
                    ></img>
                    {product.name}
                  </div>
                </li>
              ))}
            </ul>
          )}
          {!data?.length && searchQuery && (
            <div className="px-4 py-2">No results found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
