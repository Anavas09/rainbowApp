import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  DragableColorBox: {
    display: "inline-block",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-3.5px",
    position: "relative",
    width: "20%",
  }
}))

function DragableColorBox({color}) {
  const [grabbing, setGrabbing] = useState(false)
  const classes = useStyles()

  const handleOnClick = () => {
    setGrabbing(true);
  }

  return (
    <div
      className={classes.DragableColorBox}
      style={{
        backgroundColor: color,
        cursor: grabbing ? "grabbing" : "grab",
      }}
      onClick={handleOnClick}
    >
      {color}
    </div>
  )
}

export default DragableColorBox;