import React, { useEffect } from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {
  AnnouncementContainer,
  AnnouncementImage,
  AnnouncementInfo,
  AnnouncementTitle,
  AnnouncementPara,
  AnnouncementClose,
} from "./annoucement.styles";
import { selectAnnounceHidden } from "../../redux/announce/announce.selector";
import {Announce} from '../../redux/announce/announce.selector';
import { closingAnnounce } from "../../redux/announce/announce.actions";

const Announcement = ({ announce,closingAnnounce }) => {
    useEffect(() => {
    setTimeout(() => {
      closingAnnounce();
    }, 2900);
  }, []);

  console.log(announce);

  return (
    <AnnouncementContainer>
      {
        announce.check?(
      <AnnouncementImage
        src="https://cms-assets.tutsplus.com/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png"
        alt="announce icon"
      ></AnnouncementImage>):
      (
        <AnnouncementImage
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmGpXm0m7snxZexK2gBZpFl0GK4xFtbw188Q&usqp=CAU"
        alt="announce icon"
      ></AnnouncementImage>)
      

  }
      <AnnouncementInfo>
        <AnnouncementTitle>{announce.title}</AnnouncementTitle>
        <AnnouncementPara>{announce.para}</AnnouncementPara>
      </AnnouncementInfo>
      <AnnouncementClose onClick={() => closingAnnounce()}>
        <span className="fa fa-close"></span>
      </AnnouncementClose>
    </AnnouncementContainer>
  );
};

const mapStateToProps= createStructuredSelector({
  announce:Announce,
  hidden:selectAnnounceHidden,

})
const mapDispatchToProps = (dispatch) => ({
  closingAnnounce: () => dispatch(closingAnnounce()),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(Announcement);
