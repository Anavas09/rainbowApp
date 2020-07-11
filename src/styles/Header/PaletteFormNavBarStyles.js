import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH } from "../../constants/index";
import sizes from "../sizes";

const drawerWidth = DRAWER_WIDTH; //px

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    alignItems: "center",
    background: "linear-gradient(100deg, rgba(250, 214, 195, 0.8), #b0eae8)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  navButtons: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
    [sizes.down("sm")]: {
      marginRight: "0.5rem",
    },
  },
  navButton: {
    margin: "0 0.5rem",
    [sizes.down("sm")]: {
      margin: "0 0.2rem",
      padding: "0.3rem"
    },
  },
}));

export default useStyles;