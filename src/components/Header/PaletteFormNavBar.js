import React from "react";
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
  navButtons: {},
}));

function PaletteFormNavBar({ handleDrawerOpen, handleSubmit, open, palettes }) {

  const classes = useStyles();

  const handleOnClick = () => {
    handleDrawerOpen();
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create Your New Palette
          </Typography>
        </Toolbar>
        <div className={classes.navButtons}>
          <PaletteMetaForm handleSubmit={handleSubmit} palettes={palettes}/>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
}

export default PaletteFormNavBar;