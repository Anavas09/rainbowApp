import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  DragableColorBox: {
    display: "inline-block",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-5.7px",
    position: "relative",
    width: "20%",
    "&:hover": {
      cursor: "grab",
    },
    "&:hover svg": {
      color: "white",
      cursor: "pointer",
      transform: "scale(1.5)",
    },
    [sizes.down("lg")]: {
      height: "20%",
      marginBottom: "-6.1px",
      width: "25%",
    },
    [sizes.down("md")]: {
      height: "10%",
      marginBottom: "-6.1px",
      width: "50%",
    },
    [sizes.down("sm")]: {
      marginBottom: "-5.1px",
      width: "100%",
    },
  },
  boxContent: {
    bottom: "0px",
    color: props =>
      chroma(props.color).luminance() <= 0.08
        ? "rgba(225,255,255,0.8)"
        : "rgba(0, 0, 0, 0.8)",
    display: "flex",
    fontSize: "12px",
    justifyContent: "space-between",
    left: "0px",
    letterSpacing: "1px",
    padding: "10px",
    position: "absolute",
    textTransform: "uppercase",
    width: "100%",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};
