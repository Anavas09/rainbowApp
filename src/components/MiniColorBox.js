import React from 'react';
import { withStyles } from "@material-ui/styles";

const style = {
  root: {
    display: "inline-block",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-3.5px",
    position: "relative",
    width: "20%"
  }
}

function MiniColorBox({ classes, color }) {
  return (
    <div
      key={color.name}
      className={classes.root}
      style={{ backgroundColor: color.color }}
    ></div>)
}

export default withStyles(style)(MiniColorBox);