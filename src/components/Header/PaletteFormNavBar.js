import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";

import PaletteIcon from "@material-ui/icons/Palette";
import PaletteMetaForm from "../PaletteMetaForm";

import useToggle from "../../hooks/useToggle";

import PaletteFormNavBarStyles from "../../styles/Header/PaletteFormNavBarStyles";

function PaletteFormNavBar({
  hadColors,
  handleDrawerOpen,
  handleSubmit,
  open,
}) {
  const [showDialog, toggleShowDialog] = useToggle(false);

  const classes = PaletteFormNavBarStyles();

  const handleOnClick = () => {
    handleDrawerOpen();
  };

  const handleClickOpen = () => {
    toggleShowDialog(true);
  };

  const hideDialog = () => {
    toggleShowDialog(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleOnClick}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <PaletteIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create Your New Palette
          </Typography>
        </Toolbar>
        <div className={classes.navButtons}>
          <Link to="/">
            <Button
              className={classes.navButton}
              variant="contained"
              color="secondary"
            >
              Back
            </Button>
          </Link>
          <Button
            className={classes.navButton}
            color="primary"
            variant="contained"
            onClick={handleClickOpen}
            disabled={!hadColors}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {showDialog && (
        <PaletteMetaForm
          handleSubmit={handleSubmit}
          hideDialog={hideDialog}
          handleClickOpen={handleClickOpen}
          showDialog
        />
      )}
    </div>
  );
}

export default PaletteFormNavBar;