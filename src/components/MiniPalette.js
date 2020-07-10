import React from "react";

import DeleteIcon from "@material-ui/icons/DeleteForeverSharp";

import MiniColorBoxesList from "./MiniColorBoxesList";

import MiniPaletteStyles from "../styles/MiniPaletteStyles";

function MiniPalette({ colors, deletePalette, emoji, handleClick, id, paletteName }) {
  const classes = MiniPaletteStyles();

  const handleDelete = e => {
    e.stopPropagation()
    deletePalette(id)
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: "all 0.3s ease-in-out" }}
        onClick={handleDelete}
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
