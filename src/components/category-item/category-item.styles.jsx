import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryItemContainer = styled(Link)`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: none;
  &:hover {
    background-color: rgba(170, 170, 255, 0.3);
  }
`;

export const CategoryItemName = styled.p`
  color: white;
  width: 80%;
  margin: auto;
`;
