import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const SlideItemContainer = styled.div`
    width:100%;
    height:370px;
`
export const SlideItemInfo = styled.div`
    width:350px;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    position:absolute;
    z-index:1;
    padding:10px;
`
export const SlideItemTitle = styled.h2`
    color:white;
`
export const SlideItemTime = styled.div`
    color:white;
    display:flex;
    justify-content:space-between;
    width:170px;
`
export const SlideItemRank = styled.div`
    color:white;
    display:flex;
    justify-content:space-between;
    width:300px;
`

export const SlideItemView = styled.p`

`
export const SlideItemScore= styled.p`

`


export const SlideItemEpisode = styled.p`

`
export const SlideItemYear = styled.p`

`
export const SlideItemIcon = styled.i`
padding:0px 5px 0px 5px;
`



export const SlideItemPara = styled.p`
    color:#E9DAC4;
    opacity:80%;
`

export const SlideItemGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  color:white;
`
export const SlideItemSubGenres = styled(Link)`
    color:white;
    margin:0;
      padding:0 10px 0 10px;
      &:hover {
    background-color: orange;
    border: none;
    border-radius: 3px;
  }


`
export const SlideItemButton = styled.button`
    background-color:red;
    color:white;
    width:90px;
    height:40px;
    border:none;
    border-radius:10px;
    outline:none;
    cursor:pointer;
`
