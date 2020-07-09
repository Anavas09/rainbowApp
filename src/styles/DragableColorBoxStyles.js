import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  DragableColorBox: {
    display: "inline-block",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-3.5px",
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
  },
  boxContent: {
    bottom: "0px",
    color: "rgba(0, 0, 0, 0.5)",
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
}));

export default useStyles;