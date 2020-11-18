import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import { SlideItemContainer,SlideItemInfo,SlideItemIcon,SlideItemTitle,SlideItemRank,SlideItemView,SlideItemScore,SlideItemTime,SlideItemEpisode,SlideItemYear,SlideItemPara,SlideItemGenres,SlideItemSubGenres,SlideItemButton } from "./slide-item.styles";


const SlideItem = ({item})=>{
    const regex = /\s/gi;
    return (
       <SlideItemContainer style={{backgroundImage:"url("+item.background_url+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
         
           <SlideItemInfo>
               <SlideItemTitle>{item.title}</SlideItemTitle>
               <SlideItemRank>
                    <SlideItemView><SlideItemIcon className="fa fa-eye"></SlideItemIcon>{item.members} Lượt xem</SlideItemView>
                    <SlideItemScore>Đánh giá: {item.score}<SlideItemIcon className="fa fa-star" style={{color:"orange"}}></SlideItemIcon></SlideItemScore>
               </SlideItemRank>
               <SlideItemTime>
                   {
                       item.continuing?<SlideItemEpisode><SlideItemIcon className="fa fa-clock-o"></SlideItemIcon>{item.episodes}/{item.episodes} Tập</SlideItemEpisode>:<SlideItemEpisode><SlideItemIcon className="fa fa-clock-o"></SlideItemIcon>{item.episodes}/?? Tập</SlideItemEpisode>
                   }
                   
                   <SlideItemYear><SlideItemIcon className="fa fa-calendar"></SlideItemIcon>{item.year}</SlideItemYear>
               </SlideItemTime>
               {
                   item.synopsis.length>200?<SlideItemPara>{item.synopsis.slice(0,200)}...</SlideItemPara>:<SlideItemPara>{item.synopsis}</SlideItemPara>
               }
               
                <SlideItemGenres><SlideItemIcon className="fa fa-list"></SlideItemIcon>Thể loại: 
                    {item.genres.map(genres=>
                    <SlideItemSubGenres to={{
                    pathname: `the-loai/${genres.name
                      .toLowerCase()
                      .replace(regex, "-")}/page/${1}
                    `,
                    state: { value: genres, listname: "the loai" },
                  }} key={genres.name}>{genres.name}</SlideItemSubGenres>)}
                    </SlideItemGenres>
                    <SlideItemButton><SlideItemIcon className="fa fa-play"></SlideItemIcon>Xem Phim</SlideItemButton>
           </SlideItemInfo>
       </SlideItemContainer>
    )
}
export default SlideItem;
