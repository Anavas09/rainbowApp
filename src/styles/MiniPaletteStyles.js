import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e9e9e9",
    border: "1px solid black",
    borderRadius: "5px",
    cursor: "pointer",
    overflow: "hidden",
    padding: "0.5rem",
    position: "relative",
    "&:hover svg": {
      opacity: "1"
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    height: "150px",
    overflow: "hidden",
    width: "100%",
  },
  deleteIcon: {
    backgroundColor: "#eb3d30",
    color: "white",
    height: "20px",
    opacity: "0",
    padding: "10px",
    position: "absolute",
    right: "0px",
    top: "0px",
    width: "20px",
    zIndex: "10"
  },
  title: {
    alignItems: "center",
    color: "black",
    display: "flex",
    fontSize: "1rem",
    justifyContent: "space-between",
    margin: "0",
    paddingTop: "0.5rem",
    position: "relative",
  },
  emoji: {
    fontSize: "1.5rem",
    marginLeft: "0.5rem",
  },
}));

export default useStyles;