import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 30%;
  height: 25px;
  margin-left: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchLogo = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  cursor: pointer;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;
