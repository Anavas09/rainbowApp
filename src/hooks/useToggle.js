import { useState } from "react";

/**
 * useToggle accept an initial boolean value and change to
 * the opposite value
 * 
 * @param {boolean} initialValue
 * @returns The opposite value and a function to change that value
 * @example useToggle(true) return [false, toggle]
 */
function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState(!state)
  }
  
  //Return a piece of state AND a function to change it
  return [state, toggle];
}

export default useToggle;