import React,{useEffect} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  TopviewContainer,
  TopviewTitle,
  ListItemContainer,
} from "./top-view.styles";

import RankItem from "../rank-item/rank-item.component";

import { selectHiddenValue } from "../../redux/ranking/ranking.selector";
import { fetchCollectionViewRankingStart } from "../../redux/collection/collection.actions";
import {isViewRankingloading,selectViewRanking} from "../../redux/collection/collection.selector";

const TopView = ({ collections, hidden,fetchCollectionViewRankingStart,loading }) => {
  useEffect(()=>{
    fetchCollectionViewRankingStart();
  },[])
  return !hidden ? (loading?null:(
    <TopviewContainer>
      <TopviewTitle>XEM NHIỀU NHẤT</TopviewTitle>
      <ListItemContainer>
        {collections.map((item) => (
          <RankItem
            key={`top-view ${item.mal_id}`}
            item={item}
            type="view"
            routeName={item.routeName}
          ></RankItem>
        ))}
      </ListItemContainer>
    </TopviewContainer>)
  ) : null;
};
const mapStateToProps = createStructuredSelector({
  loading:isViewRankingloading,
  hidden: selectHiddenValue,
  collections:selectViewRanking,
});

const mapDispatchToProps = (dispatch)=>({
  fetchCollectionViewRankingStart:()=>dispatch(fetchCollectionViewRankingStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(TopView);
