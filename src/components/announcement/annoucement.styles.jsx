import styled,{keyframes} from "styled-components";

const opacityAnimation = keyframes`
 0% {left:1500px }
 15%{left:1100px}
 75%{left:1100px}
 88%{left:1050px}
 100% {left:1500px }
`;

export const AnnouncementContainer = styled.div`
  position:absolute;
  z-index:2;
  top:200px;
  width: 250px;
  height: 100px;
  border: none;
  border-radius: 10px;
  background-color: red;
  display: flex;
  align-items: center;
  animation-name: ${opacityAnimation};
  animation-timing-function: ease-in;
  animation-duration: 3s;
`;

export const AnnouncementImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const AnnouncementInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnnouncementTitle = styled.h2``;
export const AnnouncementPara = styled.p``;
export const AnnouncementClose = styled.button`
  background-color: red;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  &:hover {
    background-color: white;
    color: red;
  }
`;
