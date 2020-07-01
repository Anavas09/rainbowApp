import React from 'react';
import { withStyles } from "@material-ui/styles";

import FooterStyles from "../../styles/Footer/FooterStyles";

function Footer({ classes, emoji, palettename }) {
  return (
    <footer className={classes.PaletteFooter}>
      {palettename}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  )
}

export default withStyles(FooterStyles)(Footer);