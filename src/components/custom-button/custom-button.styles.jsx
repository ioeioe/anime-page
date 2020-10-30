import styled from "styled-components";

export const CustomButtonContainer = styled.button`
   font-family:  "Helvetica", FontAwesome, sans-serif;
  min-width: 165px;
  width: 300px;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 50px;
  margin:0;
  padding: 0;
  font-size: 15px;
  margin: 7px;
  text-align:center;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius:10px;

  &:focus {
    outline: none;
  }
   background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #375ae8;
    border: none;
  }
`;
