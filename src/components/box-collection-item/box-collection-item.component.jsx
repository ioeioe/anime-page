import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  BoxCollectionItemContainer,
  BoxCollectionItemOrder,
  BoxCollectionItemImage,
  BoxCollectionItemTitle,
  BoxCollectionItemEpisode,
  BoxCollectionItemVote,
  BoxCollectionItemDelete,
} from "./box-collection-item.styles";

import {
  selectIndexOfItem,
  selectCollections,
} from "../../redux/collection/collection.selector";

import { removeItemFromCollections } from "../../redux/account/account.actions";

const BoxCollectionItem = ({
  item,
  order,
  history,
  removeItem,
  collection,
}) => {
  const style = {
    color: "orange",
  };
  let index = collection.findIndex((i) => i.mal_id === item.mal_id);
  const regex = /\s/gi;
  return (
    <BoxCollectionItemContainer>
      <BoxCollectionItemOrder>{order}</BoxCollectionItemOrder>
      <BoxCollectionItemImage
        src={item.image_url}
        alt="item image"
      ></BoxCollectionItemImage>
      <BoxCollectionItemTitle
        onClick={() =>
          history.push(
            `anime/${index}/${item.title.toLowerCase().replace(regex, "-")}`
          )
        }
      >
        {item.title}
      </BoxCollectionItemTitle>
      <BoxCollectionItemEpisode>{item.episodes}</BoxCollectionItemEpisode>
      <BoxCollectionItemVote>
        <span className="fa fa-star" style={style}></span>
        <span className="fa fa-star" style={style}></span>
        <span className="fa fa-star" style={style}></span>
        <span className="fa fa-star" style={style}></span>
        <span className="fa fa-star" style={style}></span>
      </BoxCollectionItemVote>
      <BoxCollectionItemDelete onClick={() => removeItem(item)}>
        <span className="fa fa-trash"></span>
      </BoxCollectionItemDelete>
    </BoxCollectionItemContainer>
  );
};

const mapStateToProps = (state) => ({
  collection: selectCollections(state),
});
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCollections(item)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BoxCollectionItem)
);
