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
const SearchItem = ({ item, history, index }) => {
  const { image_url, title, episodes } = item;

  const regex = /\s/gi;
  return (
    <SearchItemContainer
      onClick={() =>
        history.push(
          `anime/${index}/${title.toLowerCase().replace(regex, "-")}`
        )
      }
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
