import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PageContainer } from "./sign-in-page.styles";

import { hideRanking } from "../../redux/ranking/ranking.actions";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInPage = ({ hideRanking }) => {
  useEffect(() => {
    hideRanking();
  });
  return (
    <PageContainer>
      <SignIn />
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  hideRanking: () => dispatch(hideRanking()),
});

export default connect(null, mapDispatchToProps)(SignInPage);
