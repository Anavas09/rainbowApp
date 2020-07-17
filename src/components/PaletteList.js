import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import red from "@material-ui/core/colors/red";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import MiniPalette from "./MiniPalette";

import PaletteListStyles from "../styles/PaletteListStyles";
import useToggle from "../hooks/useToggle";

function PaletteList({ deletePalette, history, palettes }) {
  const [openDeleteDialog, toogleOpenDeleteDialog] = useToggle(false);
  const [delettePaleteId, setDeletePaletteId] = useState("");

  const classes = PaletteListStyles();

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  const openDialog = paletteId => {
    toogleOpenDeleteDialog(true);
    setDeletePaletteId(paletteId);
  };

  const closeDialog = () => {
    toogleOpenDeleteDialog(false);
    setDeletePaletteId("");
  };

  const handleDelete = () => {
    deletePalette(delettePaleteId);
    closeDialog();
  };

  const renderPalettes = (
    <TransitionGroup className={classes.palettes}>
      {palettes.map(palette => {
        return (
          <CSSTransition
            key={palette.paletteName}
            classNames="fade"
            timeout={500}
          >
            <MiniPalette
              openDialog={openDialog}
              goToPalette={goToPalette}
              {...palette}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>Your Palettes</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        {renderPalettes}
      </div>
      <Dialog
        open={openDeleteDialog}
        onClose={closeDialog}
        aria-labelledby="delete-dialog-title"
      >
        <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={closeDialog}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default PaletteList;