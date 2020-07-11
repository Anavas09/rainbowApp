import { makeStyles } from "@material-ui/core/styles";
import sizes from "../sizes";

const useStyles = makeStyles(() => ({
  Navbar: {
    alignItems: "center",
    display: "flex",
    height: "6vh",
    justifyContent: "flex-start",
  },
  logo: {
    alignItems: "center",
    backgroundColor: "#eceff1",
    display: "flex",
    fontFamily: "Roboto",
    fontSize: "22px",
    height: "100%",
    padding: "0 13px",
    marginRight: "15px",
    "& a": {
      color: "black",
      textDecoration: "none",
    },
    [sizes.down("xs")]: {
      display: "none"
    },
  },
  slider: {
    display: "inline-block",
    margin: "0 10px",
    width: "340px",
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      border: "2px solid green",
      boxShadow: "none",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px",
      outline: "none",
      width: "13px",
    },
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    [sizes.down("xs")]: {
      width: "120px"
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
}));

export default useStyles;