import styled,{css} from "styled-components";

const profileImageInput = css`
  display:none;

`;
const firstNameInput = css `
  width:150px;
  height:50px;
  border:none;
  border-bottom:1px solid lightblue;
  border-radius:10px 10px 0 0;
  margin:0;
  padding:0;
`
const lastNameInput = css `
  width:150px;
  height:50px;
  border:none;
  border-radius:0 0 10px 10px;
    margin:0;
  padding:0;
`
const getInputStyles = (props) => {
  if (props.profileImage) {
    return profileImageInput;
  }
  else if(props.firstName){
    return firstNameInput;

  }
  else if(props.lastName){
    return lastNameInput;
  }
  return null;
};


export const FormInputContainer = styled.div`
  
`;

export const Input = styled.input`
   font-family:  "Helvetica", FontAwesome, sans-serif;
  background: white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 280px;
 
  border: none;
  border-radius: 10px;
  margin: 30px auto;
  outline: none;
  font-size: 12px;
  ${getInputStyles}
`;
