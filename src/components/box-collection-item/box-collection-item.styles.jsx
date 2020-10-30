import styled from "styled-components";
import { Link } from "react-router-dom";
export const BoxCollectionItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
`;

export const BoxCollectionItemOrder = styled.p``;

export const BoxCollectionItemImage = styled.img`
  width: 60px;
  height: 80px;
`;

export const BoxCollectionItemTitle = styled.p`
  width: 100px;
  color: white;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;
export const BoxCollectionItemEpisode = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: #4d3c39;
  border: none;
  &:hover {
    background-color: #df4c32;
  }
`;

export const BoxCollectionItemVote = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
`;

export const BoxCollectionItemDelete = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: #d92d0f;
  border: none;
  &:hover {
    background-color: orange;
  }
`;
