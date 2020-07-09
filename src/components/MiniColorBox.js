import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-block",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-4px",
    position: "relative",
    width: "20%"
  }
}));

function MiniColorBox({ color }) {
  const classes = useStyles();

  return (
    <div
      key={color.name}
      className={classes.root}
      style={{ backgroundColor: color.color }}
    ></div>)
}

export default MiniColorBox;