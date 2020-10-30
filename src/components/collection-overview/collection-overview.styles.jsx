import styled from "styled-components";


export const CollectionOverviewContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CollectionTitleContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
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
