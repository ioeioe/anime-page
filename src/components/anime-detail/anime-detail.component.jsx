import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {createStructuredSelector} from 'reselect';

import {
  BigContainer,
  AnimeDetailContainer,
  AnimeImage,
  AnimeInfoContainer,
  PanelContainer,
  AnimeTitle,
  AnimeContentTitle,
  AnimeContentPara,
  AnimeInfo,
  AnimeDetailButton,
  AnimeEpisodeContainer,
  AnimeCategoryContainer,
  AnimeCategory,
  ButtonContainer,
  AnimeDetailHeader,
} from "./anime-detail.styles";

import Announcement from "../announcement/annoucement.component";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { addItemToCollections } from "../../redux/account/account.actions";
import { showingAnnounce } from "../../redux/announce/announce.actions";
import { selectAnnounceHidden } from "../../redux/announce/announce.selector";
import {updateTime} from '../../redux/collection/collection.actions';
import {selectItem,itemLoading} from '../../redux/item/item.selector';
const AnimeDetail = ({
  item,
  loading,
  addItemToCollections,
  history,
  showingAnnounce,
  hidden,
  currentUser,
  updateTime,
}) => {
  history.location.pathname = "/";
  const regex = /\s/gi;
  const addItem = async () => {
    try {
      //await addItemToCollections(item);
      if(!currentUser){
        showingAnnounce({check:false,title:"Xin chào",para:"Bạn cần phải đăng nhập để thực hiện chức năng này"});
      }
      else{
        showingAnnounce({check:true,title:"Xin chào",para:"Đã thêm vào danh sách"});
      }

    } catch (error) {}
  };
  console.log("asd");
  return loading?null:(
    <BigContainer>
      {!hidden?
      <Announcement />:null
      }
      <AnimeDetailHeader>{item.title}</AnimeDetailHeader>
      <AnimeDetailContainer>
        <AnimeImage src={item.image_url} alt="image name"></AnimeImage>
        <AnimeInfoContainer>
          <AnimeTitle>{item.title}</AnimeTitle>
          <PanelContainer>
            <AnimeInfo>
              Trạng thái: {item.episodes}/{item.episodes}
            </AnimeInfo>
            <AnimeCategoryContainer>
              Thể loại:
              {item.genres.map((category) => (
                <AnimeCategory
                  key={category.mal_id}
                  to={{
                    pathname: `the-loai/${category.name
                      .toLowerCase()
                      .replace(regex, "-")}/page/${1}
                    `,
                    state: { name: category.name, listname: "the loai" },
                  }}
                >
                  {category.name}
                </AnimeCategory>
              ))}
            </AnimeCategoryContainer>
            <AnimeInfo>Dạng anime: {item.type}</AnimeInfo>
            <AnimeInfo>Season: Summer</AnimeInfo>
            <AnimeInfo>Năm: {item.airing_start.split("-")[0]}</AnimeInfo>
            <AnimeInfo>Lượt xem: {item.members}</AnimeInfo>
          </PanelContainer>
          <PanelContainer>
            <AnimeEpisodeContainer></AnimeEpisodeContainer>
          </PanelContainer>
          <ButtonContainer>
            <AnimeDetailButton onClick={() => addItem()}>
              Thêm vào danh sách
            </AnimeDetailButton>
            <AnimeDetailButton>Xem Anime</AnimeDetailButton>
                <AnimeDetailButton onClick={()=>updateTime(item.mal_id)}>Cập nhật</AnimeDetailButton>
          </ButtonContainer>
        </AnimeInfoContainer>
      </AnimeDetailContainer>
      <PanelContainer>
        <AnimeContentTitle>"Nội dung"</AnimeContentTitle>
        <AnimeContentPara>{item.synopsis}</AnimeContentPara>
      </PanelContainer>
    </BigContainer>
  );
};

const mapStateToProps =  createStructuredSelector({
  item:selectItem,
  loading:itemLoading,
  hidden: selectAnnounceHidden,
  currentUser:selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCollections: (item) => dispatch(addItemToCollections(item)),
  showingAnnounce: (announceInfo) => dispatch(showingAnnounce(announceInfo)),
  updateTime:(id)=>dispatch(updateTime(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AnimeDetail)
);
