import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";

const useStyles = makeStyles(() => ({
  SingleColorBox: {
    cursor: "pointer",
    backgroundColor: "black",
    display: "inline-block",
    height: "50%",
    margin: "0 auto",
    marginBottom: "-4.5px",
    position: "relative",
    width: "20%",
    [sizes.down("md")]: {
      height: "20%",
      width: "50%"
    },
    [sizes.down("xs")]: {
      height: "10%",
      width: "100%"
    },
  },
  backButton: {
    background: "rgba(255, 255, 255, 0.3)",
    border: "none",
    color: "white",
    display: "inline-block",
    fontSize: "1rem",
    height: "30px",
    left: "50%",
    lineHeight: "30px",
    marginLeft: "-50px",
    marginTop: "-15px",
    outline: "none",
    opacity: "1",
    position: "absolute",
    textAlign: "center",
    textDecoration: "none",
    textTransform: "uppercase",
    top: "50%",
    width: "100px",
  },
  Palette: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  paletteColors: {
    height: "90%",
  },
}));

export default useStyles;