import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PageContainer } from "./sign-up-page.styles";

import { hideRanking } from "../../redux/ranking/ranking.actions";

import SignUp from "../../components/sign-up/sign-up.component";

const SignUpPage = ({ hideRanking }) => {
  useEffect(() => {
    hideRanking();
  });
  return (
    <PageContainer>
      <SignUp />
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  hideRanking: () => dispatch(hideRanking()),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
