import React, { createContext } from "react";

import paletteReducer from "../reducers/palette.reducer";
import seedColors from "../seedColors";
import UseLocalStorageReducer from "../hooks/useLocalStorageReducer";

const PaletteContext = createContext();

const DispatchContext = createContext();

function PaletteProvider({ children }) {
  const [palettes, dispatch] = UseLocalStorageReducer("palettes", seedColors, paletteReducer);

  return (
    <PaletteContext.Provider value={palettes}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </PaletteContext.Provider>
  );
}

export { DispatchContext, PaletteContext, PaletteProvider };
