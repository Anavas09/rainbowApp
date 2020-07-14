import React, { useEffect, useState, Fragment } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EmojiPicker from "./EmojiPicker";

function PaletteMetaForm({
  handleSubmit,
  hideDialog,
  palettes,
}) {
  const [newPaletteName, setNewPaletteName] = useState("");
  const [stage, setStage] = useState("dialog");

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

  const handleClose = () => {
    hideDialog();
  };

  const handleOnSubmit = emoji => {
    const newPalette = {paletteName: newPaletteName, emoji }
    handleSubmit(newPalette);
    setStage("");
  };

  const handleChange = e => {
    setNewPaletteName(e.target.value);
  };

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  const hideEmojiPicker = () => {
    setStage("dialog");
  };

  return (
    <Fragment>
      <Dialog
        open={stage === "dialog"}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
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
              errorMessages={[
                "Enter Palette Name",
                "Palette Name already used",
              ]}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={showEmojiPicker}
            >
              Next
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
      {stage === "emoji" && (
        <EmojiPicker
          handleOnClose={handleClose}
          savePalette={handleOnSubmit}
          hideEmojiPicker={hideEmojiPicker}
          showEmojiPicker
        />
      )}
    </Fragment>
  );
}

export default PaletteMetaForm;
