import React from "react";
import { connect } from "react-redux";
import {
  AccountIconContainer,
  AccountIconImage,
  AccountIconDisplayname,
  AccountIconSpan
} from "./account-icon.styles";
import logo from '../../images-source/logo.png';
import { toggleAccountDropdown } from "../../redux/account/account.actions";

const AccountIcon = ({ user, toggleAccountDropdown }) => {
  return (
    <AccountIconContainer onClick={toggleAccountDropdown}>
      {
        user.imageUrl?(
      <AccountIconImage src={user.imageUrl} alt="profile image"></AccountIconImage>):
      <AccountIconImage src={logo} alt="profile image"></AccountIconImage>
  }
      <AccountIconSpan>
      <span className="fa fa-angle-down"></span>
      </AccountIconSpan>
    </AccountIconContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleAccountDropdown: () => dispatch(toggleAccountDropdown()),
});

export default connect(null, mapDispatchToProps)(AccountIcon);
