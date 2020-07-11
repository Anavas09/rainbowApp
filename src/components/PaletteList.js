import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import MiniPalette from "./MiniPalette";

import PaletteListStyles from "../styles/PaletteListStyles";

function PaletteList({ deletePalette, history, palettes }) {

  const classes = PaletteListStyles();

  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };

  const renderPalettes = palettes.map((palette) => {
    return (
      <MiniPalette
        key={palette.paletteName}
        deletePalette={deletePalette}
        handleClick={() => goToPalette(palette.id)}
        {...palette}
      />
    );
  });

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">New Palette</Link>
        </nav>
        <div className={classes.palettes}>{renderPalettes}</div>
      </div>
    </div>
  );
}

export default withStyles(PaletteListStyles)(PaletteList);
