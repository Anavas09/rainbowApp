import React, { useState } from "react";
import clsx from "clsx";
import arrayMove from "array-move";

import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ColorPicker from "./ColorPicker";
import DragableColorList from "./DragableColorList";
import PaletteFormNavBar from "./Header/PaletteFormNavBar";

const drawerWidth = 340; //px

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "linear-gradient(100deg, rgba(250, 214, 195, 0.8), #b0eae8)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function NewPaletteForm({ history, palettes, saveNewPalette }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(palettes[0].colors);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = newColor => {
    setColors([...colors, newColor]);
  };

  const removeColor = colorName => {
    setColors(colors.filter(color => color.name !== colorName));
  };

  const handleSubmit = newPaletteName => {
    const newPalette = {
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      paletteName: newPaletteName,
      colors,
    };
    saveNewPalette(newPalette);
    history.push("/");
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const handleClearColors = () => {
    setColors([]);
  };

  const addRandomColor = color => {
    setColors([...colors, color]);
  };

  return (
    <div className={classes.root}>
      <PaletteFormNavBar
        classes={classes}
        handleDrawerOpen={handleDrawerOpen}
        handleSubmit={handleSubmit}
        open={open}
        palettes={palettes}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ColorPicker
          addNewColor={addNewColor}
          addRandomColor={addRandomColor}
          allColors={colors}
          allPalettes={palettes}
          clearColors={handleClearColors}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DragableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

export default NewPaletteForm;