import styled from "styled-components";
import {Link} from 'react-router-dom';
export const ItemContainer = styled(Link)`
  margin-top: 15px;
  background-color: #2c0822;
  width: 170px;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 90%;
`;

export const ItemEpisode = styled.div`
  width: 40px;
  height: 20px;
  background-color: orange;
  border-radius: 30px;
  color: white;
  text-align: center;
`;

export const ItemTitle = styled.div`
  width: 90%;
  text-align: center;
  color: #facced;
`;

export const ItemInfo = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
`;

export const ItemScore = styled.div`
  width: 40px;
  height: 20px;
  background-color: orange;
  border-radius: 30px;
  color: white;
  text-align: center;
`;
