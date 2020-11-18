import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { DirectoryContainer } from "./directory.styles";
import DirectoryButton from "../directory-button/directory-button.component";
import Dropdown from "../drop-down/drop-down.component";
import {
  selectCategoryHidden,
  selectStatusHidden,
  selectMostviewHidden,
  selectMostscoreHidden,
  selectYearHidden,
  selectSeasonHidden,
  selectTvMovieHidden,
  selectCategoryList,
  selectStatusList,
  selectMostviewList,
  selectYearList,
  selectSeasonList,
  selectTvMovieList,
  selectMostscoreList,
} from "../../redux/directory/directory.selector";
import {
  toggleCategoryHidden,
  toggleStatusHidden,
  toggleMostviewHidden,
  toggleYearHidden,
  toggleSeasonHidden,
  toggleTvMovieHidden,
  toggleMostscoreHidden,
} from "../../redux/directory/directory.actions";
const Directory = ({
  toggleCategoryHidden,
  toggleStatusHidden,
  toggleMostviewHidden,
  toggleYearHidden,
  toggleSeasonHidden,
  toggleTvMovieHidden,
  toggleMostscoreHidden,
  categoryHidden,
  statusHidden,
  mostViewHidden,
  mostScoreHidden,
  yearHidden,
  seasonHidden,
  tvMovieHidden,
  categoryList,
  statusList,
  mostviewList,
  mostscoreList,
  yearList,
  seasonList,
  tvmovieList,
}) => {
  return (
    <DirectoryContainer>
      <DirectoryButton key={0} label="TRANG CHỦ" path=""></DirectoryButton>
      <DirectoryButton
        key={1}
        handleClick={toggleCategoryHidden}
        label="THỂ LOẠI"
      ></DirectoryButton>
      {categoryHidden ? null : (
        <Dropdown
          key="d0"
          list={categoryList}
          name="the loai"
          column={7}
          yPos={170}
          xPos={270}
        ></Dropdown>
      )}
      <DirectoryButton
        key={2}
        handleClick={toggleStatusHidden}
        label="TRẠNG THÁI"
      ></DirectoryButton>
      {statusHidden ? null : (
        <Dropdown
          key="d1"
          list={statusList}
          name="trang thai"
          column={2}
          yPos={170}
          xPos={400}
        ></Dropdown>
      )}
      <DirectoryButton
        key={3}
        handleClick={toggleMostviewHidden}
        label="XEM NHIỀU NHẤT"
      ></DirectoryButton>
      {mostViewHidden ? null : (
        <Dropdown
          key="d2"
          list={mostviewList}
          name="most view"
          column={3}
          yPos={170}
          xPos={530}
        ></Dropdown>
      )}
      <DirectoryButton
        key={4}
        handleClick={toggleMostscoreHidden}
        label="ĐIỂM CAO NHẤT"
      ></DirectoryButton>
      {mostScoreHidden ? null : (
        <Dropdown
          key="d3"
          list={mostscoreList}
          name="most like"
          column={3}
          yPos={170}
          xPos={660}
        ></Dropdown>
      )}
      <DirectoryButton
        key={5}
        handleClick={toggleYearHidden}
        label="NĂM"
      ></DirectoryButton>
      {yearHidden ? null : (
        <Dropdown
          key="d4"
          list={yearList}
          name="nam"
          column={2}
          yPos={170}
          xPos={810}
        ></Dropdown>
      )}
      <DirectoryButton key={6} handleClick={toggleSeasonHidden} label="SEASON"></DirectoryButton>
      {
        seasonHidden?null:
        (
          <Dropdown
          key="d5"
          list={seasonList}
          name="season"
          column={2}
          yPos={170}
          xPos={950}
        ></Dropdown>
        )
      }
      <DirectoryButton
        key={7}
        handleClick={toggleTvMovieHidden}
        label="TV/MOVIE"
      ></DirectoryButton>
      {tvMovieHidden ? null : (
        <Dropdown
          key="d6"
          list={tvmovieList}
          name="tv movie"
          column={1}
          yPos={170}
          xPos={1090}
        ></Dropdown>
      )}
    </DirectoryContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  categoryHidden: selectCategoryHidden,
  statusHidden: selectStatusHidden,
  mostViewHidden: selectMostviewHidden,
  mostScoreHidden: selectMostscoreHidden,
  yearHidden: selectYearHidden,
  seasonHidden:selectSeasonHidden,
  tvMovieHidden: selectTvMovieHidden,
  categoryList: selectCategoryList,
  statusList: selectStatusList,
  mostviewList: selectMostviewList,
  mostscoreList: selectMostscoreList,
  yearList: selectYearList,
  seasonList:selectSeasonList,
  tvmovieList: selectTvMovieList,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCategoryHidden: () => dispatch(toggleCategoryHidden()),
  toggleStatusHidden: () => dispatch(toggleStatusHidden()),
  toggleMostviewHidden: () => dispatch(toggleMostviewHidden()),
  toggleMostscoreHidden: () => dispatch(toggleMostscoreHidden()),
  toggleYearHidden: () => dispatch(toggleYearHidden()),
  toggleSeasonHidden:()=>dispatch(toggleSeasonHidden()),
  toggleTvMovieHidden: () => dispatch(toggleTvMovieHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Directory);
