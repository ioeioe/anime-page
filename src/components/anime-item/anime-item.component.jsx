import React from "react";
import { withRouter } from "react-router-dom";

import {
  ItemContainer,
  ItemImageContainer,
  ItemImage,
  ItemEpisode,
  ItemTitle,
  ItemInfo,
  ItemScore,
} from "./anime-item.styles";

import PlayButton from '../play-button/play-button.component';


const AnimeItem = ({ item, history }) => {
  const { title, image_url, score, episodes,mal_id,routeName } = item;
  history.location.pathname = "/";
  return (
    <ItemContainer
       to={{
        pathname: `anime/${mal_id}/${routeName}`,
        state:{item:item},
      }}
    >
      <ItemInfo>
        <ItemEpisode>
          {typeof episodes === "number" ? episodes : "??"}
        </ItemEpisode>
        <ItemScore>{score}</ItemScore>
      </ItemInfo>
      <ItemImageContainer>
      <ItemImage src={image_url} alt="image name"></ItemImage>
      <PlayButton />
      </ItemImageContainer>
      
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