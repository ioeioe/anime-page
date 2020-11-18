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
import { fetchDayViewRatingStart,fetchWeekViewRatingStart,fetchMonthViewRatingStart,fetchSeasonViewRatingStart,fetchYearViewRatingStart } from "../../redux/collection/collection.actions";
import {selectViewRating} from "../../redux/collection/collection.selector";

const TopView = ({ collections,loading,fetchDayViewRatingStart,fetchWeekViewRatingStart,fetchMonthViewRatingStart,fetchSeasonViewRatingStart,fetchYearViewRatingStart }) => {
  useEffect(()=>{
    fetchSeasonViewRatingStart();
  },[])
  return <RatingFrame>
      <RatingFrameTitleContainer>
      <RatingFrameTitle>XEM NHIỀU NHẤT</RatingFrameTitle>
      </RatingFrameTitleContainer>
      <PeriodContainer>
        <Period>Ngày</Period>
        <Period>Tuần</Period>
        <Period>Tháng</Period>
        <Period onClick={()=>fetchSeasonViewRatingStart()}>Mùa</Period>
        <Period onClick={()=>fetchYearViewRatingStart()}>Năm</Period>
      </PeriodContainer>
   
      <ListItemContainer>
        {collections.map((item) => (
          <RatingItem
            key={item.mal_id}
            item={item}
          ></RatingItem>
        ))}
      </ListItemContainer>
    </RatingFrame>
};
const mapStateToProps = createStructuredSelector({
  collections:selectViewRating,
});

const mapDispatchToProps = (dispatch)=>({
    fetchDayViewRatingStart:()=>dispatch(fetchDayViewRatingStart()),
  fetchWeekViewRatingStart:()=>dispatch(fetchWeekViewRatingStart()),
  fetchMonthViewRatingStart:()=>dispatch(fetchMonthViewRatingStart()),
  fetchSeasonViewRatingStart:()=>dispatch(fetchSeasonViewRatingStart()),
  fetchYearViewRatingStart:()=>dispatch(fetchYearViewRatingStart()),
})
export default connect(mapStateToProps,mapDispatchToProps)(TopView);
