import styled from "styled-components";
import { Link } from "react-router-dom";

export const BigContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const PageNumber = styled(Link)`
  width: 18px;
  height: 18px;
  text-align: center;
  background-color: orange;
  border: 0.5px solid black;
  border-radius: 2px;
  color: black;
`;

export const CurrentPage = styled.div`
  width: 18px;
  height: 18px;
  text-align: center;
  background-color: orange;
  border: 0.5px solid black;
  border-radius: 2px;
  color: black;
`;
