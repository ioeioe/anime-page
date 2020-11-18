import React from "react";
import { connect } from "react-redux";
import {
  RatingItemContainer,
  RatingItemImageContainer,
  RatingItemImage,
  RatingItemInfo,
  RatingItemTitle,
  RatingItemScoreEpisodeAndYear,
  RatingItemScore,
  RatingItemEpisode,
  RatingItemYear,
  RatingItemIcon,
  RatingItemView,
} from "./rating-item.styles";

import PlayButton from '../play-button/play-button.component';

import { selectIndexOfItem } from "../../redux/collection/collection.selector";
import { withRouter } from "react-router-dom";

const RatingItem = ({ item, type, history }) => {
  const { image_url, title, members, episodes, score,mal_id,routeName } = item;
  history.location.pathname = "/";
  return (
    <RatingItemContainer
        to={{
        pathname: `anime/${mal_id}/${routeName}`,
        state:{item:item},
      }}
    >
      <RatingItemImageContainer>
      <RatingItemImage src={image_url} alt="item image"></RatingItemImage>
        <PlayButton/>
      </RatingItemImageContainer>
      <RatingItemInfo>
        <RatingItemTitle>{title}</RatingItemTitle>
        <RatingItemScoreEpisodeAndYear>
          <RatingItemScore> <RatingItemIcon className="fa fa-star" style={{color:"orange"}}></RatingItemIcon>{item.score}</RatingItemScore>
          {
                       item.continuing?<RatingItemEpisode><RatingItemIcon className="fa fa-clock-o"></RatingItemIcon>{item.episodes}/{item.episodes} Tập</RatingItemEpisode>:<RatingItemEpisode><RatingItemIcon className="fa fa-clock-o"></RatingItemIcon>{item.episodes}/?? Tập</RatingItemEpisode>
          }
    <RatingItemYear><RatingItemIcon className="fa fa-calendar"></RatingItemIcon>{item.year}</RatingItemYear>
        </RatingItemScoreEpisodeAndYear>


 
    <RatingItemView>{item.members} LƯỢT XEM</RatingItemView>
         </RatingItemInfo>
    </RatingItemContainer>
  );
};


export default withRouter(RatingItem);
