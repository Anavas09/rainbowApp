import React, { createContext } from "react";

import UseLocalStorageState from "../hooks/useLocalStorageState";
import seedColors from "../seedColors";

const PaletteContext = createContext();

function PaletteProvider({ children }) {
  const [palettes, setPalettes] = UseLocalStorageState("palettes", seedColors);

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
        palettes,
        savePalette,
        deletePalette,
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
}

export { PaletteContext, PaletteProvider };