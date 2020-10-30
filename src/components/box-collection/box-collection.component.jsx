import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  BoxCollectionContainer,
  BoxCollectionHeader,
  BoxCollectionField,
  BoxCollectionList,
} from "./box-collection.styles";


import { selectCollections } from "../../redux/collection/collection.selector";
import BoxCollectionItem from "../box-collection-item/box-collection-item.component";

const BoxCollection = ({  collections }) => {
  return (
    <BoxCollectionContainer>
      <BoxCollectionHeader>
        <BoxCollectionField key="stt">STT</BoxCollectionField>
        <BoxCollectionField key="image">ảnh</BoxCollectionField>
        <BoxCollectionField key="name">tên</BoxCollectionField>
        <BoxCollectionField key="episode">tập mới nhất</BoxCollectionField>
        <BoxCollectionField key="vote">đánh giá</BoxCollectionField>
        <BoxCollectionField key="delete">xoá</BoxCollectionField>
      </BoxCollectionHeader>
      {/* <BoxCollectionList>
        {userCollections.map((item, index) => (
          <BoxCollectionItem
            key={index}
            item={item}
            order={index + 1}
          ></BoxCollectionItem>
        ))}
      </BoxCollectionList> */}
    </BoxCollectionContainer>
  );
};

const mapStateToProps = createStructuredSelector({

  collections: selectCollections,
});

export default connect(mapStateToProps)(BoxCollection);
