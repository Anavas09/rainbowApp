import React, { createContext, useReducer } from "react";

import paletteReducer from "../reducers/palette.reducer";
import UseLocalStorageState from "../hooks/useLocalStorageState";
import seedColors from "../seedColors";

const PaletteContext = createContext();

function PaletteProvider({ children }) {
  const [palettes, setPalettes] = UseLocalStorageState("palettes", seedColors);

  const [allPalettes, dispatch] = useReducer(paletteReducer, palettes);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = paletteId => {
    const newPalettes = palettes.filter(palette => palette.id !== paletteId);
    setPalettes(newPalettes);
  };

  return (
    <PaletteContext.Provider
      value={{
        allPalettes,
        dispatch
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
}

export { PaletteContext, PaletteProvider };
