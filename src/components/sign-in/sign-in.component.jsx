import React, { useState } from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {
  SignInContainer,
  SignInIcon,
  SignInHeader,
  SignInForm,
  LinkToSignUp,

} from "./sign-in.styles";
import Spinner from '../spinner/spinner.component';
import {isLoading} from '../../redux/user/user.selector';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  EmailSignInStart,
  GoogleSignInStart,
} from "../../redux/user/user.actions";

export const SignIn = ({ EmailSignInStart, GoogleSignInStart,isLoading}) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userCredentials;
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    EmailSignInStart(username, password);
    
   
  };
  return (

    <SignInContainer>
     
      <SignInIcon src="https://images-na.ssl-images-amazon.com/images/I/91W1pviU7+L._RI_.jpg"></SignInIcon>
      <SignInHeader>đăng nhập</SignInHeader>
      <SignInForm onSubmit={handleSubmit}>
        <FormInput
          name="username"
          type="text"
          value={username}
          placeholder="&#xf199; tên tài khoản"
          handleChange={handleChange}
          required
        ></FormInput>
        <FormInput
          name="password"
          type="password"
          value={password}
          placeholder="&#xf023; mật khẩu"
          handleChange={handleChange}
          required
        ></FormInput>
          {
        isLoading?(
          <Spinner></Spinner>
        ):null
      }
          <CustomButton type="submit" onClick={handleSubmit}>
            đăng nhập
          </CustomButton>
          <CustomButton
            type="button"
            onClick={GoogleSignInStart}          
          >
            &#xf199; đăng nhập với google
          </CustomButton>
       
        <span>Chưa có tài khoản?
          <LinkToSignUp to="/dang-ki"> Đăng kí tài khoản ở đây</LinkToSignUp>
        </span>
      </SignInForm>
    </SignInContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  isLoading:isLoading
})
const mapDispatchToProps = (dispatch) => ({
  GoogleSignInStart: () => dispatch(GoogleSignInStart()),
  EmailSignInStart: (username, password) =>
    dispatch(EmailSignInStart({ username, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
