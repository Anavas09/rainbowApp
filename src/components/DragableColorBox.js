import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForeverSharp';

const useStyles = makeStyles(() => ({
  DragableColorBox: {
    display: "inline-block",
    height: "25%",
    margin: "0 auto",
    marginBottom: "-3.5px",
    position: "relative",
    width: "20%",
    "&:hover": {
      cursor: "grab"
    },
    "&:hover svg": {
      color: "white",
      cursor: "pointer",
      transform: "scale(1.5)"
    }
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
    width: "100%"
  },
  deleteIcon:{
    transition: "all 0.3s ease-in-out"
  }
}))

function DragableColorBox({color, colorName}) {
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
      }}
      onClick={handleOnClick}
    >
      <div className={classes.boxContent}>
        <span>{colorName}</span>
        <DeleteForeverIcon className={classes.deleteIcon}/>
      </div>
    </div>
  )
}

export default DragableColorBox;