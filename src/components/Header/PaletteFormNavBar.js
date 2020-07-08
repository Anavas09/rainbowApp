import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import PaletteMetaForm from "../PaletteMetaForm";

const drawerWidth = 340; //px

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    alignItems: "center",
    background: "linear-gradient(100deg, rgba(250, 214, 195, 0.8), #b0eae8)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  navButtons: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    }
  },
  navButton: {
    margin: "0 0.5rem",
  }
}));

function PaletteFormNavBar({ handleDrawerOpen, handleSubmit, open, palettes }) {
  const [showDialog, setShowDialog] = useState(false)
  const classes = useStyles();

  const handleOnClick = () => {
    handleDrawerOpen();
  };

  const handleClickOpen = () => {
    setShowDialog(true)
  }

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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create Your New Palette
          </Typography>
        </Toolbar>
        <div className={classes.navButtons}>
          <Link to="/">
            <Button className={classes.navButton} variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
          <Button className={classes.navButton} color="primary" variant="contained" onClick={handleClickOpen}>
            Save
          </Button>
        </div>
      </AppBar>
      {showDialog && <PaletteMetaForm handleSubmit={handleSubmit} palettes={palettes} showDialog/>}
    </div>
  );
}

export default PaletteFormNavBar;