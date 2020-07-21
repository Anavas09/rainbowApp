import React, { useContext, useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { PaletteContext } from "../context/PaletteContext.context";

import ColorPickerStyles from "../styles/ColorPickerStyles";

ColorPicker.defaultProps = {
  maxColors: 20,
};

function ColorPicker({ addNewColor, allColors, clearColors, maxColors }) {
  const [currentColor, setCurrentColor] = useState("skyblue");
  const [newColorName, setNewColorName] = useState("");

  const { palettes } = useContext(PaletteContext);

  const classes = ColorPickerStyles();

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
    const newColors = palettes.map(palette => {
      return palette.colors;
    });

    //One array with all colors
    const colors = newColors.flat();

    let randNum;
    let randColor;

    //Verificate if randColor is already use
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      randNum = Math.floor(Math.random() * colors.length);
      randColor = colors[randNum];

      isDuplicateColor = allColors.some(color => color.name === randColor.name);
    }

    addNewColor(randColor);
  };

  const paletteIsFull = allColors.length >= maxColors;

  return (
    <div className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Chose Your Colors
      </Typography>
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={handleClearColors}
        >
          Clear Palette
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          onClick={handleRandomColor}
        >
          Random Color
        </Button>
      </div>
      <ChromePicker
        color={currentColor}
        className={classes.picker}
        onChangeComplete={handleChangeColor}
      />
      <ValidatorForm onSubmit={handleOnSubmit} instantValidate={false}>
        {!paletteIsFull && (
          <TextValidator
            value={newColorName}
            className={classes.colorNameInput}
            margin="normal"
            name="newColorName"
            variant="filled"
            label="Color Name"
            onChange={handleChangeName}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "This color name already used",
              "This color has been used",
            ]}
          />
        )}
        <Button
          style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
          type="submit"
          variant="contained"
          disabled={paletteIsFull}
          className={classes.addColor}
        >
          {paletteIsFull ? "Palette Full" : "Add color"}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default ColorPicker;
