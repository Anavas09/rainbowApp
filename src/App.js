import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from "./helpers/colorHelper";

function App() {
  const findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  };

  return (
    <Switch>
      <Route exact path="/palette/new" render={()=> <NewPaletteForm />}/>
      <Route
        exact
        path="/"
        render={(routerProps) => (
          <PaletteList palettes={seedColors} {...routerProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routerProps) => {
          const { id } = routerProps.match.params;
          return <Palette palette={generatePalette(findPalette(id))} />;
        }}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routerProps) => {
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
