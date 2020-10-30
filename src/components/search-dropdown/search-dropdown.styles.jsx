import styled from "styled-components";
import { Link } from "react-router-dom";
export const SearchDropdownContainer = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  position: absolute;
  top: 30px;
  left: 10px;
  z-index: 6;
  flex-direction: column;
`;
export const SearchDropdownList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const SearchDropdownButton = styled(Link)`
  width: 105%;
  height: 30px;
  color: black;
  font-weight: bold;
  text-align: center;
  background-color: aqua;
  &:hover {
    background-color: orange;
  }
`;

export const SearchNotFound = styled.p`
  width: 100%;
  height: 30px;
  margin: 0;
  padding: 0;
  background-color: white;
`;
