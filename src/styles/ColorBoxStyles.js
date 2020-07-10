import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  ColorBox: {
    cursor: "pointer",
    display: "inline-block",
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    marginBottom: "-4.5px",
    position: "relative",
    width: "20%",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
    },
    [sizes.down("xs")]: {
      height: props => (props.showingFullPalette ? "5%" : "10%"),
      width: "100%"
    },
    [sizes.down("md")]: {
      height: props => (props.showingFullPalette ? "10%" : "10%"),
      width: "50%"
    },
    [sizes.down("lg")]: {
      height: props => (props.showingFullPalette ? "20%" : "10%"),
      width: "25%"
    },
  },
  boxContent: {
    bottom: "0px",
    color: "black",
    fontSize: "12px",
    left: "0px",
    letterSpacing: "1px",
    padding: "10px",
    position: "absolute",
    textTransform: "uppercase",
    width: "100%",
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08
        ? "white"
        : "rgba(0, 0, 0, 0.8)",
  },
  copyButton: {
    background: "rgba(255, 255, 255, 0.3)",
    border: "none",
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? "rgba(0, 0, 0, 0.8)"
        : "white",
    display: "inline-block",
    fontSize: "1rem",
    height: "30px",
    left: "50%",
    lineHeight: "30px",
    marginLeft: "-50px",
    marginTop: "-15px",
    outline: "none",
    opacity: "0",
    position: "absolute",
    textAlign: "center",
    textDecoration: "none",
    textTransform: "uppercase",
    top: "50%",
    width: "100px",
    "&:hover": {
      opacity: "1",
    },
  },
  copyMsg: {
    alignItems: "center",
    bottom: "0",
    color: "white",
    display: "flex",
    flexDirection: "column",
    fontSize: "4rem",
    justifyContent: "center",
    left: "0",
    opacity: "0",
    position: "fixed",
    right: "0",
    top: "0",
    transform: "scale(0.1)",
    "& h1": {
      background: "rgba(255, 255, 255, 0.2)",
      fontWeight: "400",
      marginBottom: "0",
      padding: "1rem",
      textAlign: "center",
      textShadow: "1px 2px black",
      textTransform: "uppercase",
      width: "100%",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  copyOverlay: {
    height: "100%",
    opacity: "0",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
    width: "100%",
    zIndex: "0",
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? "rgba(0, 0, 0, 0.8)"
        : "white",
  },
  seeMore: {
    background: "rgba(255, 255, 255, 0.3)",
    border: "none",
    bottom: "0px",
    color: props =>
      chroma(props.background).luminance() >= 0.5
        ? "rgba(0, 0, 0, 0.8)"
        : "white",
    height: "30px",
    lineHeight: "30px",
    position: "absolute",
    right: "0px",
    textAlign: "center",
    textTransform: "uppercase",
    width: "60px",
  },
  showMsg: {
    opacity: "1",
    transform: "scale(1)",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
    zIndex: "25",
  },
  showOverlay: {
    opacity: "1",
    position: "absolute",
    transform: "scale(50)",
    zIndex: "10",
  },
};