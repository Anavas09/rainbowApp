import React from 'react';
import { SortableContainer } from "react-sortable-hoc";

import DragableColorBox from './DragableColorBox';

const DragableColorList = SortableContainer(({colors, removeColor}) => {
  return (
    <div style={{height: "100%"}}>
      {colors.map((color, i) => {
        return (
          <DragableColorBox
            index={i}
            key={color.name}
            color={color.color}
            colorName={color.name}
            removeColor={()=> removeColor(color.name)}
          />
        );
      })}
    </div>
  )
})

export default DragableColorList;