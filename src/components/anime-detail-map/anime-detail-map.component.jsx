import React,{useEffect} from "react";
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
  TrackingButton,
  TrackingIcon,
  AnimeImageContainer,
} from "../anime-detail/anime-detail.styles";

import Announcement from "../announcement/annoucement.component";
import Comment from '../comment/comment.component';
import BackgroundUpdate from '../background-update/background-update.component'

import { selectCurrentUser } from "../../redux/user/user.selector";
import { showingAnnounce } from "../../redux/announce/announce.actions";
import { selectAnnounceHidden } from "../../redux/announce/announce.selector";
import {updateTime} from '../../redux/collection/collection.actions';
import {addItemToGallery,removeItemFromGallery} from '../../redux/anime-track/anime-track.actions';
import {selectGallery} from '../../redux/anime-track/anime-track.selector';

const AnimeDetailMap = ({
  history,
  showingAnnounce,
  hidden,
  currentUser,
  updateTime,
  item,
  addItemToGallery,
  removeItemFromGallery,
  gallery,
}) => {
   let inGallery = false;
  for(let i=0;i<gallery.length;i++)
  {
    if(gallery[i].mal_id==item.mal_id)
    {
      inGallery=true;
      break;
    }
  }
  history.location.pathname = "/";
  const regex = /\s/gi;
  const addItem = async () => {
    try {
      if(!currentUser){
        showingAnnounce({check:false,title:"Xin chào",para:"Bạn cần phải đăng nhập để thực hiện chức năng này"});
      }
      else{
        addItemToGallery(item,currentUser.id);
        showingAnnounce({check:true,title:"Xin chào",para:"Đã thêm vào danh sách"});
      }
    } catch (error) {
      alert(error.message);
    }
  };
   const removeItem =async()=>{
    try{
      removeItemFromGallery(item,currentUser.id);
      showingAnnounce({check:true,title:"Đã bỏ theo dõi"})
    }
    catch(error)
    {
      alert(error.message);
    }
  };
  return (<BigContainer>
      {!hidden?
      <Announcement />:null
      }
      <AnimeDetailHeader>{item.title}</AnimeDetailHeader>
      <AnimeDetailContainer>
        <AnimeImageContainer>
        <AnimeImage src={item.image_url} alt="image name"></AnimeImage>
          {inGallery?(
        <TrackingButton onClick={() => removeItem()}>
              <TrackingIcon className="fa fa-bookmark"></TrackingIcon>
              Bỏ theo dõi
            </TrackingButton>):(<TrackingButton onClick={() => addItem()}>
              <TrackingIcon className="fa fa-bookmark"></TrackingIcon>
              Theo dõi
            </TrackingButton>)
      }
          <ButtonContainer>
            <AnimeDetailButton>Xem Anime</AnimeDetailButton>
                <AnimeDetailButton onClick={()=>updateTime(item.mal_id)}>Cập nhật</AnimeDetailButton>
          </ButtonContainer>
          </AnimeImageContainer>
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
                    state: { value: category, listname: "the loai" },
                  }}
                >
                  {category.name}
                </AnimeCategory>
              ))}
            </AnimeCategoryContainer>
            <AnimeInfo>Dạng anime: <AnimeCategory  
                 key={item.type}
                  to={{
                    pathname: `tv-movie/${item.type
                      .toLowerCase()
                      .replace(regex, "-")}/page/${1}
                    `,
                    state: { value: item.type, listname:  "tv movie" },
                  }}>{item.type}</AnimeCategory></AnimeInfo>
            <AnimeInfo>Season: <AnimeCategory  key={item.season}
                  to={{
                    pathname: `season/${item.season
                      .toLowerCase()
                      .replace(regex, "-")}/page/${1}
                    `,
                    state: { value: item.season, listname: "season" },
                  }}>{item.season}</AnimeCategory></AnimeInfo>
            <AnimeInfo>Năm: <AnimeCategory
             key={item.year}
                  to={{
                    pathname: `nam/${item.year}/page/${1}
                    `,
                    state: { value: item.year, listname: "nam" },
                  }}>{item.year}</AnimeCategory></AnimeInfo>
            <AnimeInfo>Lượt xem: {item.members}</AnimeInfo>
          </PanelContainer>
          <PanelContainer>
            <AnimeEpisodeContainer></AnimeEpisodeContainer>
          </PanelContainer>
          <BackgroundUpdate item={item}></BackgroundUpdate>
        </AnimeInfoContainer>
      </AnimeDetailContainer>
      <PanelContainer>
        <AnimeContentTitle>"Nội dung"</AnimeContentTitle>
        <AnimeContentPara>{item.synopsis}</AnimeContentPara>
      </PanelContainer>
      <Comment currentUser={currentUser} id={item.mal_id}></Comment>
    </BigContainer>)
}

const mapStateToProps =  createStructuredSelector({
  hidden: selectAnnounceHidden,
  currentUser:selectCurrentUser,
   gallery:selectGallery,
});

const mapDispatchToProps = (dispatch) => ({
  showingAnnounce: (announceInfo) => dispatch(showingAnnounce(announceInfo)),
  updateTime:(id)=>dispatch(updateTime(id)),
  addItemToGallery:(item,userId)=>dispatch(addItemToGallery(item,userId)),
  removeItemFromGallery:(item,userId)=>dispatch(removeItemFromGallery(item,userId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AnimeDetailMap)
);
