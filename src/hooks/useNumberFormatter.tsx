import { useMemo } from "react";

// Custom hook for formatting numbers
const useNumberFormatter = (num: number): string | number => {
  const formattedNumber = useMemo(() => {
    const formatNumber = (value: number): string | number => {
      if (Math.abs(value) >= 1.0e9) {
        return (Math.sign(value) * (Math.abs(value) / 1.0e9)).toFixed(0) + "B";
      } else if (Math.abs(value) >= 1.0e6) {
        return (Math.sign(value) * (Math.abs(value) / 1.0e6)).toFixed(0) + "M";
      } else if (Math.abs(value) >= 1.0e3) {
        return (Math.sign(value) * (Math.abs(value) / 1.0e3)).toFixed(0) + "K";
      } else {
        return Math.sign(value) * Math.abs(value);
      }
    };

    return formatNumber(num);
  }, [num]);

  return formattedNumber;
};

export default useNumberFormatter;
