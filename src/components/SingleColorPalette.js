import React, { useState } from "react";
import { Link } from "react-router-dom";
import SingleColorPaletteStyles from "../styles/SingleColorPaletteStyles";

import ColorBox from "./ColorBox";
import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";

function SingleColorPalette({ colorId, palette }) {
  const [format, setFormat] = useState("hex");

  const classes = SingleColorPaletteStyles();

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (const key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  };

  const [shades] = useState(gatherShades(palette, colorId));

  const changeFormat = (value) => {
    setFormat(value);
  };

  const renderColorBoxes = shades.map((color) => {
    return (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        showingFullPalette={false}
      />
    );
  });

  return (
    <div className={`SingleColorPalette ${classes.Palette}`}>
      <NavBar changeformat={changeFormat} showSlider={false} />
      <div className={classes.paletteColors}>
        {renderColorBoxes}
        <div className={classes.SingleColorBox}>
          <Link to={`/palette/${palette.id}`} className={classes.backButton}>GO BACK</Link>
        </div>
      </div>
      <Footer palettename={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}

export default SingleColorPalette;