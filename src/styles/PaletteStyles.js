import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  SingleColorBox: {
    cursor: "pointer",
    backgroundColor: "red",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-4.5px",
    position: "relative",
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