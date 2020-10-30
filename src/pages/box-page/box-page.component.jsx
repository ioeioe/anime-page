import React, { useEffect } from "react";
import { connect } from "react-redux";

import { BoxPageContainer, BoxPageTitle } from "./box-page.styles";
import BoxCollection from "../../components/box-collection/box-collection.component";
import { hideRanking } from "../../redux/ranking/ranking.actions";

const BoxPage = ({ hideRanking }) => {
  useEffect(() => {
    hideRanking();
  });
  return (
    <BoxPageContainer>
      <BoxPageTitle>Danh sách anime đã thêm</BoxPageTitle>
      <BoxCollection></BoxCollection>
    </BoxPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  hideRanking: () => dispatch(hideRanking()),
});

export default connect(null, mapDispatchToProps)(BoxPage);
