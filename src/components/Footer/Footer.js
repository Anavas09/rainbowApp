import React from 'react';

import FooterStyles from "../../styles/Footer/FooterStyles";

function Footer({ emoji, palettename }) {
  const classes = FooterStyles();

  return (
    <footer className={classes.PaletteFooter}>
      {palettename}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  )
}

export default Footer;