import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  BoxCollectionContainer,
  BoxCollectionHeader,
  BoxCollectionField,
  BoxCollectionList,
} from "./box-collection.styles";

import BoxCollectionItem from "../box-collection-item/box-collection-item.component";

import { selectGallery } from "../../redux/anime-track/anime-track.selector";


const BoxCollection = ({  gallery }) => {
  console.log(gallery);
  return typeof gallery==="object"?(
    <BoxCollectionContainer>
      <BoxCollectionHeader>
        <BoxCollectionField key="stt">STT</BoxCollectionField>
        <BoxCollectionField key="image">ảnh</BoxCollectionField>
        <BoxCollectionField key="name">tên</BoxCollectionField>
        <BoxCollectionField key="episode">tập mới nhất</BoxCollectionField>
        <BoxCollectionField key="vote">đánh giá</BoxCollectionField>
        <BoxCollectionField key="delete">xoá</BoxCollectionField>
      </BoxCollectionHeader>
      <BoxCollectionList>
        {Object.values(gallery).map((item, index) => (
          <BoxCollectionItem
            key={index}
            item={item}
            order={index + 1}
          ></BoxCollectionItem>
        ))}
      </BoxCollectionList>
    </BoxCollectionContainer>):null
  
};

const mapStateToProps = createStructuredSelector({
  gallery: selectGallery,
});

export default connect(mapStateToProps)(BoxCollection);
