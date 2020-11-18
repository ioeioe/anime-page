import styled,{keyframes} from 'styled-components';
import {Link} from 'react-router-dom';

import {PlayButtonContainer,PlayButtonIcon} from '../play-button/play-button.styles';

export const IncomingItemImageContainer = styled.div`
  width: 140px;
  height: 180px;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const IncomingItemImage = styled.img`
    width:100%;
    height:100%;
`
const animation=keyframes`
  0%{width:0;height:0;}
  100%{width:50px;height:50px;}
`
const animation2 = keyframes`
  0%{font-size:0px;}
  100%{font-size:15px;}
`
export const IncomingItemContainer = styled(Link)`
  background-color: #2c0822;
  width:140px;
  height:180px;
  display: flex;
  flex-direction: column;
  align-items:center;
  cursor: pointer;
  border-radius:10px;
  &:hover ${IncomingItemImage}{
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
`
export const IncomingItemInfo = styled.div`
  width:140px;
  height:auto;
  display:flex;
  justify-content:space-between;
  position:absolute;
  z-index:1;
  color:white;
`

export const IncomingItemEpisode = styled.p`
  width: 40px;
  height: 20px;
  background-color: orange;
  border-radius: 30px;
  color: white;
  text-align: center;
  margin:0;
`
export const IncomingItemScore=styled.p`
  width: 40px;
  height: 20px;
  background-color: orange;
  border-radius: 30px;
  color: white;
  text-align: center;
  margin:0;
  
`

export const IncomingItemDate = styled.p`
  position:absolute;
  color:white;
  font-family:Tahoma;
  top:130px;
  background-color:rgba(0,117,195,0.7);
  padding:5px;
  border-radius:10px;

`