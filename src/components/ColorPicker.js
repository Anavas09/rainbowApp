import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { makeStyles } from "@material-ui/styles";

import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

ColorPicker.defaultProps = {
  maxColors: 20,
};

const useStyles = makeStyles(() => ({
  root: {
    background: "linear-gradient(100deg, rgba(250, 214, 195, 0.8), #b0eae8)",
  },
}));

function ColorPicker({
  addNewColor,
  addRandomColor,
  allColors,
  allPalettes,
  clearColors,
  maxColors,
}) {
  const [currentColor, setCurrentColor] = useState("skyblue");
  const [newColorName, setNewColorName] = useState("");

  const classes = useStyles();

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      allColors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", () =>
      allColors.every(({ color }) => color !== currentColor)
    );
  }, [allColors, currentColor]);

  const handleChangeColor = newColor => {
    setCurrentColor(newColor.hex);
  };

  const handleChangeName = e => {
    setNewColorName(e.target.value);
  };

  const handleOnSubmit = () => {
    const newColor = { color: currentColor, name: newColorName };
    addNewColor(newColor);
    setNewColorName("");
  };

  const handleClearColors = () => {
    clearColors();
  };

  const handleRandomColor = () => {
    //newColors Array with arrays
    const newColors = allPalettes.map(palettes => {
      return palettes.colors;
    });

    //One array with all colors
    const colors = newColors.flat();

    const randNum = Math.floor(Math.random() * colors.length);
    const randColor = colors[randNum];

    addRandomColor(randColor);
  };

  const paletteIsFull = allColors.length >= maxColors;

  return (
    <div className={classes.root}>
      <Typography variant="button">Chose Your Colors</Typography>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClearColors}
        >
          Clear Palette
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          onClick={handleRandomColor}
        >
          Random Color
        </Button>
      </div>
      <ChromePicker color={currentColor} onChangeComplete={handleChangeColor} />
      <ValidatorForm onSubmit={handleOnSubmit}>
        {!paletteIsFull && (
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={handleChangeName}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "The color name already used",
              "This color has been used",
            ]}
          />
        )}
        <Button
          style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
          type="submit"
          variant="contained"
          disabled={paletteIsFull}
        >
          {paletteIsFull ? "Palette Full" : "Add color"}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default ColorPicker;
