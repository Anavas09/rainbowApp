import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import Page from "./components/Page";

import { PaletteContext } from "./context/PaletteContext.context";

import { generatePalette } from "./helpers/colorHelper";

function App() {
  const allPalettes = useContext(PaletteContext);  

  const findPalette = id => {
    return allPalettes.find(palette => {
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
                    <NewPaletteForm {...routeProps} />
                  </Page>
                )}
              />
              <Route
                exact
                path="/"
                render={routerProps => (
                  <Page>
                    <PaletteList {...routerProps} />
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