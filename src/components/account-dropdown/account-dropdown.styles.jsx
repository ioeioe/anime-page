import styled from "styled-components";
import { Link } from "react-router-dom";
export const AccountDropdownContainer = styled.div`
  font-family:Tahoma;
  font-size:12px;
  position: absolute;
  top: 80px;
  left: 1045px;
  width: 170px;
  height: auto;
  border:none;
  border-radius:20%;
  display: flex;
  flex-direction: column;
  background-color: #282828;
`;

export const AccountDropdownItem = styled(Link)`
  border: none;
  background-color: #282828;
  color:#CBAAAA;
  height:40px;
  width: 100%;
  display:flex;
  align-items:center;

  &:hover {
    color:#DBDBDB;
    background-color: #686363;
  }
`;

export const AccountDropdownItemIcon = styled.i`
  margin-left:30px;
`

export const AccountDropdownItemText = styled.p`
  margin-left:30px;
`

export const AccountDropdownButton = styled.button`
  width:100%;
  height:40px;
  border:none;
  background-color: #282828;
  color:#CBAAAA;
  outline:none;
   &:hover {
     color:#DBDBDB;
    background-color: #686363;
  }
  
`