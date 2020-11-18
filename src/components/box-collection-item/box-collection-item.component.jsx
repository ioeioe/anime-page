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



import { removeItemFromGallery } from "../../redux/anime-track/anime-track.actions";

const BoxCollectionItem = ({
  item,
  order,
  history,
  removeItemFromGallery,

}) => {
  const { title, image_url, score, episodes,mal_id,routeName } = item;
  const style={color:"orange"}
  return (
    <BoxCollectionItemContainer>
      <BoxCollectionItemOrder>{order}</BoxCollectionItemOrder>
      <BoxCollectionItemImage
        src={item.image_url}
        alt="item image"
      ></BoxCollectionItemImage>
      <BoxCollectionItemTitle
          to={{
        pathname: `anime/${mal_id}/${routeName}`,
        }}
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
      <BoxCollectionItemDelete onClick={() => removeItemFromGallery(item)}>
        <span className="fa fa-trash"></span>
      </BoxCollectionItemDelete>
    </BoxCollectionItemContainer>
  );
};


const mapDispatchToProps = (dispatch) => ({
  removeItemFromGallery: (item) => dispatch(removeItemFromGallery(item)),
});
export default withRouter(
  connect(null, mapDispatchToProps)(BoxCollectionItem)
);
