import { useState } from "react";

/**
 * 
 * @param {boolean} initialValue 
 * useToggle accept an initial boolean value and change to
 * the opposite value
 * 
 * e.g.
 * initialValue = true -->
 * useToggle(true) return false 
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