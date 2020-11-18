import styled from "styled-components";
export const RatingFrame = styled.div`
  margin-top: 63px;
  width: 300px;
  height:700px;
  display: flex;
  border-radius:10px;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  background-color: #333037;
`;

export const RatingFrameTitleContainer = styled.div`
  width:100%;

`

export const RatingFrameTitle = styled.p`
  color: white;
  font-family:Tahoma;
  font-size:15px;
  padding:20px;
  margin:0;
`;
export const PeriodContainer = styled.div`
  width:80%;
  display:flex;
  align-items:center;
  padding-bottom:15px;
  justify-content:space-between;
    border-bottom:0.3px solid #5B636A;
    
`

export const Period = styled.button`
  border:none;
  background:none;
  color:#5B636A;
  cursor:pointer;
  outline:none;
  &:hover{
    color:#2A99E6;
  }
  &:focus{
    color:#2A99E6;
  }
`


export const ListItemContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  min-height:500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
