import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from "./helpers/colorHelper";

function App() {
  const [palettes, setPalettes] = useState(seedColors);

  const findPalette = id => {
    return palettes.find(palette => {
      return palette.id === id;
    });
  };

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={routeProps => <NewPaletteForm saveNewPalette={savePalette} {...routeProps}/>}
      />
      <Route
        exact
        path="/"
        render={routerProps => (
          <PaletteList palettes={palettes} {...routerProps} />
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
