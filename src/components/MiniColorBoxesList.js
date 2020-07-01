import React from "react";
import MiniColorBox from "./MiniColorBox";

function MiniColorBoxesList({ colors }) {
  return colors.map((color) => {
    return <MiniColorBox key={color.name} color={color}/>;
  });
}

export default MiniColorBoxesList;