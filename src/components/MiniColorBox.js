import React from "react";

import MiniColorBoxStyles from "../styles/MiniColorBoxStyles";

function MiniColorBox({ color }) {
  const classes = MiniColorBoxStyles();

  return (
    <div
      key={color.name}
      className={classes.root}
      style={{ backgroundColor: color.color }}
    ></div>
  );
}

export default MiniColorBox;