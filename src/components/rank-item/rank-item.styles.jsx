import styled from "styled-components";
import {Link} from 'react-router-dom'
export const RankItemContainer = styled(Link)`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #9999ff;
  cursor: pointer;
`;

export const RankItemImage = styled.img`
  width: 50px;
  height: 70px;
`;
export const RankItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 15px;
  margin-left: 10px;
`;

export const RankItemTitle = styled.p`
  color: white;
  font-weight: bold;

  margin: 0;
  padding: 0;
`;

export const RankItemQuantity = styled.p`
  color: white;
  margin: 0;
  padding: 0;
`;

export const RankItemEpisode = styled.div`
  background-color: red;
  width: 20px;
  height: 15px;
  text-align: center;
  position: absolute;
  color: white;
  z-index: 1;
  font-size: 12px;
`;
