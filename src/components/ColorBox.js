import React, { useState } from "react";
import clsx from "clsx";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import ColorBoxStyles from "../styles/ColorBoxStyles";

function ColorBox({ background, name, moreUrl, showingFullPalette }) {
  const [copied, setCopied] = useState(false);

  const classes = ColorBoxStyles({background, showingFullPalette});

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className={classes.ColorBox} style={{ background }}>
        <div
          className={clsx(classes.copyOverlay, {
            [classes.showOverlay]: copied,
          })}
          style={{ background }}
        />
        <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;