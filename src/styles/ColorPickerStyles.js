import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    alignItems: "center",
    background: "linear-gradient(100deg, rgba(250, 214, 195, 0.8), #b0eae8)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    width: "90%",
  },
  addColor: {
    fontSize: "2rem",
    marginTop: "1rem",
    padding: "1rem",
    width: "100%",
  },
  buttons: {
    width: "100%",
  },
  button: {
    width: "50%",
  },
  colorNameInput: {
    height: "75px",
    width: "100%",
  },
  picker: {
    marginTop: "2rem",
    width: "100% !important",
  },
}));

export default useStyles;