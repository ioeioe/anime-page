import styled from "styled-components";
import {Link} from 'react-router-dom';

export const CollectionOverviewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
`;

export const CollectionTitleContainer = styled.div`
  width: 100%;
`;
export const CollectionTitle = styled.p`
  color: white;
`;

export const CollectionGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
export const PageContainer = styled.div`
  width: 15%;
  display: flex;
  margin:auto;

`;

export const PageNumber = styled(Link)`
  margin:5px;
  width: 18px;
  height: 18px;
  text-align: center;
  background-color: #2B2B2B;
  border-radius: 5px;
  color: white;
  &:hover{
    background-color:orange;
  }
`;

export const CurrentPage = styled.div`
  margin:5px;
  width: 18px;
  height: 18px;
  text-align: center;
  background-color: #22EAE1;
  border-radius: 5px;
  color: white;
`;

