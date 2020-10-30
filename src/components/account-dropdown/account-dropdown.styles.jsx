import styled from "styled-components";
import { Link } from "react-router-dom";
export const AccountDropdownContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 1070px;
  width: 170px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const BoxCollectionView = styled(Link)`
  border: none;
  border-bottom: 0.5px solid orange;
  background-color: white;
  width: 100%;
  &:hover {
    background-color: lightblue;
  }
`;
