import React, { Fragment, useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function ColorPicker({ addNewColor, allColors, currentColor, changeColor }) {
  const [newName, setNewName] = useState("");

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
    setNewName(e.target.value);
  };

  const handleOnSubmit = () => {
    addNewColor(newName);
    setNewName("");
  };

  return (
    <Fragment>
      <Typography variant="button">Chose Your Colors</Typography>
      <div>
        <Button variant="contained" color="secondary">
          Clear Palette
        </Button>
        <Button variant="contained" color="primary">
          Random Color
        </Button>
      </div>
      <ChromePicker color={currentColor} onChangeComplete={handleChangeColor} />
      <ValidatorForm onSubmit={handleOnSubmit}>
        <TextValidator
          value={newName}
          onChange={handleChangeName}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "The color name already used",
            "This color has been used",
          ]}
        />
        <Button
          style={{ backgroundColor: currentColor }}
          type="submit"
          variant="contained"
        >
          Add Color
        </Button>
      </ValidatorForm>
    </Fragment>
  );
}

export default ColorPicker;
