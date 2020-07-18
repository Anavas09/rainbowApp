import { useState } from "react";

/**
 * @param {string} initialValue
 *
 * @returns The input value.
 * A function to change the input value and
 * a function to reset the input value
 */
export default initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};
