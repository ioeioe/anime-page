import React,{useEffect} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  ToplikeContainer,
  ToplikeTitle,
  ListItemContainer,
} from "./top-like.styles";

import RankItem from "../rank-item/rank-item.component";

import { selectHiddenValue } from "../../redux/ranking/ranking.selector";
import { fetchCollectionScoreRankingStart } from "../../redux/collection/collection.actions";
import {isScoreRankingloading,selectScoreRanking} from "../../redux/collection/collection.selector";

const TopLike = ({ collections, hidden,loading,fetchCollectionScoreRankingStart }) => {
  useEffect(()=>{
    fetchCollectionScoreRankingStart();
  },[])
  return !hidden ? (
    loading?null:(
    <ToplikeContainer>
      <ToplikeTitle>ĐƯỢC YÊU THÍCH NHẤT</ToplikeTitle>
      <ListItemContainer>
        {collections.map((item) => (
          <RankItem
            key={`top-like ${item.mal_id}`}
            item={item}
            type="score"
            routeName={item.routeName}
          ></RankItem>
        ))}
      </ListItemContainer>
    </ToplikeContainer>
    )
  ) : null;
};
const mapStateToProps = createStructuredSelector({
  loading:isScoreRankingloading,
  hidden: selectHiddenValue,
  collections:selectScoreRanking,
});

const mapDispatchToProps = (dispatch)=>({
  fetchCollectionScoreRankingStart:()=>dispatch(fetchCollectionScoreRankingStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(TopLike);
