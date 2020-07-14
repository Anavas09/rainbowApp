import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";

import seedColors from "./seedColors";
import { generatePalette } from "./helpers/colorHelper";

import "./App.css"

const storagePalettes = JSON.parse(window.localStorage.getItem("palettes"));

function App() {
  const [palettes, setPalettes] = useState(storagePalettes || seedColors);

  useEffect(() => {
    syncWithLocalStorage();
  });

  const findPalette = id => {
    return palettes.find(palette => {
      return palette.id === id;
    });
  };

  const syncWithLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  };

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = paletteId => {
    const newPalettes = palettes.filter(palette => palette.id !== paletteId);
    setPalettes(newPalettes);
  };

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={200}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={routeProps => (
                  <div className="page">
                    <NewPaletteForm
                      saveNewPalette={savePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/"
                render={routerProps => (
                  <div className="page">
                    <PaletteList
                      palettes={palettes}
                      deletePalette={deletePalette}
                      {...routerProps}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={routerProps => {
                  const { id } = routerProps.match.params;
                  return (
                    <div className="page">
                      <Palette palette={generatePalette(findPalette(id))} />
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={routerProps => {
                  const { paletteId } = routerProps.match.params;
                  return (
                    <div className="page">
                      <SingleColorPalette
                        colorId={routerProps.match.params.colorId}
                        palette={generatePalette(findPalette(paletteId))}
                      />
                    </div>
                  );
                }}
              />
              <Redirect to="/" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
