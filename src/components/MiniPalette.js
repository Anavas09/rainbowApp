import React from "react";
import { withStyles } from "@material-ui/styles";
import MiniColorBoxesList from "./MiniColorBoxesList";

import MiniPaletteStyles from "../styles/MiniPaletteStyles";

function MiniPalette({ colors, classes, emoji, handleClick, paletteName }) {

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>
        <MiniColorBoxesList colors={colors}/>
      </div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(MiniPaletteStyles)(MiniPalette);
