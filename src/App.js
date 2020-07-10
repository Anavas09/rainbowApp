import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from "./helpers/colorHelper";

const storagePalettes = JSON.parse(window.localStorage.getItem("palettes"));

function App() {
  const [palettes, setPalettes] = useState(storagePalettes || seedColors);
  
  useEffect(() => {
    syncWithLocalStorage()
  });

  const findPalette = id => {
    return palettes.find(palette => {
      return palette.id === id;
    });
  };

  const syncWithLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes))
  }

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = paletteId => {
    alert(paletteId)
    const newPalettes = palettes.filter(palette => palette.id !== paletteId)
    setPalettes(newPalettes);
  }

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={routeProps => <NewPaletteForm saveNewPalette={savePalette} palettes={palettes} {...routeProps}/>}
      />
      <Route
        exact
        path="/"
        render={routerProps => (
          <PaletteList palettes={palettes} deletePalette={deletePalette} {...routerProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={routerProps => {
          const { id } = routerProps.match.params;
          return <Palette palette={generatePalette(findPalette(id))} />;
        }}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={routerProps => {
          const { paletteId } = routerProps.match.params;
          return (
            <SingleColorPalette
              colorId={routerProps.match.params.colorId}
              palette={generatePalette(findPalette(paletteId))}
            />
          );
        }}
      />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
