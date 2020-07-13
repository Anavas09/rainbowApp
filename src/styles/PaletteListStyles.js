import { makeStyles } from "@material-ui/core/styles";
import sizes from "./sizes";
import bg from "./bg.svg";

const useStyles = makeStyles(() => ({
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    alignItems: "flex-start",
    /*background by SVGBackgorunds.com */
    backgroundColor: "#ffffff",
    backgroundImage: `url(${bg})`,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    overflow: "scroll",
  },
  container: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "50%",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  heading: {
    color: "black",
    fontSize: "2rem",
  },
  nav: {
    alignItems: "center",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "& a": {
      color: "black",
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