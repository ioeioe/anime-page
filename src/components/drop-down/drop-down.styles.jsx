import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  background-color: rgba(0, 0, 0, 0.9);
  grid-gap: 30px;
  z-index: 4;
  top: ${(props) => `${props.yPos}px`};
  left: ${(props) => `${props.xPos}px`};
`;
