import React from "react";
import { connect } from "react-redux";
import {
  IncomingItemContainer,
  IncomingItemImageContainer,
  IncomingItemImage,
  IncomingItemDate,
  IncomingItemInfo,
  IncomingItemEpisode,
  IncomingItemScore,

} from "./incoming-item.styles";
import PlayButton from '../play-button/play-button.component';

const IncomingItem = ({ item }) => {

  let day;
  let month;
  let year;
  if(item.airing_start)
  {
  let date = new Date(item.airing_start);
   day = date.getDate();
   month = date.getMonth()+1;
   year = date.getFullYear();
  }
  else{
    day = "?";
    month="?";
    year=item.year;
  }
  
  return (
    <IncomingItemContainer to={{
        pathname: `anime/${item.mal_id}/${item.routeName}`,
        state:{item:item},
      }}>
        <IncomingItemImageContainer>
        <IncomingItemImage src={item.image_url} alt="image"></IncomingItemImage>
         <PlayButton />
        </IncomingItemImageContainer>
       
        <IncomingItemInfo>
          <IncomingItemEpisode>       
             {item.episodes}
          </IncomingItemEpisode>
          <IncomingItemScore>
            {item.score}        
          </IncomingItemScore>
        </IncomingItemInfo>
        <IncomingItemDate>{day}/{month}/{year}</IncomingItemDate>
    </IncomingItemContainer>
  );
};

export default IncomingItem;
