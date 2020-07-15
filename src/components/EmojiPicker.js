import React, { useState } from "react";
import { Picker } from "emoji-mart";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import "emoji-mart/css/emoji-mart.css";

function EmojiPicker({
  handleOnClose,
  hideEmojiPicker,
  savePalette,
  showEmojiPicker,
}) {
  const [paletteEmoji, setPaletteEmoji] = useState("🎨");

  const handleClose = () => {
    handleOnClose();
  };

  const backToDialog = () => {
    hideEmojiPicker();
  };

  const handleOnSelect = emoji => {
    setPaletteEmoji(emoji.native);
  };

  const handleOnClick = () => {
    savePalette(paletteEmoji);
  };

  return (
    <Dialog open={showEmojiPicker} onClose={handleClose}>
      <DialogTitle>Chose an emoji</DialogTitle>
      <Picker title="Pick a emoji for your palette" onSelect={handleOnSelect} />
      <DialogActions>
        <Button onClick={backToDialog} variant="contained" color="secondary">
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleOnClick}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EmojiPicker;