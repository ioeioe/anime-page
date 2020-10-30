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
  selectMostcommentHidden,
  selectYearHidden,
  selectTvMovieHidden,
  selectCategoryList,
  selectStatusList,
  selectMostviewList,
  selectYearList,
  selectTvMovieList,
  selectMostcommentList,
} from "../../redux/directory/directory.selector";
import {
  toggleCategoryHidden,
  toggleStatusHidden,
  toggleMostviewHidden,
  toggleYearHidden,
  toggleTvMovieHidden,
  toggleMostcommentHidden,
} from "../../redux/directory/directory.actions";
const Directory = ({
  toggleCategoryHidden,
  toggleStatusHidden,
  toggleMostviewHidden,
  toggleYearHidden,
  toggleTvMovieHidden,
  toggleMostcommentHidden,
  categoryHidden,
  statusHidden,
  mostViewHidden,
  mostCommentHidden,
  yearHidden,
  tvMovieHidden,
  categoryList,
  statusList,
  mostviewList,
  mostCommentList,
  yearList,
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
        label="XEM NHIỀU"
      ></DirectoryButton>
      {mostViewHidden ? null : (
        <Dropdown
          key="d2"
          list={mostviewList}
          name="xem nhieu"
          column={5}
          yPos={170}
          xPos={530}
        ></Dropdown>
      )}
      <DirectoryButton
        key={4}
        handleClick={toggleMostcommentHidden}
        label="BÌNH LUẬN NHIỀU"
      ></DirectoryButton>
      {mostCommentHidden ? null : (
        <Dropdown
          key="d3"
          list={mostCommentList}
          name="binh luan nhieu"
          column={5}
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
      <DirectoryButton key={6} label="HỎI ĐÁP"></DirectoryButton>
      <DirectoryButton
        key={7}
        handleClick={toggleTvMovieHidden}
        label="TV/MOVIE"
      ></DirectoryButton>
      {tvMovieHidden ? null : (
        <Dropdown
          key="d5"
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
  mostCommentHidden: selectMostcommentHidden,
  yearHidden: selectYearHidden,
  tvMovieHidden: selectTvMovieHidden,
  categoryList: selectCategoryList,
  statusList: selectStatusList,
  mostviewList: selectMostviewList,
  mostCommentList: selectMostcommentList,
  yearList: selectYearList,
  tvmovieList: selectTvMovieList,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCategoryHidden: () => dispatch(toggleCategoryHidden()),
  toggleStatusHidden: () => dispatch(toggleStatusHidden()),
  toggleMostviewHidden: () => dispatch(toggleMostviewHidden()),
  toggleMostcommentHidden: () => dispatch(toggleMostcommentHidden()),
  toggleYearHidden: () => dispatch(toggleYearHidden()),
  toggleTvMovieHidden: () => dispatch(toggleTvMovieHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Directory);
