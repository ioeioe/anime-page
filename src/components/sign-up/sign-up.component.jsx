import React, { useState } from "react";
import { connect } from "react-redux";
import { SignUpContainer, SignUpForm,ImageAndName,NameContainer,ImageLabel,SignUpHeader,SignUpIcon,ProfileImage,LinkToSignIn } from "./sign-up.styles";
import {createStructuredSelector} from "reselect";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Spinner from '../spinner/spinner.component';

import { SignUpStart,EmailSignInStart } from "../../redux/user/user.actions";
import {isLoading} from '../../redux/user/user.selector';
export const SignUp = ({ SignUpStart,EmailSignInStart,isLoading }) => {


  const [userCredentials, setUserCredentials] = useState({
    firstName:"",
    lastName:"",
    userName: "",
    password: "",
    confirm: "",
    
  });

  const [imageAsFile,setImageAsFile]=useState('');

  
  const {firstName,lastName, userName, password, confirm } = userCredentials;
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleImageAsFile=(e)=>{
    const image=e.target.files[0];
    var reader = new FileReader();
    var imgtag = document.getElementById('myimage');
    var label = document.getElementById('label');
    var icon = document.getElementById('icon');
    reader.onload = function(e){
      imgtag.src=e.target.result;
      label.innerHTML="";
      icon.className="";
    }
    reader.readAsDataURL(image);
    setImageAsFile(image);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirm) {
      alert("mật khẩu không khớp");
      return;
    }
    console.log(imageAsFile);
    try{
      SignUpStart({firstName,lastName,userName, password,imageAsFile});
    //  setTimeout(() => {
    //        EmailSignInStart({username:userName,password});
    //  }, 5000);
   
    }
    catch(err)
    {
      console.log(err);
      if(err.code==="auth/email-already-in-use")
      {
        alert("Đã có người sử dụng tài khoản này");
      }
    }
  };

  return (
    
    <SignUpContainer>
     
         <SignUpIcon src="https://images-na.ssl-images-amazon.com/images/I/91W1pviU7+L._RI_.jpg"></SignUpIcon>
      <SignUpHeader>Tạo tài khoản</SignUpHeader>
      <SignUpForm onSubmit={handleSubmit}>
        <ProfileImage id="myimage"></ProfileImage>
        <ImageAndName>
            <ImageLabel htmlFor="profileImage">
              
              <i className="fa fa-3x fa-user-o" id="icon"></i>
              <label id="label">Chọn ảnh đại diện</label>
            </ImageLabel>
            <FormInput type="file" key="profileImage" id = "profileImage" handleChange={handleImageAsFile} profileImage require ></FormInput>
          <NameContainer>
            <FormInput type="text" key="firstName" name="firstName" value={firstName}  handleChange= {handleChange} placeholder="Họ" required firstName></FormInput>
            <FormInput type="text" key="lastName" name="lastName" value={lastName}  handleChange= {handleChange} placeholder="Tên" required lastName></FormInput>
          </NameContainer>
        </ImageAndName>
        <FormInput
          key="username"
          name="userName"
          type="text"
          value={userName}
          placeholder="&#xf199; tên đăng nhập"
          title="tên đăng nhập có ít nhất 6 kí tự"
          handleChange={handleChange}
          pattern=".{6,}"
          required
        ></FormInput>
        <FormInput
          key="password"
          name="password"
          type="password"
          value={password}
          title="mật khẩu có ít nhất 8 kí tự"
          pattern=".{8,}"
          placeholder="&#xf023; mật khẩu"
          handleChange={handleChange}
          required
        ></FormInput>
        <FormInput
          key="confirm"
          name="confirm"
          type="password"
          value={confirm}
          placeholder="&#xf023; mật khẩu 1 lần nữa"
          handleChange={handleChange}
          required
        ></FormInput>
          {
        isLoading?(
          <Spinner></Spinner>
        ):null
      }
        <CustomButton type="submit">Tạo tài khoản</CustomButton>
        <span>Đã có tài khoản?
          <LinkToSignIn to="/dang-nhap"> Đăng nhập ở đây</LinkToSignIn>
        </span>
      </SignUpForm>
    </SignUpContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  isLoading:isLoading
})
const mapDispatchToProps = (dispatch) => ({
  SignUpStart: ({firstName,lastName,userName, password, imageAsFile}) =>
    dispatch(SignUpStart({firstName,lastName,userName, password, imageAsFile})),
    EmailSignInStart:({username,password})=>dispatch(EmailSignInStart({username,password})),

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
