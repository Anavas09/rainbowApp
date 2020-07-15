import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  PaletteFooter: {
    alignItems: "center",
    backgroundColor: "white",
    display: "flex",
    fontWeight: "bold",
    height: "5vh",
    justifyContent: "flex-end",
  },
  emoji: {
    fontSize: "1.5rem",
    margin: "0 1rem",
  },
}));

export default useStyles;