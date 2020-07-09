import React from "react";
import { SortableElement } from "react-sortable-hoc";
import DeleteForeverIcon from "@material-ui/icons/DeleteForeverSharp";

import useDragableColorBoxStyles from "../styles/DragableColorBoxStyles";

const DragableColorBox = SortableElement(({ color, colorName, removeColor }) => {
  const classes = useDragableColorBoxStyles();

  const handleOnClick = () => {
    removeColor()
  }

  return (
    <div
      className={classes.DragableColorBox}
      style={{
        backgroundColor: color,
      }}
    >
      <div className={classes.boxContent}>
        <span>{colorName}</span>
        <DeleteForeverIcon className={classes.deleteIcon} onClick={handleOnClick}/>
      </div>
    </div>
  );
})

export default DragableColorBox;