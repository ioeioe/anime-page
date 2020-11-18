import styled from "styled-components";
import {Link} from 'react-router-dom';

export const SearchItemContainer = styled(Link)`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: white;
  padding: 10px;
  &:hover {
    background-color: rgb(0, 210, 0);
  }
`;

export const SearchItemImage = styled.img`
  width: 50px;
  height: 70px;
`;

export const SearchItemInfo = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 10px 5px 10px;
`;

export const SearchItemTitle = styled.p`
  color: blacck;
  margin: 0;
  padding: 0;
`;
export const SearchItemEpisode = styled.p`
  color: black;
  margin: 0;
  padding: 0;
`;
