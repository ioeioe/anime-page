import React from "react";
import {withRouter} from 'react-router-dom';
import {
  CategoryItemContainer,
  CategoryItemName,
} from "./category-item.styles";

const CategoryItem = ({ label, value, listname }) => {
  console.log(value);
  const regex = /\s/gi;
  let pathname="";
  if(value.name)
  {
    pathname=value.name.toLowerCase().replace(regex,"-");
  }
  else{
     pathname=value.toLowerCase().replace(regex,"-");
  }
  
  return (
    <CategoryItemContainer
      to={{
        pathname: `${listname.toLowerCase().replace(regex, "-")}/${pathname}/page/${1}`,
        state: { value: value, listname: listname },
      }}
    >
      <CategoryItemName>{label}</CategoryItemName>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
