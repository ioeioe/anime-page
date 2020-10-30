import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectIndexOfItem } from "../../redux/collection/collection.selector";
import {
  ItemContainer,
  ItemImage,
  ItemEpisode,
  ItemTitle,
  ItemInfo,
  ItemScore,
} from "./anime-item.styles";

const AnimeItem = ({ item, history,routeName }) => {
  const { title, image_url, score, episodes,mal_id } = item;
  history.location.pathname = "/";
  return (
    <ItemContainer
       to={{
        pathname: `anime/${mal_id}/${routeName}`,
      }}
    >
      <ItemInfo>
        <ItemEpisode>
          {typeof episodes === "number" ? episodes : "??"}
        </ItemEpisode>
        <ItemScore>{score}</ItemScore>
      </ItemInfo>

      <ItemImage src={image_url} alt="image name"></ItemImage>

      <ItemTitle>
        {title.length < 15 ? title : title.slice(0, 15) + " ..."}
      </ItemTitle>
    </ItemContainer>
  );
};

// const mapStateToProps = (state, props) => ({
//   index: selectIndexOfItem(props.item)(state),
// });

// export default withRouter(connect(mapStateToProps)(AnimeItem));

export default withRouter(AnimeItem);