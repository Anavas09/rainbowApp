import React from "react";

import DeleteIcon from "@material-ui/icons/DeleteForeverSharp";

import MiniColorBoxesList from "./MiniColorBoxesList";

import MiniPaletteStyles from "../styles/MiniPaletteStyles";

function MiniPalette({ colors, emoji, handleClick, paletteName }) {
  const classes = MiniPaletteStyles();

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
        />
      </div>
      <div className={classes.colors}>
        <MiniColorBoxesList colors={colors} />
      </div>
      <h5 className={classes.title}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;
