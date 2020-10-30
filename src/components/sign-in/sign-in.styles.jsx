import styled from "styled-components";
import {Link} from "react-router-dom";
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:30%;
  margin:70px auto;
  color:lightblue;
  border:2px solid orange;
  border-radius:15px;
`;

export const SignInIcon = styled.img`
  position:absolute;
  border:none;
  width:100px;
  height:100px;
  border-radius:50%;
  top:20px;
  left:620px;

`
export const LinkToSignUp = styled(Link)`
  
`

export const SignInHeader = styled.h2`
  color: white;
  text-align:center;
  margin-top:50px;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
`;





