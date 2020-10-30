import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  AccountDropdownContainer,
  BoxCollectionView,
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
      <BoxCollectionView to={{ pathname: "/bo-suu-tap" }}>
        Anime đã thêm
      </BoxCollectionView>
      <CustomButton onClick={handleClick}>Thoát khỏi tài khoản</CustomButton>
    </AccountDropdownContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleAccountDropdown: () => dispatch(toggleAccountDropdown()),
  SignOutStart: () => dispatch(SignOutStart()),
});
export default connect(null, mapDispatchToProps)(AccountDropdown);
