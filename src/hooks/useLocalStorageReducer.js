import { useEffect, useReducer } from "react";

/**
 * Make a piece of state, based off of value in localStorage (or default)
 *
 * @param {string} key
 * The key for the localStorage e.g. localStorage.getItem(key)
 * @param {*} defaultValue
 * If it's nothing in localStorage, set the state to this defaltValue.
 * @param {*} reducer
 * The reducer for storage the state
 * 
 * @returns
 * A stateful value and a function to update it
 *
 */
function UseLocalStorageReducer(key, defaultValue, reducer) {
  //Make a piece of state, based off of value in localStorage (or default)
  const [state, dispatch] = useReducer(reducer, defaultValue, ()=> {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      value = defaultValue;
    }
    return value;
  })

  //Use useEffect to update localStorage when the state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};

export default UseLocalStorageReducer;