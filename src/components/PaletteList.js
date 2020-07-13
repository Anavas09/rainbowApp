import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import MiniPalette from "./MiniPalette";

import PaletteListStyles from "../styles/PaletteListStyles";

function PaletteList({ deletePalette, history, palettes }) {
  const classes = PaletteListStyles();

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  const renderPalettes = (
    <TransitionGroup className={classes.palettes}>
      {palettes.map(palette => {
        return (
          <CSSTransition
            key={palette.paletteName}
            classNames="fade"
            timeout={500}
          >
            <MiniPalette
              deletePalette={deletePalette}
              handleClick={() => goToPalette(palette.id)}
              {...palette}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">New Palette</Link>
        </nav>
        {renderPalettes}
      </div>
    </div>
  );
}

export default PaletteList;