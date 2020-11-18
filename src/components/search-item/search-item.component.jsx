import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  SearchItemContainer,
  SearchItemImage,
  SearchItemInfo,
  SearchItemTitle,
  SearchItemEpisode,
} from "./search-item.styles";
import { selectIndexOfItem } from "../../redux/collection/collection.selector";
const SearchItem = ({ item }) => {
  const { image_url, title, episodes,mal_id,routeName } = item;
  return (
    <SearchItemContainer
       to={{
        pathname: `anime/${mal_id}/${routeName}`,
        state:{item:item},
      }}
    >
      <SearchItemImage src={image_url}></SearchItemImage>
      <SearchItemInfo>
        <SearchItemTitle>{title}</SearchItemTitle>
        <SearchItemEpisode>{episodes}</SearchItemEpisode>
      </SearchItemInfo>
    </SearchItemContainer>
  );
};
const mapStateToProps = (state, props) => ({
  index: selectIndexOfItem(props.item)(state),
});

export default withRouter(connect(mapStateToProps)(SearchItem));
