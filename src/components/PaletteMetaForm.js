import React, { useEffect, useState  } from 'react';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function PaletteMetaForm({ handleSubmit, palettes }) {
  const [open, setOpen] = useState(false);
  const [newPaletteName, setNewPaletteName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOnSubmit = () => {
    handleSubmit(newPaletteName);
  };

  const handleChange = e => {
    setNewPaletteName(e.target.value);
  };

  return (
    <div>
      <Button color="primary" variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Suscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bad Bunny
          </DialogContentText>
          <ValidatorForm onSubmit={handleOnSubmit}>
            <TextValidator
              label="Palette Name"
              name="newPaletteName"
              value={newPaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "Palette Name already used",
              ]}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Button
            </Button>
          </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PaletteMetaForm;