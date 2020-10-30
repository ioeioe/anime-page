import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1f1f;
`;

export const LogoContainer = styled(Link)`
  height: 200%;
  width: 200px;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  width: 17%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  width: auto;
  height: 15px;
  background-color: #c4b5b1;
  color: #3b2924;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;
