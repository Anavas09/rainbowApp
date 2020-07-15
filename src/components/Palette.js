import React, { useState } from "react";

import ColorBox from "./ColorBox";
import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";

import PaletteStyles from "../styles/PaletteStyles";

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const classes = PaletteStyles();

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  const changeFormat = (value) => {
    setFormat(value);
  };

  const colorBoxes = palette.colors[level].map((color) => {
    return (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        moreUrl={`/palette/${palette.id}/${color.id}`}
        showingFullPalette
      />
    );
  });

  return (
    <div className={classes.Palette}>
      <NavBar
        changeformat={changeFormat}
        changelevel={changeLevel}
        level={level}
        showSlider
      />
      <div className={classes.paletteColors}>{colorBoxes}</div>
      <Footer emoji={palette.emoji} palettename={palette.paletteName} />
    </div>
  );
}

export default Palette;