import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import { MenuItem, Select, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";

import NavbarStyles from "../../styles/Header/NavbarStyles";

import "rc-slider/assets/index.css";

function NavBar({ changelevel, changeformat, classes, level, showSlider }) {
  const [format, setFormat] = useState("hex");
  const [snackopen, setSnackOpen] = useState(false);

  const changeColorFormat = (e) => {
    setFormat(e.target.value);
    changeformat(e.target.value);
    setSnackOpen(true);
  };

  const closeSnackBar = () => {
    setSnackOpen(false);
  };

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">raimbow</Link>
      </div>
      {showSlider &&
      <div>
        <span>Level: {level}</span>
        <div className={classes.slider}>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changelevel}
          />
        </div>
      </div>}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={changeColorFormat}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - (255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - (255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        open={snackopen}
        autoHideDuration={3000}
        onClose={closeSnackBar}
        message={<span id="message-id">Change format to {format.toUpperCase()}</span>}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        action={[
          <IconButton
            onClick={closeSnackBar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </header>
  );
}

export default withStyles(NavbarStyles)(NavBar);