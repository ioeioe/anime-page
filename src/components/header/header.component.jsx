import React from "react";
import { connect } from "react-redux";
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  OptionContainer,
  OptionLink,
} from "./header.styles";
import { createStructuredSelector } from "reselect";

import { selectHiddenDropdown } from "../../redux/account/account.selector";
import AccountIcon from "../account-icon/account-icon.component";
import AccountDropdown from "../account-dropdown/account-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selector";
import SearchInput from "../search-input/search-input.component";
import logo from "../../images-source/logo2.png";

const Header = ({ currentUser, hidden }) => {
  
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoImage src={logo} alt="anime logo"></LogoImage>
      </LogoContainer>
      <SearchInput></SearchInput>
      {currentUser ? (
        <AccountIcon user={currentUser}></AccountIcon>
      ) : (
        <OptionContainer>
          <OptionLink to="/dang-nhap">Đăng nhập</OptionLink>
          <OptionLink to="/dang-ki">Đăng kí</OptionLink>
        </OptionContainer>
      )}
      {hidden ? null : <AccountDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectHiddenDropdown,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
