import React from "react";

import DeleteIcon from "@material-ui/icons/DeleteForeverSharp";

import MiniColorBoxesList from "./MiniColorBoxesList";

import MiniPaletteStyles from "../styles/MiniPaletteStyles";

function MiniPalette({ colors, openDialog, emoji, handleClick, id, paletteName }) {
  const classes = MiniPaletteStyles();

  const handleOnClick = e => {
    e.stopPropagation()
    openDialog(id)
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: "all 0.3s ease-in-out" }}
        onClick={handleOnClick}
      />
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
