import React, { useContext, useState } from "react";
import clsx from "clsx";
import arrayMove from "array-move";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ColorPicker from "./ColorPicker";
import DragableColorList from "./DragableColorList";
import PaletteFormNavBar from "./Header/PaletteFormNavBar";

import { PaletteContext } from "../context/PaletteContext.context";

import NewPaletteFormStyles from "../styles/NewPaletteFormStyles";

import seedColors from "../seedColors";
import useToggle from "../hooks/useToggle";

function NewPaletteForm({ history }) {
  const [open, toggleOpen] = useToggle(false);
  const [colors, setColors] = useState(seedColors[0].colors);

  const { savePalette } = useContext(PaletteContext);

  const classes = NewPaletteFormStyles();

  const handleDrawerOpen = () => {
    toggleOpen(true);
  };

  const handleDrawerClose = () => {
    toggleOpen(false);
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
    savePalette(newPalette);
    history.push("/");
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const handleClearColors = () => {
    setColors([]);
  };

  const hadColors = colors.length > 0;

  return (
    <div className={classes.root}>
      <PaletteFormNavBar
        handleDrawerOpen={handleDrawerOpen}
        handleSubmit={handleSubmit}
        open={open}
        hadColors={hadColors}
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
          allColors={colors}
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