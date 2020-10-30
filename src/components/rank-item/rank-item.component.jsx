import React from "react";
import { connect } from "react-redux";
import {
  RankItemContainer,
  RankItemImage,
  RankItemTitle,
  RankItemQuantity,
  RankItemInfo,
  RankItemEpisode,
} from "./rank-item.styles";
import { selectIndexOfItem } from "../../redux/collection/collection.selector";
import { withRouter } from "react-router-dom";

const RankItem = ({ item, type, history,routeName }) => {
  const { image_url, title, members, episodes, score,mal_id } = item;
  history.location.pathname = "/";
  return (
    <RankItemContainer
        to={{
        pathname: `anime/${mal_id}/${routeName}`,
      }}
    >
      <RankItemImage src={image_url} alt="item image"></RankItemImage>
      <RankItemInfo>
        <RankItemTitle>{title}</RankItemTitle>
        {type === "view" ? (
          <RankItemQuantity>{`Lượt xem: ${members}`}</RankItemQuantity>
        ) : (
          <RankItemQuantity>{`Đánh giá: ${score}/10`}</RankItemQuantity>
        )}
      </RankItemInfo>
      <RankItemEpisode>
        {typeof episodes === "number" ? episodes : "??"}
      </RankItemEpisode>
    </RankItemContainer>
  );
};


export default withRouter(RankItem);
