import { useState, useEffect, useRef } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Cleanup function to clear previous timeout
    const cleanup = () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };

    // Set a new timeout to update the debounced value
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup previous timeout on value or delay change
    return cleanup;
  }, [value, delay]);

  return debouncedValue;
}
export default useDebounce;
