import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import Page from "./components/Page";

import UseLocalStorageState from "./hooks/useLocalStorageState";

import { PaletteProvider } from "./context/PaletteContext";

import { generatePalette } from "./helpers/colorHelper";
import seedColors from "./seedColors";

function App() {
  const [palettes] = UseLocalStorageState("palettes", seedColors);

  const findPalette = id => {
    return palettes.find(palette => {
      return palette.id === id;
    });
  };

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={200}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={routeProps => (
                  <Page>
                    <PaletteProvider>
                    <NewPaletteForm
                      {...routeProps}
                    />
                    </PaletteProvider>
                  </Page>
                )}
              />
              <Route
                exact
                path="/"
                render={routerProps => (
                  <Page>
                    <PaletteProvider>
                    <PaletteList
                      {...routerProps}
                    />
                    </PaletteProvider>
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={routerProps => {
                  const { id } = routerProps.match.params;
                  return (
                    <Page>
                      <Palette palette={generatePalette(findPalette(id))} />
                    </Page>
                  );
                }}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={routerProps => {
                  const { paletteId } = routerProps.match.params;
                  return (
                    <Page>
                      <SingleColorPalette
                        colorId={routerProps.match.params.colorId}
                        palette={generatePalette(findPalette(paletteId))}
                      />
                    </Page>
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