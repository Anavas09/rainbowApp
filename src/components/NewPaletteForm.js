import React, { useState } from "react";
import clsx from "clsx";
import arrayMove from "array-move";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ColorPicker from "./ColorPicker";
import DragableColorList from "./DragableColorList";
import PaletteFormNavBar from "./Header/PaletteFormNavBar";

import useStyles from "../styles/NewPaletteFormStyles";

import seedColors from "../seedColors";

function NewPaletteForm({ history, palettes, saveNewPalette }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(seedColors[0].colors);

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

  const handleSubmit = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = colors;
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
          distance={10}
        />
      </main>
    </div>
  );
}

export default NewPaletteForm;