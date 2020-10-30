import React from "react";
import { DropdownContainer } from "./drop-down.styles";

import CategoryItem from "../category-item/category-item.component";
const Dropdown = ({ list, column, xPos, yPos, name }) => {
  
  // list.forEach(item=>{
  //   console.log(Object.values(item)[0]);
  // })
  return (
    <DropdownContainer column={column} xPos={xPos} yPos={yPos}>
      {list.map((item) => (
        <CategoryItem
          key={Object.values(item)[0].mal_id?Object.values(item)[0].mal_id:Object.values(item)[0]}
          label={Object.keys(item)[0]}
          value={Object.values(item)[0]}
          listname={name}
        ></CategoryItem>
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
