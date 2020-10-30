import styled from "styled-components";
import {Link} from 'react-router-dom';
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:30%;
  margin:70px auto;
  color:lightblue;
  border:2px solid orange;
  border-radius:15px;
`;

export const SignUpIcon = styled.img`
  position:absolute;
  border:none;
  width:100px;
  height:100px;
  border-radius:50%;
  top:20px;
  left:620px;

`
export const LinkToSignIn = styled(Link)`
  
`
export const SignUpHeader = styled.h2`
  color: white;
  text-align:center;
  margin-top:50px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
`;
export const ImageLabel = styled.label`
  width:100px;
  height:100px;
  border:none;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  align-items:center;
  background:none;
  z-index:1;
  text-align:center;
  &:hover{
    cursor:pointer;
  }
`
export const ImageAndName = styled.div`
  display:flex;
  width:70%;
  height:100px;
  align-items:center;
  justify-content:space-between;
` 

export const NameContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:100px;
`
export const ProfileImage =styled.img`
  width:100px;
  height:100px;
  position:absolute; 
  border-radius:10px;
  outline:none;
  border:1px solid yellow;
  left:530px;
`