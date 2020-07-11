import { makeStyles } from "@material-ui/core/styles";
import sizes from "./sizes";
import bg from "./bg.svg"

const useStyles = makeStyles(() => ({
  root: {
    alignItems: "flex-start",
    /*background by SVGBackgorunds.com */
    backgroundColor: "#1e8feb",
    backgroundImage: `url(${bg})`,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    overflow: "scroll"
  },
  container: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "50%",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    },
  },
  heading: {
    fontSize: "2rem"
  },
  nav: {
    alignItems: "center",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    display: "grid",
    gridGap: "2.5rem",
    gridTemplateColumns: "repeat(3, 30%)",
    width: "100%",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridGap: "1.4rem",
      gridTemplateColumns: "repeat(1, 100%)",
    },
  },
}));

export default useStyles;