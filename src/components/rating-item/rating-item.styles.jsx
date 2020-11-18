import styled,{keyframes} from "styled-components";
import {Link} from 'react-router-dom'

import {PlayButtonContainer,PlayButtonIcon} from '../play-button/play-button.styles';

export const RatingItemImageContainer = styled.div`
  width: 70px;
  height: 90px;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const RatingItemImage = styled.img`
width:100%;
height:100%;
`;

const animation=keyframes`
  0%{width:0;height:0;}
  100%{width:50px;height:50px;}
`
const animation2 = keyframes`
  0%{font-size:0px;}
  100%{font-size:15px;}
`

export const RatingItemContainer = styled(Link)`
  width: 100%;
  height: 90px;
  display: flex;
  cursor: pointer;
  font-family:tahoma;
  font-size:12px;
  &:hover ${RatingItemImage}{
     filter: brightness(70%);
  }
    &:hover ${PlayButtonContainer}
  {
    display: initial;
     animation-name: ${animation};
    animation-timing-function: ease-out;
    animation-duration: 0.2s;
  }
  &:hover ${PlayButtonIcon}
  {
    animation-name: ${animation2};
    animation-timing-function: ease-out;
    animation-duration: 0.2s;
  }
`;



export const RatingItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const RatingItemTitle = styled.p`
  color: white;
  margin: 0;
  padding: 0;
`;

export const RatingItemScoreEpisodeAndYear = styled.div`
  width:80%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:#5B636A;
`;
export const RatingItemScore=styled.p`

`

export const RatingItemEpisode = styled.p`

`
export const RatingItemYear = styled.p`

`
export const RatingItemIcon =styled.i`
  margin-right:5px;
`
export const RatingItemView = styled.div`
  background-color:red;
  color:white;
 
  padding:5px 10px 5px 10px;
  border:none;
  border-radius:20px;
  width:100px;
  font-size:10px;
  
`