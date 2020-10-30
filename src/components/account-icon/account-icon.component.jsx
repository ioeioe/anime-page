import React from "react";
import { connect } from "react-redux";
import {
  AccountIconContainer,
  AccountIconImage,
  AccountIconDisplayname,
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
      <AccountIconDisplayname>
        {user.firstName || user.lastName ? user.firstName +" "+ user.lastName : null}
      </AccountIconDisplayname>
      <span className="fa fa-angle-down"></span>
    </AccountIconContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleAccountDropdown: () => dispatch(toggleAccountDropdown()),
});

export default connect(null, mapDispatchToProps)(AccountIcon);
