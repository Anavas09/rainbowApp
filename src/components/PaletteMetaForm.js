import React, { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function PaletteMetaForm({ handleSubmit, palettes, showDialog }) {
  const [open, setOpen] = useState(showDialog);
  const [newPaletteName, setNewPaletteName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnSubmit = () => {
    handleSubmit(newPaletteName);
  };

  const handleChange = e => {
    setNewPaletteName(e.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={handleOnSubmit}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new colors palette. Make sure it's
            unique
          </DialogContentText>
          <TextValidator
            label="Palette Name"
            name="newPaletteName"
            fullWidth
            margin="normal"
            value={newPaletteName}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={["Enter Palette Name", "Palette Name already used"]}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save Button
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}

export default PaletteMetaForm;
