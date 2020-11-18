import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  AccountDropdownContainer,
  AccountDropdownItem,
  AccountDropdownItemIcon,
  AccountDropdownItemText,
  AccountDropdownButton
} from "./account-dropdown.styles";
import CustomButton from "../custom-button/custom-button.component";
import { SignOutStart } from "../../redux/user/user.actions";
import { toggleAccountDropdown } from "../../redux/account/account.actions";
const AccountDropdown = ({ SignOutStart, toggleAccountDropdown }) => {
  const handleClick = async () => {
    await SignOutStart();
    toggleAccountDropdown();
  };

  return (
    <AccountDropdownContainer>
       <AccountDropdownItem to={{ pathname: "/tai-khoan" }}>
        <AccountDropdownItemIcon className="fa fa-user-circle"></AccountDropdownItemIcon>
        <AccountDropdownItemText>Tài khoản</AccountDropdownItemText>
      </AccountDropdownItem>
      <AccountDropdownItem to={{ pathname: "/theo-doi" }}>
               <AccountDropdownItemIcon className="fa fa-th-list"></AccountDropdownItemIcon>
         <AccountDropdownItemText>Theo dõi</AccountDropdownItemText>
      </AccountDropdownItem>    
      <AccountDropdownButton onClick={handleClick}>
        <AccountDropdownItemIcon className="fa fa-sign-out"></AccountDropdownItemIcon>       
        Thoát</AccountDropdownButton>
    </AccountDropdownContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleAccountDropdown: () => dispatch(toggleAccountDropdown()),
  SignOutStart: () => dispatch(SignOutStart()),
});
export default connect(null, mapDispatchToProps)(AccountDropdown);
