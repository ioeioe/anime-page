import React,{useEffect} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  RatingFrame,
  RatingFrameTitleContainer,
  RatingFrameTitle,
  ListItemContainer,
  PeriodContainer,
  Period,
} from "./rating-frame.styles";

import RatingItem from "../rating-item/rating-item.component";

import { fetchDayScoreRatingStart,fetchWeekScoreRatingStart,fetchMonthScoreRatingStart,fetchSeasonScoreRatingStart,fetchYearScoreRatingStart } from "../../redux/collection/collection.actions";
import {selectScoreRating} from "../../redux/collection/collection.selector";

const TopLike = ({ collections,fetchDayScoreRatingStart,
 fetchWeekScoreRatingStart,fetchMonthScoreRatingStart,fetchSeasonScoreRatingStart,fetchYearScoreRatingStart
}) => {
  useEffect(()=>{
    fetchSeasonScoreRatingStart();
  },[])
  return <RatingFrame>
      <RatingFrameTitleContainer>
      <RatingFrameTitle>ĐƯỢC YÊU THÍCH NHẤT</RatingFrameTitle>
      </RatingFrameTitleContainer>
      <PeriodContainer>
        <Period>Ngày</Period>
        <Period>Tuần</Period>
        <Period>Tháng</Period>
        <Period onClick={()=>fetchSeasonScoreRatingStart()}>Mùa</Period>
        <Period onClick={()=>fetchYearScoreRatingStart()}>Năm</Period>
      </PeriodContainer>

      <ListItemContainer>
        {
        collections.map((item) => (
          <RatingItem
            key= {item.mal_id}
            item={item}
          ></RatingItem>
        ))
}
      </ListItemContainer>
    </RatingFrame>
};
const mapStateToProps = createStructuredSelector({

  collections:selectScoreRating,
});

const mapDispatchToProps = (dispatch)=>({
  fetchDayScoreRatingStart:()=>dispatch(fetchDayScoreRatingStart()),
  fetchWeekScoreRatingStart:()=>dispatch(fetchWeekScoreRatingStart()),
  fetchMonthScoreRatingStart:()=>dispatch(fetchMonthScoreRatingStart()),
  fetchSeasonScoreRatingStart:()=>dispatch(fetchSeasonScoreRatingStart()),
  fetchYearScoreRatingStart:()=>dispatch(fetchYearScoreRatingStart()),

})

export default connect(mapStateToProps,mapDispatchToProps)(TopLike);
