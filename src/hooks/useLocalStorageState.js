import { useEffect, useState } from "react";

/**
 * Make a piece of state, based off of value in localStorage (or default)
 *
 * @param {string} key
 * The key for the localStorage e.g. localStorage.getItem(key)
 * @param {*} defaultValue
 * If it's nothing in localStorage, set the state to this defaltValue.
 * 
 * @returns
 * A stateful value and a function to update it
 * 
 */
function UseLocalStorageState(key, defaultValue) {
  //Make a piece of state, based off of value in localStorage (or default)
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  //Use useEffect to update localStorage when the state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default UseLocalStorageState;