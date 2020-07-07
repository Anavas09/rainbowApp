import React, { Fragment, useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

ColorPicker.defaultProps = {
  maxColors: 20,
};

function ColorPicker({
  addNewColor,
  addRandomColor,
  allColors,
  allPalettes,
  currentColor,
  changeColor,
  clearColors,
  maxColors,
}) {
  const [newColorName, setNewColorName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      allColors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", () =>
      allColors.every(({ color }) => color !== currentColor)
    );
  }, [allColors, currentColor]);

  const handleChangeColor = newColor => {
    changeColor(newColor);
  };

  const handleChangeName = e => {
    setNewColorName(e.target.value);
  };

  const handleOnSubmit = () => {
    addNewColor(newColorName);
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
    <Fragment>
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
    </Fragment>
  );
}

export default ColorPicker;
