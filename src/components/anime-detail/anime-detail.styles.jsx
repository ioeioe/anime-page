import styled from "styled-components";
import { Link } from "react-router-dom";

export const BigContainer = styled.div`
  width: 97%;
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 10px;
  background-color: #060201;
  color: white;
`;
export const AnimeDetailContainer = styled.div`
  width: 750px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const AnimeDetailHeader = styled.div`
  width: 95%;

  background-color: #161616;
  border-radius: 5px;
  color: white;
  padding: 10px;
`;

export const AnimeImageContainer = styled.div`
  width:auto;
  
  height:318px;
  border: 2px solid white;
  border-radius:10px;
  margin:20px 0 0 20px;
`

export const AnimeImage = styled.img`
max-width:300px;
  height:318px;
`;

export const AnimeInfoContainer = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AnimeEpisodeContainer = styled.div`
  width: 200px;
  height: 60px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;

export const AnimeTitle = styled.p`
  color: orange;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
export const PanelContainer = styled.div`
  
  width: 100%;
  height:100%;
  border: 0.2px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: #161616;
`;
export const AnimeInfo = styled.p`
  margin-left: 10px;
  
`;

export const AnimeContentTitle = styled.p`
  color: orange;
`;
export const AnimeContentPara = styled.p`
  color: white;
  line-height: 20px;
`;

export const AnimeDetailButton = styled.div`
  width: auto;
  height: auto;
  background-color: rgb(210, 50, 50);
  border: none;
  border-radius: 5px;
  text-align: center;
  padding: 5px;

  &:hover {
    background-color: orange;
  }
`;

export const AnimeCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 10px 10px;
`;
export const AnimeCategory = styled(Link)`
  color: lightblue;
  margin: 0px 3px 0px 3px;

  &:hover {
    background-color: orange;
    border: none;
    border-radius: 3px;
  }
`;

export const TrackingButton = styled.div`
  position:relative;
  top:-330px;
  width:90px;
  border-radius:5px;
  background-color:rgba(0,0,0,0.4);
  color:white;
  text-align:center;
  &:hover{
    background-color:rgba(0,0,0,0.9);
    color:aqua;
    cursor:pointer;
  }
`

export const TrackingIcon = styled.i`
 padding:5px;
color: transparent;
   -webkit-text-stroke-width: 0.3px;
   -webkit-text-stroke-color: lightblue;
`


export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: auto;
  top:-80px;
  left:10px;
  z-index: 1;
`;


export const PageNotFoundImage = styled.img`
 
  width:100%;
  height:500px;
`

export const PageNotFoundButton = styled(Link)`
  color:white;
  background-color:lightblue;
  border:none;
  outline:none;
  border-radius:10px;
  padding:10px;
  position:absolute;
  top:550px;
  left:450px;
`
